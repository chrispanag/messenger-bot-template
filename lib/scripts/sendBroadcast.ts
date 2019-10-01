import { bot } from '../bot';
import { MessengerUser, sendAPI } from "ebony-messenger-adapter";
import { connect } from "mongoose";

const { Message } = sendAPI;

const PAGE_ΤΟΚΕΝ = process.env.FB_PAGE_TOKEN;
if (!PAGE_ΤΟΚΕΝ) {
    throw new Error("No page token");
}

const MONGODB = process.env.MONGODB_URI;
if (!MONGODB) {
    throw new Error("No MongoDB Uri");
}

(async () => {
    await connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        console.log("starting connection");
        const users = await MessengerUser.db.collection(MessengerUser.collection.name).find({}).toArray();
        console.log(`Sending to: ${users.length} users`);
        for (const u of users) {
            const mUser = new MessengerUser(u, PAGE_ΤΟΚΕΝ);
            await bot.scenario(mUser)
                .send(new Message({
                    text: "Test"
                }))
                .end();
        }
        console.log(`Finished sending to: ${users.length} users`);
    } catch (err) {
        throw err;
    }
})();
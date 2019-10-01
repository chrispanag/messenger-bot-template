import { bot } from '../../bot';
import { sendAPI, MessengerUser } from 'ebony-messenger-adapter';

const { Message } = sendAPI;

export async function getStarted(user: MessengerUser) {
    await bot.scenario(user)
        .send(new Message({
            text: `Γεια σου ${user.firstName} :D`
        }))
        .end();
}
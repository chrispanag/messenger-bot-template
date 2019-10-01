import { bot } from "../../bot";
import { MessengerUser } from 'ebony-messenger-adapter';

const routes = {
    stringPayloads: {
        getStarted: (user: MessengerUser) => bot.actions.exec('getStarted', user)
    },
    objectPayloads: {
    }
};

export default routes;
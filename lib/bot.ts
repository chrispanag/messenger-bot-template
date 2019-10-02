import { Bot } from 'ebony-framework';
import { MessengerAdapter, MessengerUser } from 'ebony-messenger-adapter';

import getStarted from './modules/getStarted';

export const adapter = new MessengerAdapter({
    pageId: process.env.FB_PAGE_ID ? process.env.FB_PAGE_ID : "",
    pageToken: process.env.FB_PAGE_TOKEN ? process.env.FB_PAGE_TOKEN : "",
    appSecret: process.env.FB_APP_SECRET ? process.env.FB_APP_SECRET : "",
    webhookKey: "123"
});

export const bot = new Bot<MessengerUser>([adapter], {
    mongodbUri: process.env.MONGODB_URI as string
});

// This should get imported at the end
bot.addModule(getStarted);

import { Bot } from 'ebony-framework';
import { MessengerAdapter, MessengerUser } from 'ebony-messenger-adapter';

import { fbConfig, mongodbUri } from './secret';

import getStarted from './modules/getStarted';

export const adapter = new MessengerAdapter(fbConfig);

export const bot = new Bot<MessengerUser>([adapter], {
    mongodbUri
});

// This should get imported at the end
bot.addModule(getStarted);

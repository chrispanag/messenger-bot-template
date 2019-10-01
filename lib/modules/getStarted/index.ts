import * as actions from './actions';
import text from './text';
import routes from './routes';
import { preMiddlewares } from './middlewares';

import { Module } from 'ebony-framework/build/interfaces/bot';
import { MessengerUser } from 'ebony-messenger-adapter';

const getStartedModule: Module<MessengerUser> = {
    actions,
    text,
    routes,
    preMiddlewares
};

export default getStartedModule;

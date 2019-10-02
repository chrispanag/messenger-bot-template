import { Module } from 'ebony-framework';
import { MessengerUser } from 'ebony-messenger-adapter';

import * as actions from './actions';
import text from './text';
import routes from './routes';
import { preMiddlewares } from './middlewares';

const getStartedModule: Module<MessengerUser> = {
    actions,
    text,
    routes,
    preMiddlewares
};

export default getStartedModule;

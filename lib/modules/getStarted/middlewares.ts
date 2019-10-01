import { ActionMiddleware } from 'ebony-framework/build/utilities/actions';
import { MessengerUser } from 'ebony-messenger-adapter';

export const preMiddlewares: Array<ActionMiddleware<MessengerUser>> = [
    (actionName: string, user: MessengerUser, params: any[], next) => {
        console.log(`User ${user.firstName} triggered action: ${actionName} with params ${JSON.stringify(params)}`);
        next();
    }
];
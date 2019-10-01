# Messenger Bot Template

[![Gitter](https://badges.gitter.im/ebony-framework/community.svg)](https://gitter.im/ebony-framework/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

A ready-to-go template to create your own Facebook Messenger bot using the [Ebony Framework](https://github.com/chrispanag/ebony) and the [Ebony Messenger Adapter](https://github.com/chrispanag/ebony-messenger-adapter).

## Getting Started

After you click on **Use this template**, you can **clone** the resulting repo and build your own bot.

### Prerequisites

1. You'll need a server with SSL setted up to host your bot. An easy and tested choice is [Heroku](https://heroku.com). Alternatively, for local development, you can use [Ngrok](https://ngrok.com/).
2. You'll need a Messenger Platform Facebook app. You can learn how to set up your Messenger Platform Facebook app and the basics around it, at the official [**Facebook Developers Messenger Platform tutorial**](https://developers.facebook.com/docs/messenger-platform/getting-started) (up to step 4).

### Set up

1. Get the necessary environment variables (if you do local development you can either load them through the command line, or create a `.env` file and use [dotenv](https://www.npmjs.com/package/dotenv) to load it into the `./lib/secret.ts` file). You'll need the following variables:

    a. **FB_APP_SECRET:** 

    Access your app in developers.facebook.com

    `Settings → Basic → App Secret.`

    b. **FB_PAGE_TOKEN:**

    Access your app in developers.facebook.com

    `Messenger → Settings → Page Access Token`

    c. **FB_PAGE_ID:**

    Access your page in facebook.com

    `About → Scroll Down – Page Id`

    d. **MONGODB_URI:**

    Connection URI for your MongoDB database (if you use Heroku, it will be automatically setted up).

2. If you use Heroku, just push your code to your Heroku app. In any other case, just hit `npm install`, `npm run build`, `npm start`. 

## Authors

* [Christos Panagiotakopoulos](https://github.com/chrispanag) - Initial Work 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# NodeJS + Puppeteer KingdomLikes Bot [DEPRECATED]

**DEPRECATED**: KingdomLikes introduced a very narrow daily youtube views limit to force diversification and avoid users earning a lot of points through bots like this one

![](https://i.imgur.com/g27m6M8.png)

[Video of bot running](https://youtu.be/brViPMyUO30)

  

KingdomLikes Bot  that logins into an account and then goes to the youtube views section where it opens and watch by itself all the available videos individually, given you free points automatically. When there are no more videos, the bot will sleep for 10 minutes.

  

The bot can run monitored (with automatic restart) or unmonitored (without automatic restart): If there are no videos for 5 continuous sleep rounds and the bot is running unmonitored, it will purposely shut down, otherwise it will keep running, restarting itself in case of an unexpected crashing

  

## Software PreRequisites

* NodeJS v12 or higher https://nodejs.org/es/download/current/

* pm2 http://pm2.keymetrics.io/ (if you want the app to automatically restart in case of error)

  

## Config

Create a .env file with the EMAIL and PASSWORD of the account. Modify settings/headless boolean 'true' value for 'false' if you want to see the browser

![](https://i.imgur.com/ZAGSKXK.png)

## Scripts

*  `npm install` installs the required modules.

*  `npm run start` runs the bot without automatic restart in case of crashing but with pretty font colors

*  `npm run monitor:start` runs the app with automatic restart in case of crashing

*  `npm run monitor:stop` stops pm2 monitoring & bot

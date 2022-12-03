const TelegramBot = require('node-telegram-bot-api');
const { conf } = require('./config');

const bot = new TelegramBot(conf.APIToken, { polling: true });

module.exports = { bot }
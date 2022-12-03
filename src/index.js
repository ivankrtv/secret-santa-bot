const { bot } = require('./config/botInit')
const { conf } = require('./config/config');

const keyboard = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Заполнить анкету', callback_data: "777" }],
      [{ text: 'Присоединиться к команде', callback_data: "111" }],
    ]
  })
}

bot.on("polling_error", (msg) => console.log(msg));

bot.setMyCommands([
  { command: '/start', description: 'Начать пользоваться ботом' },
  { command: '/menu', description: 'Показать меню' },
  { command: '/info', description: 'Информация как пользоваться ботом' },
]);

function hello(chatId) {
  bot.sendMessage(chatId, "*** текст приветствия с ссылкой куда тыкнуть, чтобы почитать инфу о боте ***", keyboard)
}

function menu(chatId) {
  bot.sendMessage(chatId, "Меню", keyboard)
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text === '/start') {
    hello(chatId);
  }
  if (msg.text === '/menu') {
    menu(chatId)
  }
})
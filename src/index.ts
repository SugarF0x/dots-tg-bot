import Telegram from 'node-telegram-bot-api'

const bot = new Telegram(process.env.BOT_TOKEN, { polling: true })

bot.on('message', (msg) => {
  const chatId = msg.chat.id

  bot.sendMessage(chatId, 'Received your message')
})

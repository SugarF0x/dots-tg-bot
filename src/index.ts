import Telegram from 'node-telegram-bot-api'

const bot = new Telegram(process.env.BOT_TOKEN, { polling: true })

bot.onText(/\/help/, async (msg) => {
  await bot.sendMessage(msg.chat.id, 'Help triggered')
})

bot.on('message', async (msg) => {
  await bot.sendMessage(msg.chat.id, 'Received your message, but now im updated')
})

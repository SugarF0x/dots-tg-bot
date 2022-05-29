import Telegram from 'node-telegram-bot-api'
import { help } from './commands'

const bot = new Telegram(process.env.BOT_TOKEN, { polling: true })

bot.on('message', async (msg) => {
  if (!msg.text) return
  const [cmd, arg, ...props] = msg.text.split(' ')

  switch (cmd) {
    case "/help": return bot.sendMessage(msg.chat.id, help(arg), { parse_mode: 'Markdown' })
  }

  await bot.sendMessage(msg.chat.id, 'Unknown command, type /help for command list')
})

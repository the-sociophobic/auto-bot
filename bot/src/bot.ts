import { Telegraf } from 'telegraf'

import registerStart from './routes/start'


let bot: null | Telegraf = null


const registerRoutes = () => {
  registerStart()

  bot.launch()
  console.log(`[${process.env.BOT_NAME}] All routes set`)
}

function initBot(token: string, options?: object) {
  bot = new Telegraf(token)
  return bot
}


export { bot, initBot, registerRoutes }

import 'dotenv/config'

import { initBot, registerRoutes } from './bot'


(async function init() {
  initBot(process.env.BOT_API_TOKEN)
  registerRoutes()
})()

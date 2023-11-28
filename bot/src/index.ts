import 'dotenv/config'

import { initBot, registerRoutes } from './bot'
import { initAPI } from './API'


(async function init() {
  initBot(process.env.BOT_TOKEN)
  registerRoutes()
  initAPI()
})()

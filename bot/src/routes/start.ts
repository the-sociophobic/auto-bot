import { bot } from '../bot'
import printUsername from '../utils/printUsername'


const {
  REACT_APP_URL: appURL,
  BOT_NAME
} = process.env

const registerStart = () =>
  bot.start(async (ctx) => {
    try {
      await ctx.setChatMenuButton({
        type: 'web_app',
        text: 'Поиск',
        web_app: {
          url: `${appURL}/#/`
        }
      })

      await ctx.reply(`Привет! С помощью этого бота можно искать запчасти по номеру`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: 'Поиск',
                  web_app: {
                    url: `${appURL}/#/`
                  }
                }
              ]
            ]
          }
        })
    } catch (error) {
      console.log('/start error', error)
    }
  })


export default registerStart

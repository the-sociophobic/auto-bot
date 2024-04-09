import { bot } from '../bot'
import isBotNewChatMember from '../utils/isBotNewChatMember'

const NEW_CHAT_MEMBER_EVENT_NAME = 'new_chat_members'

const registerNewGroup = () => {
  bot.on(NEW_CHAT_MEMBER_EVENT_NAME, async (ctx) => {
    const {
      from,
      update: {
        message: { new_chat_members: newChatMembers }
      },
      chat: { id: groupId }
    } = ctx

    try {
      if (isBotNewChatMember(newChatMembers)) {
        // await ctx.reply(groupId + '')
      }
    } catch (err) {
      console.log(err)
    }
  })

  bot.on('group_chat_created', async (ctx) => {
    // await ctx.reply(ctx.chat.id + '')
  })
}

export default registerNewGroup

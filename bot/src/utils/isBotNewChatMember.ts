import { User } from 'telegraf/typings/core/types/typegram'

const { BOT_NAME } = process.env

function isBotNewChatMember(new_chat_members: User[]) {
  return new_chat_members.filter(
    (newChatMember) =>
      newChatMember.is_bot && newChatMember.username === (BOT_NAME || '').replace('@', '')
  )
}

export default isBotNewChatMember

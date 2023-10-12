import { Chat } from 'telegraf/typings/core/types/typegram'

const isGroupChat = (chat: Chat.PrivateChat | Chat.GroupChat | Chat.SupergroupChat) =>
  chat.type.includes('group')

export default isGroupChat

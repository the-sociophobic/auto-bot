import { User } from 'telegraf/typings/core/types/typegram'


const printUsername = (user: User): string =>
  user.username ?
    `@${user.username}`
    :
    printName(user.first_name, user.last_name)

const printName = (first_name?: string, last_name?: string): string =>
  `${first_name}${last_name ? ` ${last_name}` : ''}`


export default printUsername

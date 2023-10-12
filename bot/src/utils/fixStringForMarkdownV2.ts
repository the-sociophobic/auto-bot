/**
 * This fn adds escape chars before +=_.*`-[]() chars
 * This chars are used by MarkdownV2 layout. If they are present in the string without following MarkdownV2 rules, it causes errors
 * Do not put printUsername() inside it. printUsername() has MarkdownV2 layout, unless MarkdownV2 param is false
 * This fn will ignore []() if they are preceded by escape char
 * [link](url) → \[link\]\(url\)
 * \[link\]\(url\) → [link](url)
 **/

const fixStringForMarkdownV2 = (string: string) =>
  string
    .replace(/\+/g, '\\+')
    .replace(/=/g, '\\=')
    .replace(/_/g, '\\_')
    .replace(/\./g, '\\.')
    // .replace(/\*/g, '\\*')
    // .replace(/`/g, '\\`')
    .replace(/-/g, '\\-')
    .replace(/!/g, '\\!')
    .replace(/\"/g, '\\"')
    .replace(/\>/g, '\\>')
    // .replace(/(?<!\\)\[/g, '\\[')
    // .replace(/(?<!\\)\]/g, '\\]')
    // .replace(/(?<!\\)\(/g, '\\(')
    // .replace(/(?<!\\)\)/g, '\\)')
    // .replace(/\\\[/g, '[')
    // .replace(/\\\]/g, ']')
    // .replace(/\\\(/g, '(')
    // .replace(/\\\)/g, ')')

export default fixStringForMarkdownV2

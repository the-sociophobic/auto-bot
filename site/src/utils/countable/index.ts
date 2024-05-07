const countable = (number: number, words: [string, string, string]) =>  {
  const _number = number % 10
  if ([1].includes(_number))
    return words[0]
  if ([2, 3, 4].includes(_number))
    return words[1]
  return words[2]
}


export default countable

import countable from '.'


const days = (number: number) =>
  countable(number, ['час', 'часа', 'часов'])


export default days

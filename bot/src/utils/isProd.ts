const { NODE_ENV } = process.env

const isProd = () => NODE_ENV !== 'dev'


export default isProd

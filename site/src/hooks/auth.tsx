const getAuthHeader = () => {
  const item = localStorage.getItem('user-cookie')
  return item
}


const setAuthHeader = (header: any) => {
  localStorage.setItem('user-cookie', header)
}


export {
  getAuthHeader,
  setAuthHeader
}

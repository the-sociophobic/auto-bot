const getAuthStringFromWebApp = () => window.Telegram.WebApp.initData
const isWebApp = () => !!getAuthStringFromWebApp()

export type WebAppAuthObject = {
  id?: string
  first_name?: string
  last_name?: string
  username?: string
  hash?: string
  photo_url?: string
  [key: string]: string | undefined
}
const getWebAppAuthObject = (): WebAppAuthObject | false =>
  isWebApp() &&
  JSON.parse(
    Object.fromEntries(new URLSearchParams(decodeURIComponent(getAuthStringFromWebApp())))
      .user
  )


export {
  getAuthStringFromWebApp,
  getWebAppAuthObject,
}

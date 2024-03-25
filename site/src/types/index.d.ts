export {};

declare global {
  interface Window {
    Telegram?: any & {
      WebApp: any & {
        initData: String
      }
    }
  }
}
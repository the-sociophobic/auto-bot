export {};

declare global {
  interface Window {
    Telegram?: any & {
      WebApp: any & {
        initData: String
      }
    }
    ethereum?: any & {
      request: (params: any) => Promise<any>
      isMetaMask: boolean
      on: any
      removeListener: any
    }
    opera?: any
  }
}
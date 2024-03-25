import { Toaster } from 'react-hot-toast'

import QueryWrapper from './components/QueryWrapper'
import ProtectedRoutes from './components/Common/ProtectedRoutes'
import { PopupWrapper } from './components/Common/Popup'
import { FC, useEffect } from 'react'


const App: FC = () => {
  useEffect(() => {
    window.Telegram.WebApp.expand()
    window.Telegram.WebApp.BackButton.onClick(() => {
      window.history.back()

      if (window.history.length < 3)
        window.Telegram.WebApp.BackButton.hide()
    })
  }, [])

  return (
    <QueryWrapper>
      <PopupWrapper>
        <div className='App'>
          <ProtectedRoutes />
        </div>
        <Toaster />
      </PopupWrapper>
    </QueryWrapper>
  )
}


export default App

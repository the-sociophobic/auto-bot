import { Toaster } from 'react-hot-toast'
import QueryWrapper from './components/QueryWrapper'
import ProtectedRoutes from './components/Common/ProtectedRoutes'
import { PopupWrapper } from './components/Common/Popup'


const App = () =>
  <QueryWrapper>
    <PopupWrapper>
      <div className='App'>
        <div className='content'>
          <ProtectedRoutes />
        </div>
      </div>
      <Toaster />
    </PopupWrapper>
  </QueryWrapper>


export default App

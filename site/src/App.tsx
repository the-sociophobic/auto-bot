import { Toaster } from 'react-hot-toast'
import QueryWrapper from './components/QueryWrapper'
import ProtectedRoutes from './components/Common/ProtectedRoutes'
import { PopupWrapper } from './components/Common/Popup'


const App = () =>
  <QueryWrapper>
    <PopupWrapper>
      <div className='App'>
        <ProtectedRoutes />
      </div>
      <Toaster />
    </PopupWrapper>
  </QueryWrapper>


export default App

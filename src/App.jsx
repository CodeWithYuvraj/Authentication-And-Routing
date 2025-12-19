
import { Route, Routes,Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Data from './pages/Data'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {
  return (
   
   <Routes>
  
  <Route path='/' element={<Login />} />

  <Route path='/profile' element={<ProtectedRoute>
    <Profile />
  </ProtectedRoute>} />

  

  <Route path="*" element={<Navigate to="/" />} />

   </Routes>
  )
}

export default App

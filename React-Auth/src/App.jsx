import {Routes, Route} from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import './App.css'

function App() {

  return (
    <div style={{padding : 16}}>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile'
               element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
                } />
      </Routes>
    </div>
    
  )
}

export default App

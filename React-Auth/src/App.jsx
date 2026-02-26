import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'

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

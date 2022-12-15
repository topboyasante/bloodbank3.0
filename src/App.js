import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Donor/Dashboard/Dashboard'
import DonorLogin from './pages/Donor/LoginSignUp/DonorLogin'
import DonorSignUp from './pages/Donor/LoginSignUp/DonorSignUp'
import Dashboard from './pages/Admin/App/Dashboard'
import AdminLogin from './pages/Admin/Authentication/AdminLogin'
import AdminSignUp from './pages/Admin/Authentication/AdminSignUp'
import Homepage from './pages/Homepage/Homepage'
import ProtectedRoutes from './pages/Routing/ProtectedRoutes'

function App() {
  const LoginState = useSelector((state)=>state.auth.isLoggedIn)
  return (
    <main>
      <Routes>
          {/* Root Route */}
          <Route path='/' element={<Homepage/>}/>
      </Routes>
    </main>
  )
}

export default App
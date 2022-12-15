import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
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

          {/* Blood Bank Routes */}
          <Route path='/blood-bank'>
            <Route index element={<AdminLogin/>}/>
            <Route path='signup' element={<AdminSignUp/>}/>

            {/* Blood Bank App Routes */}
            <Route path='app' element={<ProtectedRoutes isLoggedIn={LoginState} isNotLoggedInUrl={`/blood-bank`}></ProtectedRoutes>}>
                <Route path='dashboard' element={<Dashboard/>}/>
            </Route>
          </Route>
      </Routes>
    </main>
  )
}

export default App
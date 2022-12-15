import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Admin/App/Dashboard'
import AdminLogin from './pages/Admin/Authentication/AdminLogin'
import AdminSignUp from './pages/Admin/Authentication/AdminSignUp'
import Homepage from './pages/Homepage/Homepage'
import ProtectedRoutes from './pages/Routing/ProtectedRoutes'

import DonorLogin from './pages/Donor/LoginSignUp/DonorLogin'
import DonorSignUp from './pages/Donor/LoginSignUp/DonorSignUp'
import DashBoard from './pages/Donor/Dashboard/DashBoard'
import DonorProtectedRoutes from './pages/Routing/DonorProtectedRoutes'

function App() {
  const LoginState = useSelector((state)=>state.auth.isLoggedIn)

  // const [userlogin, setUserlogin] = useState(false)
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

          {/* donor routes */}
           {/* Login and signup */}
           <Route path = '/donor' >
           <Route path="donor-login" element={<DonorLogin />} />
            <Route path="donor-signup" element={<DonorSignUp />} />

            {/* dashboard routes */}
            <Route path = 'dashboard' element = {<DonorProtectedRoutes isLoggedIn={LoginState} isNotLoggedInUrl={'/donor/donor-login'}></DonorProtectedRoutes>} />
            <Route index element={<DashBoard/>} />
           </Route>
      </Routes>
    </main>
  )
}

export default App
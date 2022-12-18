import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'

// Blood Bank
import Dashboard from './pages/Admin/App/Dashboard'
import AdminLogin from './pages/Admin/Authentication/AdminLogin'
import AdminSignUp from './pages/Admin/Authentication/AdminSignUp'
import ProtectedRoutes from './pages/Routing/ProtectedRoutes'
import AdminDonor from './pages/Admin/App/AdminDonor'
import DonorProfileLg from './components/Cards/DonorProfileLg'
import AdminAddDonor from './pages/Admin/App/AdminAddDonor'
import AdminSendRequest from './pages/Admin/App/AdminSendRequest'

// Donor
import DonorLogin from './pages/Donor/LoginSignUp/DonorLogin'
import DonorSignUp from './pages/Donor/LoginSignUp/DonorSignUp'
import DonorProtectedRoutes from './pages/Routing/DonorProtectedRoutes'

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
            <Route path='app' element={<ProtectedRoutes isLoggedIn={LoginState}></ProtectedRoutes>}>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='donor'>
                  <Route path='donors' element={<AdminDonor/>}>
                    <Route path=':donorID' element={<DonorProfileLg/>}/>
                  </Route>
                  <Route path='/blood-bank/app/donor/add-donor' element={<AdminAddDonor/>}/>
                  <Route path='/blood-bank/app/donor/send-request' element={<AdminSendRequest/>}/>
                </Route>
            </Route>
          </Route>

          {/* donor routes */}
           {/* Login and signup */}
           <Route path = '/donor' >
           <Route path="donor-login" element={<DonorLogin />} />
            <Route path="donor-signup" element={<DonorSignUp />} />

            {/* dashboard routes */}
            <Route path = 'dashboard/*' element = {<DonorProtectedRoutes isLoggedIn={LoginState}></DonorProtectedRoutes>} />
            {/* <Route  element={<DashBoard/>} /> */}
           </Route>
      </Routes>
    </main>
  )
}

export default App
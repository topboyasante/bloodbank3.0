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
import AdminSettings from './pages/Admin/App/AdminSettings'
import AdminAccount from './pages/Admin/Settings/AdminAccount'

// Donor
import DonorLogin from './pages/Donor/LoginSignUp/DonorLogin'
import DonorSignUp from './pages/Donor/LoginSignUp/DonorSignUp'
import DashBoard from './pages/Donor/Dashboard/Dashboard'
import DonorProtectedRoutes from './pages/Routing/DonorProtectedRoutes'
import AdminDonations from './pages/Admin/App/AdminDonations'
import AdminAddNewDonation from './pages/Admin/App/AdminAddNewDonation'
import AdminSupply from './pages/Admin/App/AdminSupply'
import DoesNotExist from './pages/Routing/DoesNotExist'
import ForgotPassword from './pages/Admin/Authentication/ForgotPassword'


function App() {
  const LoginState = useSelector((state)=>state.auth.user.isLoggedIn)
  const JWT_TOKEN = localStorage.getItem('loginToken')

  return (
      <main>
      <Routes>
          {/* Root Route */}
          <Route path='/' element={<Homepage/>}/>
          {/* DNE Route */}
          <Route path='*' element={<DoesNotExist/>}/>

          {/* Blood Bank Routes */}
          <Route path='/blood-bank'>
            <Route index element={<AdminLogin/>}/>
            <Route path='signup' element={<AdminSignUp/>}/>
            <Route path='forgot-password' element={<ForgotPassword/>}/>

            {/* Blood Bank App Routes */}
            <Route path='app' element={<ProtectedRoutes isLoggedIn={JWT_TOKEN}></ProtectedRoutes>}>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='donor'>
                  <Route path='donors' element={<AdminDonor/>}>
                    <Route path=':donorID' element={<DonorProfileLg/>}/>
                  </Route>
                  <Route path='/blood-bank/app/donor/add-donor' element={<AdminAddDonor/>}/>
                  <Route path='/blood-bank/app/donor/send-request' element={<AdminSendRequest/>}/>
                </Route>
                <Route path='donations'>
                  <Route index element={<AdminDonations/>}/>
                  <Route path='add-new-donation' element={<AdminAddNewDonation/>}/>
                </Route>
                <Route path='supply'>
                  <Route index element={<AdminSupply/>}/>
                  <Route path='request-supply' element={<AdminSendRequest/>}/>
                </Route>
                <Route path='settings'>
                  <Route index element={<AdminSettings/>}/>
                  <Route path='account' element={<AdminAccount/>}/>
                </Route>
            </Route>
          </Route>

          {/* donor routes */}
           {/* Login and signup */}
           <Route path = '/donor' >
           <Route path="donor-login" element={<DonorLogin />} />
            <Route path="donor-signup" element={<DonorSignUp />} />

            {/* dashboard routes */}
            <Route path = 'dashboard/*'element={<DashBoard/>}  />
            {/* <Route index element={<DashBoard/>} /> */}
           </Route>
      </Routes>
      </main>
  )
}

// element = {<DonorProtectedRoutes isLoggedIn={LoginState}></DonorProtectedRoutes>}

export default App
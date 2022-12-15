import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Donor/Dashboard/Dashboard'
import DonorLogin from './pages/Donor/LoginSignUp/DonorLogin'
import DonorSignUp from './pages/Donor/LoginSignUp/DonorSignUp'
import Homepage from './pages/Homepage/Homepage'

function App() {
  return (
    <main>
      <Routes>
          {/* Root Route */}
          <Route path='/' element={<Homepage/>}/>


          {/* Donor Routes */}

          <Route path = "/donor">
            {/* Login and signup routes */}
            <Route path="donor-login" element = {<DonorLogin/>} />
            <Route path = "donor-signup" element = {<DonorSignUp/>} />

            {/* Dashboard Routes */}
            <Route path='dashboard' element = {<Dashboard/>} />
          </Route>
      </Routes>
    </main>
  )
}

export default App
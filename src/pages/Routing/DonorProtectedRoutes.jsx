import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
// import AdminNavbar from '../../components/Navigation/AdminNavbar'
// import TopNavbar from '../../components/Navigation/TopNavbar'

function DonorProtectedRoutes({isLoggedIn,notLoggedInUrl}) {
  return (
    isLoggedIn? <main className='flex'>
        {/* <AdminNavbar/> */}
        <section className='w-full'>
            <h1>dashboard</h1>
            {/* <TopNavbar/> */}
            {/* <Outlet/> */}
        </section>
    </main> : <Navigate to={notLoggedInUrl}/>
  )
}

export default DonorProtectedRoutes
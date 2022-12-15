import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AdminNavbar from '../../components/Navigation/AdminNavbar'
import TopNavbar from '../../components/Navigation/TopNavbar'

function ProtectedRoutes({isLoggedIn,notLoggedInUrl}) {
  return (
    isLoggedIn? <main className='flex'>
        <AdminNavbar/>
        <section className='w-full'>
            <TopNavbar/>
            <Outlet/>
        </section>
    </main> : <Navigate to={notLoggedInUrl}/>
  )
}

export default ProtectedRoutes
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AdminNavbar from '../../components/Navigation/AdminNavbar'
import TopNavbar from '../../components/Navigation/TopNavbar'

function ProtectedRoutes({isLoggedIn}) {
//  JWT Check
  return (
    isLoggedIn ? 
    <main className='flex'>
        <AdminNavbar/>
        <section className='w-full'>
            <TopNavbar/>
            <Outlet/>
        </section>
    </main> : <Navigate to='/blood-bank'/>
  )
}

export default ProtectedRoutes
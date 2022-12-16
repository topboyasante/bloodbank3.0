import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

function AdminFAQs() {
  const navigate = useNavigate();

  return (
    <div className='lg:w-[80vw] mx-5 h-[90vh] mt-[5em] lg:mt-0'>
      <NavLink className='border p-2 shadow-md rounded-md' onClick={() => navigate(-1)}>Back</NavLink>

    </div>
  )
}

export default AdminFAQs
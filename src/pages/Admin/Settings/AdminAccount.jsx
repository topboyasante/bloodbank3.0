import React from 'react'
import { useSelector } from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom'

function AdminAccount() {
  const navigate = useNavigate();
  const hospitalName = useSelector((state)=>state.auth.user.hospitalName)
  return (
    <div className='lg:w-[80vw] mx-5 lg:h-[90vh] mt-[5em] lg:mt-0'>
        <NavLink className='border p-2 shadow-md rounded-md' onClick={() => navigate(-1)}>Back</NavLink>
        <section className='flex flex-col lg:flex-row items-center justify-between'>
          {/* left */}
          <div className='my-5 w-[90vw] lg:w-[45%] h-[80vh] rounded-md bg-white p-5'>
            <div className='flex items-center justify-between py-2'>
              <div>
              <h1 className='text-xl mb-2'>{hospitalName}</h1>
              </div>
              <button className='text-[#960000] px-2 py-1 rounded-lg shadow-md'>Edit</button>
            </div>
            <hr />
          </div>
          {/* right */}
          <div className='my-5 w-[90vw] lg:w-[45%] h-[80vh] rounded-md bg-white p-5'>
            
          </div>
        </section>
    </div>
  )
}

export default AdminAccount
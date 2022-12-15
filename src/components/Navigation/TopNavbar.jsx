import React from 'react'
import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function TopNavbar() {
  return (
    <Link to='/bank/app/settings/account' className='flex justify-start lg:justify-end gap-3 w-[100vw] lg:w-full mb-7 px-5 py-8 text-[#ffffff] lg:text-black items-center h-[5vh] bg-white shadow'>
          <div className='flex flex-col items-end'>
            <p className='text-sm font-[600px]'>Axon Health Center</p>
            <p className='text-sm text-gray-500'>Accra</p>
          </div>
          <div>
              <FaUser size={40} className='bg-gray-200 rounded-full p-2'/>
          </div>
    </Link>
  )
}

export default TopNavbar
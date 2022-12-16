import React from 'react'
import {MdSupervisorAccount,MdOutlineSecurity,MdNotifications} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
import {BsInfoCircle,BsQuestionSquare} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function AdminSettings() {
  return (
    <div className='lg:w-[80vw] mx-5 h-[85vh] mt-[2.5em] lg:mt-0'>
        <section className=' lg:w-[100%] h-full'>
          <p className='text-lg lg:mt-3'>Settings:</p>
          <br />
          {/* Settings Items: */}
          <div className='p-5 grid grid-cols-2 gap-5 h-[80%] lg:h-[90%]'>
              <Link to='account' className='my-10 flex items-center shadow-md gap-3 p-5 bg-white'>
                <MdSupervisorAccount size={20}/>
                <h1 className='text-md'>Account</h1>
              </Link>
              <Link to='support' className='my-10 flex items-center shadow-md gap-3 p-5 bg-white'>
                <BiSupport size={20}/>
                <h1 className='text-md'>Support</h1>
              </Link>
              <Link to='security' className='my-10 flex items-center shadow-md gap-3 p-5 bg-white'>
                <MdOutlineSecurity size={20}/>
                <h1 className='text-md'>Security</h1>
              </Link>
              <Link to='about' className='my-10 flex items-center shadow-md gap-3 p-5 bg-white'>
                <BsInfoCircle size={20}/>
                <h1 className='text-md'>About</h1>
              </Link>
              <Link to='faqs' className='my-10 flex items-center shadow-md gap-3 p-5 bg-white'>
                <BsQuestionSquare size={20}/>
                <h1 className='text-md'>FAQs</h1>
              </Link>
              <Link to='notifications' className='my-10 flex items-center shadow-md gap-3 p-5 bg-white'>
                <MdNotifications size={20}/>
                <h1 className='text-md'>Notifications</h1>
              </Link>
          </div>
        </section>
        {/* Right */}
    </div>
  )
}

export default AdminSettings
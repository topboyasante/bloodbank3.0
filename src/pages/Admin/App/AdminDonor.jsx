import React, { useState } from 'react'
import {IoMdAdd,IoIosSend} from 'react-icons/io'
import { useSelector,useDispatch  } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import DonorProfile from '../../../components/Cards/DonorProfile'

function AdminDonor() {
  const donorList = useSelector((state)=>state.donor.donors)
  const [donorSearchKeyword,setDonorSearchKeyword] = useState('')
  
  return (
    <div className='w-[84vw] mx-auto lg:mx-5 lg:h-[85vh] flex flex-col gap-[2em] lg:flex-row justify-between mt-[5em] lg:mt-0 p-2'>

      {/* Left */}
      <section className='mt-5 lg:mt-0 lg:w-[45%]'>

      <form className="max-w-sm px-4">
          <div className="relative">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
              </svg>
              <input
                  type="text"
                  placeholder="Search"
                  value={donorSearchKeyword}
                  onChange={(e)=>{setDonorSearchKeyword(e.target.value)}}
                  className="w-full py-1 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-gray-600"
              />
          </div>
      </form>

        {/* Scroll Section */}
        <section className='mt-3'>
          <h1>Recent Donors:</h1>
          <div className='border h-[75vh] overflow-y-scroll bg-white px-2 py-5 flex flex-col gap-5 shadow-md rounded-md'>
            {/* Donor List Shows Here. */}
            {
              donorSearchKeyword !== '' ? donorList.filter((item)=>item.fullName.toLowerCase().includes(donorSearchKeyword.toLowerCase())).map((item)=>{
                return(
                  <DonorProfile
                  key={item.id}
                  item={item}/>
                )
              }):
              donorList.map((item)=>{
                return(
                  <DonorProfile
                  key={item.id}
                  item={item}/>
                )
              })
            }
          </div>
        </section>
      </section>

      {/* Right */}
      <section className='lg:w-[50%]'>
        {/* Buttons */}
        <div className='flex justify-between'>
          <Link to='/blood-bank/app/donor/send-request' className='border rounded-lg p-1 shadow-sm border-gray-300 flex items-center gap-2 hover:border-gray-500 ease duration-150'>
            <p>Send Request</p>
            <IoIosSend/>
          </Link >
          <Link to='/blood-bank/app/donor/add-donor' className='border rounded-lg p-1 shadow-sm border-gray-300 flex items-center gap-2 hover:border-gray-500 ease duration-150'>
            <p>Add Donor</p>
            <IoMdAdd/>
          </Link>
        </div>
        <section className='mt-3'>
          <h1>Profile:</h1>
          <div className='border bg-white h-[75vh] shadow-md rounded-md'>
           <Outlet/>
        </div>
        </section>
      </section>
    </div>
  )
}

export default AdminDonor
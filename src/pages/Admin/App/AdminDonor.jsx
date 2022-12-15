import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {IoMdAdd,IoIosSend} from 'react-icons/io'
import { useSelector,useDispatch  } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import SearchBar from '../../../components/Navigation/SearchBar'
import DonorProfile from '../../../components/Cards/DonorProfile'

function AdminDonor() {
  const dispatch = useDispatch()

  const fetchDonorAPI = async ()=>{
    const response = await axios.get(`https://localhost:7253/Donors`);
    const data = response.data
    console.log(data)
    // dispatch(donorActions.setDonors(data))
  }
  
  useEffect(() => {
    fetchDonorAPI()
  }, [])
  return (
    <div className='w-[84vw] mx-auto lg:mx-5 lg:h-[85vh] flex flex-col gap-[2em] lg:flex-row justify-between mt-[5em] lg:mt-0 p-2'>

      {/* Left */}
      <section className='mt-5 lg:mt-0 lg:w-[45%]'>
        <SearchBar/>
        {/* Scroll Section */}
        <section className='mt-3'>
          <h1>Recent Donors:</h1>
          <div className='border h-[75vh] overflow-y-scroll bg-white px-2 py-5 flex flex-col gap-5 shadow-md rounded-md'>
            {/* Donor List Shows Here. */}
          </div>
        </section>
      </section>

      {/* Right */}
      <section className='lg:w-[50%]'>
        {/* Buttons */}
        <div className='flex justify-between'>
          <Link to='/bank/app/admin/request-supply' className='border rounded-lg p-1 shadow-sm border-gray-300 flex items-center gap-2 hover:border-gray-500 ease duration-150'>
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
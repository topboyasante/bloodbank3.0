import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { donorActions } from '../../../redux/donorSlice';
import {IoMdAdd,IoIosSend} from 'react-icons/io'
import { useSelector,useDispatch  } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import DonorProfile from '../../../components/Cards/DonorProfile'
import SearchBar from '../../../components/Navigation/SearchBar'

function AdminDonor() {
  const donorList = useSelector((state)=>state.donor.donors)
  const dispatch = useDispatch()
  const headers = { authorization: `Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`}
  const fetchDonorAPI = async ()=>{
    const response = await axios.get(`https://localhost:7253/Donors`, { headers });
    const data = response.data
    dispatch(donorActions.setDonors(data))
  }

  useEffect(() => {
    fetchDonorAPI()
  }, [])

  const [searchKeyword,setSearchKeyword] = useState('')
  function handleSearch (e){
    setSearchKeyword(e.target.value)
  }
  return (
    <div className='w-[84vw] mx-auto lg:mx-5 lg:h-[85vh] flex flex-col gap-[2em] lg:flex-row justify-between mt-[5em] lg:mt-0 p-2'>

      {/* Left */}
      <section className='mt-5 lg:mt-0 lg:w-[45%]'>
        <SearchBar searchText={searchKeyword} handleSearchText={handleSearch}/>
        {/* Scroll Section */}
        <section className='mt-3'>
          <h1>Recent Donors:</h1>
          <div className='border h-[75vh] overflow-y-scroll bg-white px-2 py-5 flex flex-col gap-5 shadow-md rounded-md'>
            {/* Donor List Shows Here. */}
            {
              searchKeyword !== '' ? donorList.filter((item)=>item.fullName.toLowerCase().includes(searchKeyword.toLowerCase())).map((item)=>{
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
import React,{useState} from 'react'
import {IoMdAdd} from 'react-icons/io'
import {FiEdit,FiDelete} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { donationActions } from '../../../redux/donationsSlice'
import SearchBar from '../../../components/Navigation/SearchBar'
import axios from 'axios'

function AdminDonations() {
  const dispatch = useDispatch()
  const donationsList = useSelector((state)=>state.donations.donations)
  const [searchKeyword,setSearchKeyword] = useState('')
  function handleSearch (e){
    setSearchKeyword(e.target.value)
  }
  return (
    <div className='lg:w-[80vw] mx-5 h-[85vh] mt-[5em] lg:mt-0'>
     
      {/* Buttons */}
      <div className='flex justify-between items-center flex-col lg:flex-row lg:gap-0 gap-5 mt-5 lg:mt-0'>
        <SearchBar searchText={searchKeyword} handleSearchText={handleSearch}/>
        <div className='flex items-center gap-5 flex-col lg:flex-row'>
         <div className='flex gap-5 items-center'>
          <div className='flex items-center gap-2'>
              <p>Sort By:</p>
              <select className='border rounded-lg p-1 shadow-sm border-gray-300 flex items-center gap-2 hover:border-gray-500 ease duration-150'>
                      <optgroup>
                          <option value="latest">Latest</option>
                      </optgroup>
                  </select>
            </div>
            <div className='flex items-center gap-2'>
              <p>Filter By:</p>
              <select className='border rounded-lg p-1 shadow-sm border-gray-300 flex items-center gap-2 hover:border-gray-500 ease duration-150'>
                      <optgroup>
                          <option value="donor">Donor</option>
                      </optgroup>
                  </select>
          </div>
         </div>
        <div className='flex gap-5 items-center'>
          <Link to='add-new-donation' className='border rounded-lg p-1 shadow-sm bg-white border-gray-300 flex items-center gap-2 hover:border-gray-500 ease duration-150'>
              <p>Add Donation</p>
              <IoMdAdd/>
            </Link>
        </div>
        </div>
      </div>
      {/* Table */}
      <table className='w-[90vw] lg:w-full mt-5 table table-zebra'>
        <thead>
          <tr>
            <th className=' bg-[#e4e4e4] text-black border-r border-r-white py-2 font-light text-center'>#</th>
            <th className=' bg-[#e4e4e4] text-black border-r border-r-white py-2 font-light text-center'>Date</th>
            <th className=' bg-[#e4e4e4] text-black border-r border-r-white py-2 font-light text-center'>Donor</th>
            <th className=' bg-[#e4e4e4] text-black border-r border-r-white py-2 font-light text-center'>Blood Group</th>
            <th className=' bg-[#e4e4e4] text-black border-r border-r-white py-2 font-light text-center'>Quantity (Pints)</th>
            <th className=' bg-[#e4e4e4] text-black border-r border-r-white py-2 font-light text-center'>Recipients</th>
            <th className=' bg-[#e4e4e4] text-black border-r py-2 font-light text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
             searchKeyword!=='' ?  
             donationsList.filter((item)=>item.donorName.toLowerCase().includes(searchKeyword.toLowerCase())).map((donation)=>{
              function deleteDonation(){
                dispatch(donationActions.removeDonation(donation.id))
                axios.delete(`https://localhost:7253/Donations/${donation.id}`)
              }
              return(
                <tr key={donation.id}>
                  <td className='text-center p-2'>{donation.id}</td>
                  <td className='text-center p-2'>{donation.date}</td>
                  <td className='text-center p-2 capitalize'>{donation.donor}</td>
                  <td className='text-center p-2 uppercase'>{donation.bGroup}</td>
                  <td className='text-center p-2'>{donation.qty}</td>
                  <td className='text-center p-2 capitalize'>{donation.recipient}</td>
                  <td className='flex justify-center items-center gap-5 p-2'>
                    <button>
                      <FiEdit size={25}/>
                    </button>
                    <button>
                      <FiDelete size={25} onClick={deleteDonation}/>
                    </button>
                  </td>
                </tr>
              )
            }): donationsList.map((donation)=>{
              function deleteDonation(){
                dispatch(donationActions.removeDonation(donation.id))
              }
              return(
                <tr key={donation.id}>
                  <td className='text-center p-2'>{donation.id}</td>
                  <td className='text-center p-2'>{donation.date}</td>
                  <td className='text-center p-2 capitalize'>{donation.donor}</td>
                  <td className='text-center p-2 uppercase'>{donation.bGroup}</td>
                  <td className='text-center p-2'>{donation.qty}</td>
                  <td className='text-center p-2 capitalize'>{donation.recipient}</td>
                  <td className='flex justify-center items-center gap-5 p-2'>
                    <button>
                      <FiEdit size={25}/>
                    </button>
                    <button>
                      <FiDelete size={25} onClick={deleteDonation}/>
                    </button>
                  </td>
                </tr>
              )
            })
            }
        </tbody>
      </table>
    </div>
  )
}

export default AdminDonations
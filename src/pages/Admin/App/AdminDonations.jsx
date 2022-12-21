import React,{useEffect, useState} from 'react'
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
  const headers = { authorization: `Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`}
  const [searchKeyword,setSearchKeyword] = useState('')
  function handleSearch (e){
    setSearchKeyword(e.target.value)
  }
  const fetchDonationsAPI = async ()=>{
    await axios.get(`https://localhost:7253/Donations`,{headers})
    .then((res)=>{
      dispatch(donationActions.setDonations(res.data))
    });
  }
  useEffect(()=>{
    fetchDonationsAPI()
  },[])
  let bloodTypeAsText = ''
  
  return (
    <div className='w-screen lg:w-[80vw] mx-5 h-[85vh] mt-[5em] lg:mt-0'>
     
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
      <table className='w-[70vw] lg:w-full mt-5 table table-zebra'>
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
                axios.delete(`https://localhost:7253/Donations/${donation.id}`,{headers})
              }
              switch(donation.bloodGroup){
                case "OPositive":
                  bloodTypeAsText = "O+"
                 break;
                case "APositive":
                  bloodTypeAsText = "A+"
                 break;
                case "BPositive":
                  bloodTypeAsText = "B+"
                 break;
                case "ABPositive":
                  bloodTypeAsText = "AB+"
                 break;
                case "ABNegative":
                  bloodTypeAsText = "AB-"
                 break;
                case "ANegative":
                  bloodTypeAsText = "A-"
                 break;
                case "BNegative":
                  bloodTypeAsText = "B-"
                 break;
                case "ONegative":
                  bloodTypeAsText = "O-"
                 break;
                 
               }
              return(
                <tr key={donation.id}>
                  <td className='text-center p-2'>{donation.id}</td>
                  <td className='text-center p-2'>{donation.dateofDonation}</td>
                  <td className='text-center p-2 capitalize'>{donation.donorName}</td>
                  <td className='text-center p-2 uppercase'>{bloodTypeAsText}</td>
                  <td className='text-center p-2'>{donation.quantity}</td>
                  <td className='text-center p-2 capitalize'>{donation.recipientName}</td>
                  <td className='flex justify-center items-center gap-5 p-2'>
                    <button>
                      <FiDelete size={25} onClick={deleteDonation}/>
                    </button>
                  </td>
                </tr>
              )
            }): donationsList.map((donation)=>{
              function deleteDonation(){
                dispatch(donationActions.removeDonation(donation.id))
                axios.delete(`https://localhost:7253/Donations/${donation.id}`,{headers})
              }
              switch(donation.bloodGroup){
                case "OPositive":
                  bloodTypeAsText = "O+"
                 break;
                case "APositive":
                  bloodTypeAsText = "A+"
                 break;
                case "BPositive":
                  bloodTypeAsText = "B+"
                 break;
                case "ABPositive":
                  bloodTypeAsText = "AB+"
                 break;
                case "ABNegative":
                  bloodTypeAsText = "AB-"
                 break;
                case "ANegative":
                  bloodTypeAsText = "A-"
                 break;
                case "BNegative":
                  bloodTypeAsText = "B-"
                 break;
                case "ONegative":
                  bloodTypeAsText = "O-"
                 break;
                 
               }
              return(
                <tr key={donation.id}>
                  <td className='text-center p-2'>{donation.id}</td>
                  <td className='text-center p-2'>{donation.dateofDonation}</td>
                  <td className='text-center p-2 capitalize'>{donation.donorName}</td>
                  <td className='text-center p-2 uppercase'>{bloodTypeAsText}</td>
                  <td className='text-center p-2'>{donation.quantity}</td>
                  <td className='text-center p-2 capitalize'>{donation.recipientName}</td>
                  <td className='flex justify-center items-center gap-5 p-2'>
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
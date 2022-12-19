import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch  } from 'react-redux'
import React, { useState,useContext, useEffect, Fragment } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { donorActions } from '../../../redux/donorSlice'
// import { AppContext } from '../../context/AppContext'
import axios from 'axios';
import Swal from 'sweetalert2'

function AdminAddDonor() {
  // const {isOpen, setIsOpen} = useContext(AppContext)
  const dispatch = useDispatch()
  const donorList = useSelector((state)=>state.donor.donors)
  const navigate = useNavigate();
  // function closeModal() {
  //   setIsOpen(false)
  // }

  // function openModal() {
  //   setIsOpen(true)
  // }

//   States
  const[fullName,setFullName]= useState('')
  const[email,setEmail]= useState('')
  const[phoneNumber,setPhoneNumber]= useState('')
  const[dob,setDOB]= useState('')
  const[gender,setGender] = useState()
  const[bGroup,setBGroup] = useState('')
  const[age,setAge] = useState('')
  const[location,setLocation] = useState('')
  const[image,setImage] = useState()
  const[lastDonation,setLastDonation] = useState()

  function handleFullName(event){
    setFullName(event.target.value)
  }
  function handlelastDonation(event){
    setLastDonation(event.target.value)
  }
  function handleEmail(event){
    setEmail(event.target.value)
  }
  function handlePhoneNumber(event){
    setPhoneNumber(event.target.value)
  }
  function handleDOB(event){
    setDOB(event.target.value)
  }
  function handleGender(event){
    setGender(event.target.value)
  }
  function handleBGroup(event){
    setBGroup(event.target.value)
  }
  function handleAge(event){
    setAge(event.target.value)
  }
  function handleLocation(event){
    setLocation(event.target.value)
  }
  function handleImage(event){
    setImage(event.target.value)
  }
  function resetForm(){
    setBGroup('')
    setAge('')
    setFullName('')
    setEmail('')
    setGender('')
    setDOB('')
    setLastDonation('')
    setImage('')
    setLocation('')
    setGender('')
    setPhoneNumber('')
  }

  const handleSubmit =  async (event) => {
    event.preventDefault()
    const newDonorInfo={
      id:donorList.length+1 ,
      // img:image,
      fullName:fullName,
      dateofBirth:dob,
      email:email,
      age:age,
      gender:gender,
      location:location,
      bloodType:bGroup,
      // lastDonation:lastDonation
    }
    if(fullName !=='' && email !=='' && dob !=='' && gender !=='' && age!=='' 
    && location !=='' &&bGroup !==''  ){
      dispatch(donorActions.addDonor(newDonorInfo))
      await axios.post('https://localhost:7253/Donors',{
        id:donorList.length+1 ,
        fullName:fullName,
        dateofBirth:dob,
        email:email,
        age:age,
        gender:gender,
        location:location,
        bloodType:bGroup,
      }).then((res)=>{
        Swal.fire({
          title: 'Success!',
          text: 'The New Donor Was Added.',
          icon: 'success',
          timer: 1500,
          showConfirmButton:false
        })
        navigate('/blood-bank/app/donor/donors')
      }).catch((err)=>{
        Swal.fire({
          title: 'Error!',
          text: 'The Was A Problem.',
          icon: 'error',
          confirmButtonText: 'Back',
          confirmButtonColor:'#960000'
        })
      })
      resetForm()
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'The Form is Incomplete or has Wrong Data.',
        icon: 'error',
        confirmButtonText: 'Back',
        confirmButtonColor:'#960000'
      })
    }
  }
  
  return (
    <main className=''>
    <section className='p-[2em] mt-[2em] lg:mt-0'>
    <NavLink className='border p-2 shadow-md rounded-md' onClick={() => navigate(-1)}>Back</NavLink>
    <form className='lg:w-[80vw] h-full p-[2em] mx-auto'>
        <h1 className='text-2xl'>Add Donor</h1>
        <p className='my-2 text-gray-400'>Please Input the Required data Below</p>
        <br />
        {/* Full Name & Email */}
        <section className='flex justify-between items-center'>
          <div className='my-3 w-[55%]'>
              <label htmlFor="qty">Full Name</label>
              <br />
              <input type="text" className='border w-[100%] p-2 rounded-md' value={fullName} onChange={handleFullName} />
          </div>
          <div className='my-3 w-[40%]'>
              <label htmlFor='blood-type'>Email Address</label>
              <br />
              <input type="email" className='border w-[100%] p-2 rounded-md' value={email} onChange={handleEmail}/>
          </div>
        </section>
        
        {/* DOB and Age */}
        <section className='flex justify-between items-center'>
          <div className='my-3 w-[65%]'>
              <label htmlFor="qty">Date of Birth</label>
              <br />
              <input type="date" className='border w-[100%] p-2 rounded-md' value={dob} onChange={handleDOB}/>
          </div>
          <div className='my-3 w-[30%]'>
              <label htmlFor="qty">Age</label>
              <br />
              <input type="number" className='border w-[100%] p-2 rounded-md' value={age} onChange={handleAge}/>
          </div>
        </section>
        {/* Sex and Location */}
        <section className='flex justify-between items-center'>
          <div className='my-3 w-[20%]'>
                  <label htmlFor='blood-type'>Sex</label>
                  <br />
                  <select name="blood-type" id="blood-type" className='border rounded-md w-[100%] p-2' value={gender} onChange={handleGender}>
                      <optgroup >
                          <option value=""></option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </optgroup>
                  </select>
          </div>
          <div className='my-3 w-[75%]'>
            <label htmlFor="qty">Location</label>
            <br />
            <input type="text" className='border w-[100%] p-2 rounded-md' value={location} onChange={handleLocation} />
          </div>
        </section>
        <section className="flex justify-between items-center">
        <div className='my-3 w-[45%]'>
            <label htmlFor="qty">Phone Number</label>
            <br />
            <input type="text" className='border w-[100%] p-2 rounded-md' value={phoneNumber} onChange={handlePhoneNumber}/>
        </div>
        <div className='my-3 w-[45%]'>
                <label htmlFor='blood-type'>Blood Group</label>
                <br />
                <select name="blood-type" id="blood-type" className='border rounded-md w-[100%] p-2' value={bGroup} onChange={handleBGroup}>
                <optgroup>
                        <option value=""></option>
                        <option value="OPositive">O+</option>
                        <option value="ONegative">O-</option>
                        <option value="ANegative">A-</option>
                        <option value="APositive">A+</option>
                        <option value="BNegative">B-</option>
                        <option value="BPositive">B+</option>
                        <option value="ABNegative">AB-</option>
                        <option value="ABPositive">AB+</option>
                    </optgroup>
                </select>
        </div>
        </section>
        {/* Image */}
        {/* <section className='flex justify-between items-center'>
          <div className='my-3 w-[45%]'>
              <label htmlFor="qty">Last Donation</label>
              <br />
              <input type="date" className='border w-[100%] p-2 rounded-md' value={lastDonation} onChange={handlelastDonation}/>
          </div>
          <div className='my-3 w-[45%]'>
            <label htmlFor='blood-type'>Profile Image</label>
            <br />
            <input type="file" className='border w-[100%] p-2 rounded-md' value={image} onChange={handleImage}/>
          </div>
        </section> */}
        <Link exact='true' to='/bank/app/admin/donor'  onClick={handleSubmit}>
        <button className='bg-[#960000] text-white w-[100%] p-2 rounded-lg my-2'>Add Donor</button>
        </Link>
    </form>
{/* 
        
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    New Donor Added
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="text-sm text-gray-500">
                      <p>Success!</p>
                      <p>
                      The New Donor was Added.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Link to='/bank/app/admin/donor'>
                   <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#960000] px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     Continue
                    </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
    </section>
    </main>
  )
}

export default AdminAddDonor
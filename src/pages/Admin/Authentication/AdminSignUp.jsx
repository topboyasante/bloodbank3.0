import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MainImage from '../../../Images/loginImg.png';
import Bladie from '../../../Images/BBLogo.png';
import axios from 'axios';
import Swal from 'sweetalert2'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'

const AdminSignUp = () => {
  // Input State:
  const [hospitalName,setHospitalName] = useState('')
  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [location,setLocation] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [canSeePassword,setCanSeePassword] = useState(false)
  const navigate = useNavigate()
  const handleSubmit =async (event)=>{
    event.preventDefault()
    await axios.post('https://localhost:7253/Accounts/register', {
      hospitalName:hospitalName,
      userName:userName,
      email:email,
      phoneNumber:phoneNumber,
      location:location,
      password:password,
      confirmPassword:confirmPassword
      })
    .then((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User Successfully Created',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/blood-bank")
    })
    .catch((err) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  function handleCanSeePassword(){
    setCanSeePassword(!canSeePassword)
  }
  return (
    <main className='flex items-center w-[100vw] h-[100vh] justify-between'>
      {/* Image */}
      <img src= {MainImage} alt="" className="hidden lg:flex w-[45%] h-full"/>
      {/* Form */}
      <section className='w-[45%] mx-auto flex flex-col items-center '>
        
        <img src={Bladie} alt="/" className='mt-[2em] lg:mt-0 mx-auto lg:w-[200px]'/>
        <p className='text-center text-gray-400 mb-5'>Create an Account.</p>

        {/* Input Areas */}
        <form className='grid lg:grid-cols-2 place-items-center gap-5' >

          <div className='mb-3'>
              <label className='font-normal text-sm'>Hospital Name</label>
              <br />
              <input type="text" className='outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-black' 
                      name="hospitalName" 
                      value={hospitalName} 
                      onChange={(e)=>{setHospitalName(e.target.value)}}
              required/>
          </div>

          <div className='mb-3'>
              <label className='font-normal text-sm'>Username</label>
              <br />
              <input type="text" className='outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-black' 
              name="userName" 
              value={userName} 
              onChange={(e)=>{setUserName(e.target.value)}}
              required/>
          </div>

          <div className='mb-3'>
              <label className='font-normal text-sm'>Email Address</label>
              <br />
              <input type="email" className='outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-black' 
              name="email" 
              value={email} 
              onChange={(e)=>{setEmail(e.target.value)}}
              required/>
          </div>

          <div className='mb-3'>
              <label className='font-normal text-sm'>Phone Number</label>
              <br />
              <input type="text" className='outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-black' 
               name="phoneNumber" 
               value={phoneNumber} 
               onChange={(e)=>{setPhoneNumber(e.target.value)}}
               required/>
          </div>

         

          <div className='mb-3'>
              <label className='font-normal text-sm'>Password</label>
              <br />
              <section className='password flex items-center border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-blac'>
              <input 
              value={password} onChange={(event) => setPassword(event.target.value)}
              type={canSeePassword ? "text" : "password"} className='w-[95%] outline-none' required/>
                {canSeePassword? <AiOutlineEyeInvisible onClick={handleCanSeePassword} className='cursor-pointer ease duration-200' size={20}/> 
                : <AiOutlineEye onClick={handleCanSeePassword} className='cursor-pointer ease duration-200' size={20}/>}
              </section>
          </div>

          <div className='mb-3'>
              <label className='font-normal text-sm'>Confirm Password</label>
              <br />
              <section className='password flex items-center border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-blac'>
              <input 
              value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
              type={canSeePassword ? "text" : "password"} className='w-[95%] outline-none' required/>
                {canSeePassword? <AiOutlineEyeInvisible onClick={handleCanSeePassword} className='cursor-pointer ease duration-200' size={20}/> 
                : <AiOutlineEye onClick={handleCanSeePassword} className='cursor-pointer ease duration-200' size={20}/>}
              </section>
          </div>
             
          <div className='mb-3'>
              <label className='font-normal text-sm'>Location</label>
              <br />
              <input type="text" className='outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-black' 
              name="location" 
              value={location} 
              onChange={(e)=>{setLocation(e.target.value)}}
              required/>
          </div>

          <div className='mb-3 hidden lg:grid'>
              <label className='font-normal text-sm hidden'>Location</label>
              <br />
              <div className='shadow rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-black'/>
          </div>
        </form>
        
        <button className="bg-[#11BD17] w-[300px] lg:w-[164px] h-[39px] rounded-md mt-5" onClick={handleSubmit}>
                <span className='text-base text-white'>Sign Up</span>
        </button>

        {/* Login Link */}
        <div className="mt-5">
              <h3 className='w-[90vw] lg:w-full text-center'>Already have an Account? <Link to = {'/blood-bank'} className="text-[#D93D65] cursor-pointer">Login</Link></h3>
        </div>
      </section>
    </main>
  )
}

export default AdminSignUp
import { Link } from 'react-router-dom';
import MainImage from '../../../Images/loginImg.png';
import Bladie from '../../../Images/BBLogo.png';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

function DonorLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // navigate('/donor/dashboard/appointments')
    navigate('/donor/dashboard')
  }

  return (
    <main className='flex items-center w-[100vw] h-[100vh] justify-between'>
    <img src= {MainImage} alt="" className="hidden lg:flex w-[45%] h-full"/>

    {/* Form */}
    <section className='w-[45%] mx-auto'>
      <img src={Bladie} alt="/" className='mx-auto w-[200px]'/>
      <form onSubmit={handleSubmit} className='flex flex-col items-center' >

        {/* User Inputs */}
        <div className='mb-3'>
          <label className='font-normal text-sm'>Email Address</label>
          <br />
          <input 
          value = {email}
          onChange={e => setEmail(e.target.value)}
          type="email" className='outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2' required
          />
        </div>

        <div className='mb-3'>
          <label className='font-normal text-sm'>Password</label>
          <br />
          <input value={password}
          onChange = {e => setPassword(e.target.value)}
          type="password" className='outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2' required
          />
        </div>

        <br />

        {/* Buttons */}
        <section className='text-white flex flex-col lg:flex-row gap-2 lg:gap-10'>
          
            <button type="submit"
            className="btn btn-sm hover:bg-[#22FF29] border-none bg-[#11BD17] w-[300px] lg:w-[164px] h-[39px] rounded-md">
              <span className='text-base capitalize font-medium'>Login</span>
            </button>
          

          <Link to={'/'}>
            <button className="btn btn-sm hover:bg-[#F57999] border-none bg-[#D93D65] w-[300px] lg:w-[164px] h-[39px] rounded-md">
              <span className="text-base capitalize font-medium">
              Back
              </span>
            </button>
          </Link>
        </section>

          {/* Sign Up Link */}
          <div className="mt-5">
            <h3 className='w-[90vw] lg:w-full text-center'>Don't have an Account? <Link to = {'/donor/donor-signup'} className="text-[#D93D65] cursor-pointer hover:text-[#F57999]">Sign Up</Link></h3>
          </div>

      </form>
    </section>
  </main>
  )
}

export default DonorLogin
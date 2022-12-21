import { Link, useNavigate } from 'react-router-dom';
import MainImage from '../../../Images/loginImg.png';
import Bladie from '../../../Images/BBLogo.png';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../redux/authSlice';
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'

const AdminLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [canSeePassword,setCanSeePassword] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('https://localhost:7253/Accounts/login', {
      userName: userName,
      password:password
  })
    .then((res) => {
      dispatch(authActions.login())
      localStorage.setItem('loginToken',JSON.stringify(res.data))
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Logged In!',
        showConfirmButton: false,
        timer: 1000
      })
      navigate("/blood-bank/app/dashboard")
    })
    .catch((err) => {
      Swal.fire({
        title: 'Error!',
        text: (`${err.response?.data}`),
        icon: 'error',
        confirmButtonText: 'Back',
        confirmButtonColor:'#960000'
      })
    })
  }
  function handleCanSeePassword(){
    setCanSeePassword(!canSeePassword)
  }
  return ( 
    <main className='flex items-center w-[100vw] h-[100vh] justify-between'>
      <img src= {MainImage} alt="" className="hidden lg:flex w-[45%] h-full"/>

      {/* Form */}
      <section className='w-[45%] mx-auto'>
        <img src={Bladie} alt="/" className='mx-auto w-[200px]'/>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>

          {/* User Inputs */}
          <div className='mb-3'>
            <label className='font-normal text-sm'>Username</label>
            <br />
            <input 
            type="text" value={userName} onChange={(event) => setUserName(event.target.value)}
            className='outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-black' required/>
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

          <br />

          {/* Buttons */}
          <section className='text-white flex flex-col gap-2'>
              <button type="submit" className="bg-[#11BD17] w-[300px] lg:w-[164px] h-[39px] rounded-md
              hover:scale-105 ease duration-200 mx-auto">
                <span className='text-base'>Login</span>
              </button>
              <h3 className='w-[90vw] lg:w-full text-center'><Link to = {'/blood-bank/forgot-password'} className="text-[#686667] cursor-pointer underline">Forgot Password?</Link></h3>
          </section>

            {/* Sign Up Link */}
            <div className="mt-5">
              <h3 className='w-[90vw] lg:w-full text-center'>Don't have an Account? <Link to = {'/blood-bank/signup'} className="text-[#D93D65] cursor-pointer">Sign Up</Link></h3>
            </div>

        </form>
      </section>
    </main>
   );
}
 
export default AdminLogin;
import { Link, useNavigate } from 'react-router-dom';
import MainImage from '../../../Images/loginImg.png';
import Bladie from '../../../Images/BBLogo.png';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import { authActions } from '../../../redux/authSlice';

const AdminLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    await axios.post('https://localhost:7253/Accounts/login', {
      userName: userName,
      password:password
    })
    .then((res) => {
      console.log(res.data)
      dispatch(authActions.login())
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
            value={userName} onChange={(event) => setUserName(event.target.value)}
            type="text" className='outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-black' required/>
          </div>

          <div className='mb-3'>
            <label className='font-normal text-sm'>Password</label>
            <br />
            <input 
             value={password} onChange={(event) => setPassword(event.target.value)}
            type="password" className='outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2 focus:border-black' required/>
          </div>

          <br />

          {/* Buttons */}
          <section className='text-white flex flex-col lg:flex-row gap-2 lg:gap-10'>
              <button type="submit" className="bg-[#11BD17] w-[300px] lg:w-[164px] h-[39px] rounded-md">
                <span className='text-base'>Login</span>
              </button>
            
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
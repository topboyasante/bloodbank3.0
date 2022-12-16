import React from 'react'
import MainImage from '../../../Images/loginImg.png';
import Bladie from '../../../Images/BBLogo.png';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate()
  return (
    <main className='flex items-center w-[100vw] h-[100vh] justify-between'>
    <img src= {MainImage} alt="" className="hidden lg:flex w-[45%] h-full"/>
    <section className='w-[45%] mx-auto flex flex-col justify-center items-center'>
        <img src={Bladie} alt="/" className='mx-auto w-[200px]'/>
        <h2 className="text-center">Reset Password</h2>
        <form action="">

        </form>
        <div className='mx-auto'>
            <button onClick={()=>{navigate(-1)}}
                className='bg-[#960000] text-white px-4 py-2 w-[100px] rounded-md shadow my-2
                hover:scale-105 ease duration-200'>
                <p>Go Back</p>
            </button>
        </div>
    </section>
   
    </main>
  )
}

export default ForgotPassword
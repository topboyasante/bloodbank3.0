import React from 'react'
import { useNavigate } from 'react-router-dom'
import BBLogo from '../../Images/BBLogo.png'

function DoesNotExist() {
    const navigate = useNavigate()
  return (
    <main className='flex flex-col items-center justify-center h-screen bg-slate-100'>
        <img src={BBLogo} alt="Logo" className='w-[300px]' />
        <h1 className="text-center text-2xl">The Page You're looking for does not exist.</h1>
        <button onClick={()=>{navigate(-1)}}
        className='bg-[#960000] text-white p-3 rounded-md shadow my-2 w-[150px] hover:scale-105 ease duration-200'>
            Go Back?
        </button>
    </main>
  )
}

export default DoesNotExist
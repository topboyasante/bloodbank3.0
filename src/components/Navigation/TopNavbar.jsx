import axios from 'axios'
import React, { useEffect } from 'react'
import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch  } from 'react-redux'
import { authActions } from '../../redux/authSlice'





function TopNavbar() {
  const headers = { authorization: `Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`}
  const dispatch = useDispatch()
  const hospitalName = useSelector((state)=>state.auth.user.hospitalName)
    async function fetchName(){
      await axios.get('https://localhost:7253/Accounts', { headers })
      .then((res)=>{
        dispatch(authActions.setHospitalName(res.data))
      })
    }

  useEffect(()=>{
    fetchName()
  })
  
  return (
    <Link to='/bank/app/settings/account' className='flex justify-start lg:justify-end gap-3 w-[100vw] lg:w-full mb-7 px-5 py-8 text-[#ffffff] lg:text-black items-center h-[5vh] bg-white shadow'>
          <div className='flex flex-col items-end'>
            <p className='text-sm font-[600px]'>{hospitalName}</p>
          </div>
          <div>
              <FaUser size={40} className='bg-gray-200 rounded-full p-2'/>
          </div>
    </Link>
  )
}

export default TopNavbar
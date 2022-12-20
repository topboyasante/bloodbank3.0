import React, { useState } from 'react'
import Logo from '../../Images/BBLogo.png'
import {RiDashboardFill,RiHeartLine,RiSettings2Line,RiLogoutBoxLine} from 'react-icons/ri'
import {FaRegIdCard} from 'react-icons/fa'
import {AiOutlineShoppingCart,AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../redux/authSlice'

function AdminNavbar() {
    const [nav,setNav] = useState(false)
    function toggleNav(){
        setNav(!nav)
    }
    let activeStyle = {
         borderLeft:'5px solid #960000',
         backgroundColor:'#f2f2f2',
         padding:'0.75rem'
      };
      const navigate = useNavigate()
      const dispatch = useDispatch()

      function LogOut(){
        dispatch(authActions.logout())
        localStorage.removeItem('loginToken')
        navigate('/blood-bank')
      }
  return (
    <>
        {/*  Navbar For Large Screens: */}
     <nav className='hidden w-[15vw] h-[100vh] shadow-md lg:flex flex-col justify-evenly p-8'>
        <img src={Logo} alt="/" className='w-[137px] h-[71px] mb-10'/>
        <section>
            <NavLink to='/blood-bank/app/dashboard' exact='true' className='flex items-center gap-2 mb-10 hover:bg-gray-50 p-3 ease duration-200' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                    <RiDashboardFill size={25}/>
                    <p className='font-light text-md'>Dashboard</p>
            </NavLink>
            <NavLink to='/blood-bank/app/donor/donors' exact='true' className='flex items-center gap-2 mb-10 hover:bg-gray-50 p-3 ease duration-200' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                    <RiHeartLine size={25}/>
                    <p className='font-light text-md'>Donor</p>
            </NavLink>
            <NavLink to='/blood-bank/app/donations' exact='true' className='flex items-center gap-2 mb-10 hover:bg-gray-50 p-3 ease duration-200' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                    <FaRegIdCard size={25}/>
                    <p className='font-light text-md'>Donations</p>
            </NavLink>
            <NavLink to='/blood-bank/app/supply' exact='true' className='flex items-center gap-2 mb-10 hover:bg-gray-50 p-3 ease duration-200' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                    <AiOutlineShoppingCart size={25}/>
                    <p className='font-light text-md'>Supply</p>
            </NavLink>
            <NavLink to='/blood-bank/app/settings' exact='true' className='flex items-center gap-2 mb-10 hover:bg-gray-50 p-3 ease duration-200' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                    <RiSettings2Line size={25}/>
                    <p className='font-light text-md'>Settings</p>
            </NavLink>
        </section>
        <button onClick={LogOut} className='flex items-center gap-2 bg-[#960000] justify-around p-2 rounded-md w-[120px]'>
                <RiLogoutBoxLine size={25} color='#f1faee'/>
                <p className='text-[#f1faee]'>Log Out</p>
        </button>
     </nav>

        {/* Nav For Small Screens */}
    <nav className='lg:hidden bg-[#960000] w-full h-[8vh] flex items-center fixed top-0 left-0 z-30'>
        <section className={nav?'w-[45vw] bg-[#ffffff] fixed top-0 left-0 h-[100vh] flex flex-col justify-center items-start ease duration-500 pl-5':'w-[80vw] bg-bbWhite absolute top-0 left-[-1000px] h-[100vh] flex flex-col justify-center ease duration-500'}>
            <img src={Logo} alt="/" className='w-[137px] h-[71px]'/>
            <br />
            <NavLink onClick={()=>{setNav(false)}} to='/blood-bank/app/dashboard' exact='true' className='flex items-center gap-2 mb-10' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                    <p className='font-light text-xl'>Dashboard</p>
            </NavLink>
            <NavLink onClick={()=>{setNav(false)}} to='/blood-bank/app/donor/donors' exact='true' className='flex items-center gap-2 mb-10' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                    <p className='font-light text-xl'>Donor</p>
            </NavLink>
            <NavLink onClick={()=>{setNav(false)}} to='/blood-bank/app/donations' exact='true' className='flex items-center gap-2 mb-10' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                    <p className='font-light text-xl'>Donations</p>
            </NavLink>
            <NavLink onClick={()=>{setNav(false)}} to='/blood-bank/app/supply' exact='true' className='flex items-center gap-2 mb-10' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                    <p className='font-light text-xl'>Supply</p>
            </NavLink>
            <NavLink onClick={()=>{setNav(false)}} to='/blood-bank/app/settings' exact='true' className='flex items-center gap-2 mb-10' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                    <p className='font-light text-xl'>Settings</p>
            </NavLink>
            <br />
            <button onClick={LogOut} className='flex items-center gap-2 bg-[#960000] justify-around p-2 rounded-md w-[120px]'>
                <p className='text-[#f1faee]'>Log Out</p>
        </button>
        </section>
        <div onClick={toggleNav} className='absolute right-2 lg:hidden '>
              {nav?<AiOutlineClose size={30} color={'#f1faee'}/>:<AiOutlineMenu size={30} color={'#f1faee'}/>}
        </div>
    </nav>
    </>
  )
}

export default AdminNavbar
import Logo from '../../Images/BBLogo.png';
import {DonorSideBarData} from './DonorSideBarData'
import { NavLink } from 'react-router-dom';
const DonorSideBar = () => {

  // const activeLink = "text-green-600"
  // const normalLink = "text-black"

  const activeStyle = "text-dark-red font-bold"
  return ( 
    <main className='pl-5'>
      <figure>
        <img src={Logo} alt="logo" className='pt-[40px]' />

        </figure>
        <div>
          {
            DonorSideBarData.map((items, index)=> (
              <div key = {items.id}>
                <NavLink to={items.path}
                className={({ isActive }) =>isActive ? activeStyle : ''}
              >
                <div className={`flex space-x-5 my-7 
                ${items.last ? 'absolute bottom-0 btn w-[200px] border-none hover:bg-dark-red bg-dark-red capitalize font-medium justify-start' : ''}
                `}>
                  <span className='justify-center text-xl'>{items.icon}</span>
                  <span className='justify-center text-[16px]'>{items.title}</span>
                </div>
              </NavLink>

              </div>
            ))
          }
        </div>
    </main>
   );
}
 
export default DonorSideBar;
import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../../../components/Navigation/SearchBar'

function AdminSupply() {
  const [searchKeyword,setSearchKeyword] = useState('')
  const [filter, setFilter] = useState('all')
  function handleSearch (e){
    setSearchKeyword(e.target.value)
  }
  const activeNav = "border-b-[3px] border-b-[#960000] ease duration-200 w-[45%] text-center p-3";
  return (
    <div className='lg:w-[80vw] mx-5 h-[85vh] mt-[5em] lg:mt-0'>
      <div className='my-2'>
      {/* <SearchBar/> */}
      <SearchBar searchText={searchKeyword} handleSearchText={handleSearch}/>
      </div>
        <section className='flex justify-between flex-col lg:flex-row'>
          {/* Left */}
          <div className='lg:w-[35%] border mb-10 lg:mb-0'>
            {/* <AdminTabs/> */}
            <nav className='flex justify-between items-center w-full p-2 shadow'>
              <NavLink onClick={()=>{setFilter('Incoming')}}
              className={filter==='Incoming'?activeNav:'w-[45%] text-center hover:bg-gray-300 rounded-md p-3 ease duration-200'}>
                Incoming Supply</NavLink>
              <NavLink onClick={()=>{setFilter('Outgoing')}}
              className={filter==='Outgoing'?activeNav:'w-[45%] text-center hover:bg-gray-300 rounded-md p-3 ease duration-200'}>
                Outgoing Supply</NavLink>
            </nav>
          </div>
          {/* Right */}
          <div className='lg:w-[60%] h-[90%]'>
              <div className='lg:w-full border p-5 bg-white'>
                  <p className='text-center'>Click on A Supply to display its full data.</p>
              </div>
              <NavLink to='request-supply' exact='true' className='flex items-center gap-2 bg-[#960000] justify-around p-2 rounded-md w-[150px] mx-auto my-2'>
                <p className='text-[#f1faee]'>Send Request</p>
              </NavLink>
          </div>
        </section>
    </div>
  )
}

export default AdminSupply
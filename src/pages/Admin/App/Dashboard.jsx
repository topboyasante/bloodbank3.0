// import { Slider } from '@mui/material'
import axios from 'axios';
import { donorActions } from '../../../redux/donorSlice';
import { useSelector,useDispatch  } from 'react-redux'
import { useEffect } from 'react';
import MapImg from '../../../Images/map.png'

function Dashboard() {
  const donorList = useSelector((state)=>state.donor.donors)
  const dispatch = useDispatch()
  let bloodTypeAsText = ''
  const fetchDonorAPI = async ()=>{
    const response = await axios.get(`https://localhost:7253/Donors`);
    const data = response.data
    console.log(data)
    dispatch(donorActions.setDonors(data))
  }
  
  useEffect(() => {
    fetchDonorAPI()
  }, [])
  return (
    <div className='lg:w-[80vw] mx-5 h-[80vh] mt-[5em] lg:mt-0'>
      {/* Top */}
       <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
        {/* First Item */}
        <div className='w-[90%] lg:w-[38%] h-[25vh] p-2 shadow-md bg-white rounded-md'>
          <p className='font-light text-gray-400 mb-2'>Incoming Blood Requests</p>
          <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-left'>Blood Type</th>
                  <th className='text-left'>No. Of Requests</th>
                  <th className='text-left'>Status</th>
                </tr>
              </thead>
          </table>
        </div>
        {/* Second Item */}
        <div className='w-[90%] lg:w-[38%] h-[25vh] shadow-md p-2 bg-white rounded-md'>
          <p className='font-light text-gray-400 mb-2'>Outgoing Blood Requests</p>
          <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-left'>Blood Type</th>
                  <th className='text-left'>No. Of Requests</th>
                  <th className='text-left'>Status</th>
                </tr>
              </thead>
          </table>
        </div>
        {/* Third Item */}
        <div className='w-[90%] lg:w-[20%] h-[25vh] shadow-md p-2 bg-white rounded-md'>
        <p className='font-light text-gray-400 mb-2'>Notifications</p>
        </div>
       </div>
       <br />
       {/* Bottom */}
       <div className='flex flex-col lg:flex-row items-center justify-between gap-2'>
        {/* Recent Donors */}
        <section className='mb-5 lg:mb-0'>
          <h1>Recent Donors:</h1>
          <div className='border w-[90%] lg:w-[25vw] h-[55vh] overflow-y-scroll bg-white px-3 py-5 flex flex-col gap-5 shadow-md rounded-md'>
            {/* Donor List Shows Here. */}
            {donorList.map((item)=>{
               switch(item.bloodType){
                case "OPositive":
                  bloodTypeAsText = "O+"
                 break;
                case "APositive":
                  bloodTypeAsText = "A+"
                 break;
                case "BPositive":
                  bloodTypeAsText = "B+"
                 break;
                case "ABPositive":
                  bloodTypeAsText = "AB+"
                 break;
                case "ABNegative":
                  bloodTypeAsText = "AB-"
                 break;
                case "ANegative":
                  bloodTypeAsText = "A-"
                 break;
                case "BNegative":
                  bloodTypeAsText = "B_"
                 break;
                case "ONegative":
                  bloodTypeAsText = "O-"
                 break;
                 
               }
                  return(
                  <main className='rounded-md shadow px-2 py-3 flex justify-center items-center gap-[4em]'>
                    <div className='w-[20%]'>
                    {/* <img src={item.img} alt={item.name} className='w-[50px] h-[50px] rounded-full object-cover' />  */}
                    </div>
            
                      <div className='w-[60%]'>
                        <h1 className='font-[500] text-xl'>{item.fullName}</h1>
                        <p className='text-gray-500'>{item.dateofBirth}</p>
                      </div>
            
                      <div className='w-[15%]'>
                        <p className='text-2xl uppercase'>{bloodTypeAsText}</p>
                      </div>
                  </main>
                  )
                  })}
          </div>
        </section>
        {/* Maps */}
        <div className='shadow-md w-[90%] lg:w-[55vw] lg:h-[55vh] p-5 mb-5 lg:mb-0 bg-white rounded-md'>
            <div>
              <p className='font-semibold'>Track Nearby Donors</p>
              <img src={MapImg} alt="/"  className='w-full lg:h-[35vh] object-cover'/>
            </div>
            <br />
            <div className='w-full flex flex-col gap-2 lg:flex-row justify-between items-center '>
                <div className='flex items-center w-full lg:w-[80%] bg-[#f5f5f5] p-2 rounded-md'>
                  <div className='w-[40%]'>
                    <h1 className='text-2xl font-medium text-[#960000]'>Set Distance</h1>
                    <p className='text-gray-500'>Max Limit: 60km</p>
                  </div>
                  {/* <Slider defaultValue={10} min={0} max={60} aria-label="Default" valueLabelDisplay="auto" /> */}
                </div>
                <div>
                  <button to='request-supply' exact='true' className='flex items-center gap-2 bg-[#960000] justify-around p-2 rounded-md w-[150px] mx-auto my-2'>
                  <p className='text-[#f1faee]'>Send Request</p>
                  </button>
                </div>
            </div>
        </div>
       </div>
      </div>
  )
}

export default Dashboard
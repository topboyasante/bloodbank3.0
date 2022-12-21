import axios from 'axios'
import React,{useState,Fragment} from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import {NavLink, useNavigate,Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import { donationActions } from '../../../redux/donationsSlice'


function AdminAddNewDonation() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const headers = { authorization: `Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`}
    const donationsList = useSelector((state)=>state.donations.donations)
    const donorList = useSelector((state)=>state.donor.donors)
    const [isForStorage,setIsForStorage] = useState(false)
  

  const donorItem = donorList.map((donor)=>{
    return(
        <option value={donor.fullName} key={donor.id}>
            {donor.fullName}
        </option>
    )
})


    //   States
    const [date,setDate] = useState('')
    const [donor,setDonor] = useState('')
    const [bGroup,setBGroup] = useState('')
    const [qty,setQty] = useState('')
    const [recipient,setRecipient] = useState('')

    const newDonation = {
      id:donationsList.length+1,
      date:date,
      donor:donor,
      bGroup:bGroup,
      qty:qty,
      recipient:recipient
  }
    // Handler Functions
    function handleDate(event){
        setDate(event.target.value)
    }
    function handleIsForStorage(){
        setIsForStorage(!isForStorage)
        if(!isForStorage){
            setRecipient('Storage')
        }
    }
    function handleDonor(event){
        const res = donorList.map((x) => {
            if(event.target.value == x.fullName){
                setBGroup(x.bloodType)
            }
        })
        setDonor(event.target.value)

    }
    function handleBGroup(event){
        setBGroup(event.target.value)
    }
    function handleQty(event){
        setQty(event.target.value)
    }
    function handleRecipient(event){
        setRecipient(event.target.value)
    }

    //Dispatch Functions
      async function handleSubmit(){
        if(date!=='' && donor!=='' &&bGroup!=='' &&qty!=='' && recipient!==''){
            dispatch(donationActions.addDonation(newDonation))
            await axios.post('https://localhost:7253/Donations',{
              donorName:donor,
              bloodType:bGroup,
              quantity:qty,
              dateofDonation:date,
              recipientName:recipient
            },{headers}).then(()=>{
              Swal.fire({
                title: 'Success!',
                text: 'The New Donation Was Added.',
                icon: 'success',
                timer: 1500,
                showConfirmButton:false
              })
              navigate('/blood-bank/app/donations')
            }).catch(()=>{
              Swal.fire({
                title: 'Error!',
                text: 'The Was A Problem.',
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor:'#960000'
              })
            })
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'The Form is Incomplete or has Wrong Data.',
                icon: 'error',
                confirmButtonText: 'Back',
                confirmButtonColor:'#960000'
              })
        }
    }
  return (
    <section className='p-[2em] mt-[3em] lg:mt-0'>
         <NavLink className='border p-2 shadow-md rounded-md' onClick={() => navigate(-1)}>Back</NavLink>
         <br />
         <br />
         {/* Form */}
         <div className='mt-5 lg:w-[70vw] shadow-md p-5 mx-auto'>
            <h1 className='text-2xl'>New Donations Form</h1>
            <p className='text-gray-500'>Please Input the required data below</p>
            <div className='my-3'>
                <label htmlFor='date'>Date</label>
                <input type="date" className='border w-[100%] p-2 rounded-md' value={date} onChange={handleDate} />
            </div>
            <div className='my-3'>
                <label htmlFor="qty">Donor</label>
                <br />
                <select name="text" className='border w-[100%] p-2 rounded-md' value={donor} onChange={handleDonor}>
                    {/* <options> */}
                        <option value={donor.id}></option>
                        {donorItem}
                    {/* </options> */}
                </select>
            </div>
            <div className='my-3'>
                <label htmlFor='blood-type'>Select Blood Type</label>
                <br />
                <input type="text" className='border w-[100%] p-2 rounded-md' value={bGroup} readOnly />
            </div>
            <div className='my-3'>
                <label htmlFor='blood-type'>Quantity</label>
                <input type="number" className='border w-[100%] p-2 rounded-md' value={qty} onChange={handleQty} />
            </div>
            {!isForStorage?<div className='my-3'>
                <label htmlFor="qty">Recipient</label>
                <br />
                <input type="text" className='border w-[100%] p-2 rounded-md' value={recipient} onChange={handleRecipient}/>
            </div>:<div className='my-3'>
                <label htmlFor="qty">Recipient</label>
                <br />
                <input type="text" className='border w-[100%] p-2 rounded-md' value={recipient} readOnly/>
            </div>}
            <div className='flex items-center gap-2'>
                <label htmlFor="isStorage">For Storage</label>
                <input type="checkbox" value={isForStorage} onChange={handleIsForStorage} />
            </div>
            <Link to='/bank/app/donations'>
            <button className='bg-[#960000] text-white w-[100%] p-2 rounded-lg my-2' onClick={handleSubmit}>Add Donation</button>
            </Link>
         </div>
    </section>     
  )
}

export default AdminAddNewDonation
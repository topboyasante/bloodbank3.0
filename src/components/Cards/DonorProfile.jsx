import React from 'react'
import { Link } from 'react-router-dom'

function DonorProfile(props) {
 let bloodTypeAsText = ''

 switch(props.item.bloodType){
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
    bloodTypeAsText = "B-"
   break;
  case "ONegative":
    bloodTypeAsText = "O-"
   break;
   
 }
  return (
    <Link to={`${props.item.id}`}>
      <main className='rounded-md shadow px-2 py-3 flex justify-center items-center gap-[4em] cursor-pointer'>
        <div className='w-[20%]'>
        {/* <img src={props.item.img} alt={props.item.name} className='w-[50px] h-[50px] rounded-full object-cover' /> */}
        </div>

          <div className='w-[60%]'>
            <h1 className='font-[500] text-xl'>{props.item.fullName}</h1>
            <p className='text-gray-500'>{props.item.dateofBirth}</p>
          </div>

          <div className='w-[15%]'>
            
            <p className='text-2xl uppercase'>{bloodTypeAsText}</p>
          </div>
      </main>
    </Link>
  )
}

export default DonorProfile
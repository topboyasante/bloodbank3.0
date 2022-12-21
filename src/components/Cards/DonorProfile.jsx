import { useEffect } from 'react';
import { useDispatch  } from 'react-redux'
import { Link } from 'react-router-dom'
import isMaleImg from '../../Images/isMale.png'
import isFemaleImg from '../../Images/isFemale.png'
import {FiDelete} from 'react-icons/fi'


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
        <div className='w-[30%]'>
        {props.item.gender === 'Male'? <img src={isMaleImg} alt="isMale" className='w-[50%]'/> 
        : <img src={isFemaleImg} alt="isFemale" className='w-[50%]'/>}
        </div>

          <div className='w-[60%]'>
            <h1 className='font-[500] text-xl'>{props.item.fullName}</h1>
            <p className='text-gray-500'>{props.item.dateofBirth}</p>
          </div>

          <div className='w-[18%] flex items-center gap-5'>
            <p className='text-2xl uppercase border-r pr-2'>{bloodTypeAsText}</p>
            <FiDelete size={20} color='gray' className='hover:scale-105 ease duration-150'/>
          </div>
      </main>
    </Link>
  )
}

export default DonorProfile
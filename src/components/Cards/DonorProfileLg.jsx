import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function DonorProfileLg() {
//  const donorList = useSelector((state)=>state.donor.donors)
//  const { donorID } = useParams()
  return (
  //   <main className='p-5 h-full'>
  //     {/* Image Area*/}
  //     <section className='flex justify-end gap-2 items-center'>
  //       {/* Text */}
  //       <div>
  //         <h1 className='font-[500]'>{`${donorList[donorID-1]?.fullName}`}</h1>
  //         <h1 className='text-gray-500'>{`${donorList[donorID-1]?.email}`}</h1>
  //       </div>  
  //       {/* Img */}
  //       {/* <img 
  //       src={`${donorList[donorID-1].img}`} 
  //       alt={`${donorList[donorID-1].name} 's Profile Picture`} 
  //       className='w-[50px] h-[50px] rounded-full'
  //       /> */}
  //     </section>
  //     {/* Profile */}
  //     <h1>Profile</h1>
  //     <section className='flex flex-col justify-center h-[90%] gap-5'>
       
  //       <table className='flex items-center'>
  //         <thead className='w-[40%]'>
  //           <tr className='flex flex-col text-left'>
  //             <th>Blood Group</th>
  //             <th>Age</th>
  //             <th>Sex</th>
  //             <th>Location</th>
  //             <th>Latest Donation</th>
  //           </tr>
  //         </thead>
  //         <tbody className='w-[50%]'>
  //           <tr className='flex flex-col text-gray-500'>
  //             <td className='uppercase'>{donorList[donorID-1].bloodType}</td>
  //             <td>{donorList[donorID-1].age}</td>
  //             <td className='capitalize'>{donorList[donorID-1].gender}</td>
  //             <td className='capitalize'>{donorList[donorID-1].location}</td>
  //             <td>{donorList[donorID-1].lastDonation}</td>
  //           </tr>
  //         </tbody>
  //       </table>

  //       <div>
  //       <p>Bio</p>
  //       <textarea name="bio" id="" cols="30" rows="10"
  //       className='border rounded-md resize-none w-full'
  //       />
  //       </div>
  //     </section>
  //   </main>
  <p>hi</p>
  )
}

export default DonorProfileLg
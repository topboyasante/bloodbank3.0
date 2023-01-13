import * as React from 'react';
import {BiDonateBlood} from 'react-icons/bi'

export default function FeatureCard({header,desc}) {
  return (
    <main className='shadow w-[350px] h-[200px] rounded-md p-5 flex flex-col justify-center items-center'>
         <BiDonateBlood size={60} className='mx-auto'/>
         <section className='text-center'>
            <h1>{header}</h1>
            <p className='text-sm text-gray-500'>{desc}</p>
         </section>
    </main>
  );
}

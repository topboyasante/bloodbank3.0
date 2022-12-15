import * as React from 'react';
import {BiDonateBlood} from 'react-icons/bi'

export default function FeatureCard({header,desc}) {
  return (
    <main className='shadow w-[350px] rounded-md p-5'>
         <BiDonateBlood size={30} className='mx-auto'/>
         <section className='text-center'>
            <h1>{header}</h1>
            <p>{desc}</p>
         </section>
    </main>
  );
}

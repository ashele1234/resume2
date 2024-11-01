"use client"
import React from 'react'
import Image from 'next/image'
import icon1 from "../app/images/icon-1.png"
import icon2 from "../app/images/icon-2.png"
import icon3 from "../app/images/icon-3.png"
const Started=[
    {
     id:0,
     img:icon1,
     h1:`Enter Details`,
     p:`Semper nec eleifend arcu natoque hac est lectus gravida urna, nostra. Accumsan vel pede nam volutpat magnis.`
    },
    {
     id:2,
     img:icon2,
     h1:`Select Template`,
     p:`Semper nec eleifend arcu natoque hac est lectus gravida urna, nostra. Accumsan vel pede nam volutpat magnis.`
    },
    {
     id:3,
     img:icon3,
     h1:`Download Resume`,
     p:`Semper nec eleifend arcu natoque hac est lectus gravida urna, nostra. Accumsan vel pede nam volutpat magnis.`
    }
   ]
const Sec1 = () => {
  return (
    <div className='max-sm:mt-44'>
        <section className='w-full h-[80vh] flex justify-center items-center bg-white flex-col gap-16 -mt-10'>
     <div className='flex justify-center items-center flex-col gap-4'>
     <h1 className='font-bold text-4xl'>How It Works?</h1>
     <p className='font-medium text-2xl max-w-[740px] text-center'>Ultricies nulla velit turpis feugiat ac aenean sociosqu luctus facilisis lobortis. Mi commodo dictum fames libero interdum.</p>
     </div>
   <div className='gap-4 w-[90%] flex justify-center items-center max-sm:flex-col p-2'>
   {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Started.map((s:any)=>(
   <div className='w-full flex justify-start items-start gap-10 'key={s.id}>
         <div className='w-full flex justify-between items-start flex-col gap-2'>
         <Image
          src={s.img}
          alt='icons'
          width={50}
          height={50}
          className='text-[#502ACD]'
          />
          <h2 className='font-bold text-2xl'>{s.h1}</h2>
          <p className='font-normal text-[20px]'>{s.p}</p>
         </div>
        </div>
      ))
     }
   </div>
    </section>
    </div>
  )
}

export default Sec1

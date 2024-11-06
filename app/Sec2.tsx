import React from 'react'
import about from "../app/images/bfda1a0b-ca30-4ed8-ab4b-3ad996153ba5.jpg"
import Image from 'next/image'
import icon1 from "../app/images/icon-1.png"
import icon2 from "../app/images/icon-2.png"
import icon3 from "../app/images/icon-3.png"
const About=[
  {
   id:1,
   img:icon1,
   h1:`Resume`,
   p:`Semper nec eleifend arcu natoque hac est lectus gravida urna, nostra. Accumsan vel pede nam volutpat magnis.`
  },
  {
   id:2,
   img:icon2,
   h1:`Cover Letters`,
   p:`Semper nec eleifend arcu natoque hac est lectus gravida urna, nostra. Accumsan vel pede nam volutpat magnis.`
  },
  {
   id:3,
   img:icon3,
   h1:`Applications`,
   p:`Semper nec eleifend arcu natoque hac est lectus gravida urna, nostra. Accumsan vel pede nam volutpat magnis.`
  }
 ]
const Sec2 = () => {
  return (
    <div className='w-full h-[100vh] bg-[#d7d4dd] flex justify-center items-center max-sm:w-full max-sm:bg-[rgba(215,212,221,0)]'>
      <div className='w-[90%] h-[90vh] flex justify-between items-center max-sm:flex-col gap-2 mt-20 max-sm:bg-transparent'>
      <div className='w-[40%] border-slate-950 border rounded-md max-sm:w-full'>
        <Image
        src={about}
        width={0}
        height={0}
        className='w-[550px] h-[550px] object-cover rounded-sm pl-6 pt-2'
        alt='image of a lady'
        />
      </div>
      <div className='w-[50%] flex justify-center items-center flex-col gap-4 max-sm:w-full mb-10'>
        <h1 className='font-bold text-4xl max-sm:text-4xl text-center'>Try Our Creative Tools</h1>
        <p className='font-normal text-2xl text-center max-sm:text-1xl'>Ultricies nulla velit turpis feugiat ac aenean sociosqu luctus facilisis lobortis. Mi commodo dictum fames libero interdum.</p>
        {
          About.map((a:any)=>(
             <div className='w-full h-[18vh] bg-white rounded-md p-4 max-sm:bg-slate-100 '>
    
                <div className='flex justify-start items-center gap-2' key={a.id}>
                <Image
              width={0}
              height={0}
              className='w-[40px] h-[40px] text-white gap-2'
               src={a.img}
               alt={'icons'}/>
          <h1 className='font-bold text-2xl'>{a.h1}</h1>
                </div>
          <p className='font-normal text-[20px] max-sm:text-[16px]'>{a.p}</p>
          </div>
           ))}
      </div>
    </div>
      </div>
  )
}

export default Sec2

import React from 'react'
import Image from 'next/image'
import  profile from "../app/images/bfda1a0b-ca30-4ed8-ab4b-3ad996153ba5.jpg"

const Designers=[
    {
        id:1,
        icon:profile,
        h1:`Andrew Hill`,
        p1:`ui/ux designer`,
        p2:`Sollicitudin morbi pulvinar leo diam tellus fames ex. Himenaeos cubilia erat congue libero donec eleifend etiam justo.`,
        star:`⭐⭐⭐⭐⭐`
    },
    {
        id:2,
        icon:profile,
        h1:`Andrew Hill`,
        p1:`ui/ux designer`,
        p2:`Sollicitudin morbi pulvinar leo diam tellus fames ex. Himenaeos cubilia erat congue libero donec eleifend etiam justo.`,
        star:`⭐⭐⭐⭐⭐`
    },
    {
        id:3,
        icon:profile,
        h1:`Andrew Hill`,
        p1:`ui/ux designer`,
        p2:`Sollicitudin morbi pulvinar leo diam tellus fames ex. Himenaeos cubilia erat congue libero donec eleifend etiam justo.`,
        star:`⭐⭐⭐⭐⭐`
    }
]
const Sec3 = () => {
  return (
    <div className="w-[90%] h-[100vh] flex justify-center items-center flex-col gap-8">
      <h1 className='font-bold text-4xl max-sm:text-center'>People Saying About Us</h1>
      <p className='font-normal text-2xl text-wrap max-sm:text-center'>Ultricies nulla velit turpis feugiat ac aenean sociosqu luctus facilisis lobortis. Mi commodo dictum fames libero interdum.</p>
     <div className='w-full flex justify-between items-center max-sm:flex-col gap-4'>
     {
        Designers.map((el:any)=>(
            <div className='w-[330px] h-[40vh] border rounded-lg flex justify-center items-start flex-col p-4 gap-6' key={el.id}>
            <div className='flex justify-center items-start gap-2'>
                <Image
                src={el.icon}
                width={0}
                height={0}
                alt='profile'
                className='w-[50px] h-[50px] rounded-full object-center'
                />
                <div className='flex-col'><h1 className='font-bold text-1xl'>{el.h1}</h1>
                <p>{el.p1}</p>
                </div>
            </div>
            <p className='font-normal text-1xl'>{el.p2}</p>
            <div className='text-[20px]'>{el.star}</div>
          </div>
        ))
     }
     </div>
    </div>
  )
}

export default Sec3

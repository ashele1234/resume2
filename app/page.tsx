"use client"
import React, { useState } from 'react'
import { MdCancel, MdMenu } from 'react-icons/md'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'


const Navs=[
  {
    id:1,
     name:"Home"
  },
  {
    id:2,
     name:"About"
  },
  {
    id:3,
     name:"Services"
  },
  {
    id:4,
     name:"News"
  },
  {
    id:5,
     name:"FAQ"
  }
]

const Page = () => {
  const[Toggle,setToggle]=useState<boolean>(false)
  const OnToggle=()=>{
    setToggle(!Toggle)
  }
  const OnCancel=()=>{
    setToggle(false)
  }
  return (
   <div className=' w-full h-full flex justify-center items-center flex-col gap-4'>
    <header className='w-[100%] h-[80px] bg-white flex justify-center items-center fixed top-0 z-30 lg:flex max-lg:flex '>
      <header className='w-[90%] h-[80px] bg-white flex justify-between items-center fixed top-0 z-30'>
        <div className="font-extrabold text-2xl font-serif">ResumeGrove</div>
        <div className='flex justify-center items-center gap-10 max-md:hidden'>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Navs.map((el:any)=>(
            <div className=' font-semibold text-base cursor-pointer hover:underline decoration-4 underline-offset-8 font-serif lg:flex md:hidden max-sm:hidden'
             key={el.id}>
              <div>{el.name}</div>
             </div>  
          ))
        }
        </div>
        <div className='flex gap-4 max-md:hidden max-sm:hidden'>
          <button className='px-6 py-4 bg-#fff text-[#502ACD] rounded-md border font-semibold hover:bg-[#502acd1a] border-purple-900 font-serif'>Sign in</button>
          <button className='px-6 py- rounded-md font-semibold bg-[#502ACD] text-white hover:bg-black font-serif'>Register</button>
        </div>
        <div className='text-black  sm:block max-sm:flex  lg:hidden md:flex flex justify-center items-center'>
           {!Toggle? <MdMenu className='text-black w-[35px] h-[35px] cursor-pointer' onClick={OnToggle}/>:<MdCancel  className='text-black w-[35px] h-[35px] cursor-pointer'onClick={OnCancel}/>}
          </div>

      </header>
    </header>
   {Toggle && <div className=" gap-4 w-full h-[100vh] bg-black absolute top-0 z-10 mt-[80px] transition-all ease-in-out duration-300 transform translate-x-[0%] flex justify-start items-start flex-col px-6 cursor-pointer md:hidden lg:hidden animate-none">
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Navs.map((t:any)=>(
        <div className='text-white font-semibold mt-8 font-serif' key={t.id}>
          {t.name}
        </div>
      ))
    }
    <div className='flex gap-2'>
          <button className='px-12 py-4 bg-slate-900 rounded-md border font-semibold hover:bg-[#502ACD] text-[#fff] font-serif'>Sign in</button>
          <button className='px-12 py-4 rounded-md font-semibold bg-[#502ACD] text-white hover:bg-slate-600 font-serif'>Register</button>
        </div>
    </div>}
    <section className=' sec-1 mt-[25px] w-full h-screen flex justify-center items-center flex-col gap-2'>
    <div className='  absolute w-full h-[100vh] top-0 flex flex-col bg-[rgba(0,0,0,0.37)] justify-center items-center max-sm:gap-4'>
    <h1 className='font-bold text-7xl text-white font-serif text-center max-sm:text-3xl mt-6 '>Craft a resume that gets <br /> you hired.</h1>
    <p className='font-bold text-2xl text-white font-serif text-center max-sm:text-sm max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cumque assumenda,labore cum molestias sint!</p>
    <div className='flex justify-center items-center gap-2 mt-6'>
      <button className='px-10 py-3 bg-white font-serif rounded-md drop-shadow-2xl max-sm:px-6'>CREATE CV</button>
      <button className='px-10 py-3 bg-[#502ACD] text-white font-serif rounded-md drop-shadow-2xl max-sm:px-6'>LEARN MORE</button>
    </div>
    </div>
    </section>
    <div><Sec1/></div>
    <div className='w-full flex justify-center items-center'><Sec2/></div>
    <div className='w-full flex justify-center items-center'><Sec3/></div>
   </div>
  )
}

export default Page

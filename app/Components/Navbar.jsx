"use client"
import React, { useState } from 'react'
import { IoReorderThreeSharp } from "react-icons/io5";
import Image from "next/image"

const Navbar = ({color,back}) => {
  const [toogleOpen,setToogleOpen] = useState(false)

  return (
    <div className={`w-full  bg-[#015BB4]/80 fixed left-0 z-40 px-[40px] py-[10px] flex felx-row justify-between items-center`}>
      <a href="/" >
        <div className='w-[40px] '>

          <Image src="/image/logo.png" alt='logo' width={300} height={300} className='w-full h-full object-cover' />
        </div>
      </a>
            <div className={` hidden  md:flex flex-row items-center gap-[20px] lg:gap-[40px] text-${color} font-[400] text-[14px] `}>
              <a href="/">Home</a>
              <a href="/about-us">About</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
              <a href="" className='border-[1px] rounded-[16px] bg-[#015BB4] px-[20px] py-[10px]'>Get In Touch</a>
            </div>
            <div className='flex md:hidden cursor-pointer' onClick={()=> setToogleOpen(!toogleOpen)}>
            <IoReorderThreeSharp size={35} color={color} />
            </div>
            <div className={` absolute flex  transition-all flex-col p-10 bg-blue-600 ${toogleOpen ? "right-0 flex" : "right-[-200vh] hidden" }  top-16 md:hidden`}>
              <div className='flex text-white flex-col text-[18px] gap-[20px]'>
              <a href="/">Home</a>
              <a href="/about-us">About</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>

              </div>
            </div>

          </div>
  )
}

export default Navbar

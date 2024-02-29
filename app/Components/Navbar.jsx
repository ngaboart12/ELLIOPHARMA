"use client"
import React, { useState } from 'react'
import { IoReorderThreeSharp } from "react-icons/io5";

const Navbar = ({color,back}) => {
  const [toogleOpen,setToogleOpen] = useState(false)

  return (
    <div className={`w-full border-b border-${color}/40 bg-transparent flex felx-row justify-between items-center py-4`}>
      <a href="/">

            <h1 className={`text-[24px] font-[600] text-${color}`}>Logo</h1>
      </a>
            <div className={` hidden  md:flex flex-row items-center gap-[20px] lg:gap-[40px] text-${color} font-[400] text-[14px] `}>
              <a href="/">Home</a>
              <a href="/about-us">About</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
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

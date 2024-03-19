"use client"
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import Image from "next/image"




const Footer = () => {

  
  return (
    <div class="w-full   flex flex-col gap-[10px] ">
      <div class="w-full px-[10px] md:px-[100px] flex flex-col gap-[10px] bg-gradient-to-tr from-background to-[#015bb4]  items-center justify-between py-4 border-b border-white/40">
         <a href="/" >
        <div className='w-[100px] h-[100px] '>

          <Image src="/image/logo.png" alt="logo" width={300} height={300} className='w-full h-full object-cover' />
        </div>
        </a>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-[10px]">
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Blog</a>
          <a href="#" className="text-white">Contact</a>
          
        </div>
        <div class="flex flex-row gap-[10px]">
          <a href="#" class="p-2  px-3 flex items-center justify-center">
            <i className="text-white">
              <FaXTwitter />
            </i>
          </a>
          <a href="#" class="p-2  px-3 flex items-center justify-center">
            <i class=" text-white">
              <FaInstagram />
            </i>
          </a>
          <a href="#" class="p-2  px-3 flex items-center justify-center">
            <i class=" text-white">
              <CiFacebook />
            </i>
          </a>
        </div>
      </div>
      <div className="p-4 flex items-center justify-center">
        <span className="text-[#5D5D5D] text-[18px]">© 2024 ELLIOPHARMA inc</span>
      </div>
   
    </div>
  );
};

export default Footer;

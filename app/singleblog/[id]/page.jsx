"use client"
import React from "react";
import Navbar from "../../Components/Navbar";
import Image from "next/image";
import Footer from "../../Components/Footer";
import { useParams } from 'next/navigation'


import blogsData from "../../../public/blogs.json"
const SingleBlog = () => {
  const paramas = useParams();
  let id = paramas.id
  id = parseInt(id)


  
 
  const singleBlog = blogsData.filter(item=> item.id===id  )
  return (
    <div className="">
      <Navbar color={`white`} />
      <div className="py-20 px-[10px] md:px-[200px] flex flex-col gap-[20px]">
        {singleBlog.map((item,index)=>{
          return(
            <>
          

     
        <div className="h-[50vh] w-full">
          <Image
          alt="Blog Image"
            src={item.image}
            width={4000}
            height={400}
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="text-[14px] text-[#797C7F]">{item.date}</span>
          <h1 className="text-[28px] font-[600] ">
           {item.title}
          </h1>
          <div className="flex flex-col gap-[20px]">
            <span className="text-[16px] text-[#626262]">
             {item.disc}
            </span>
         
          </div>
        </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[20px] font-[700] text-[#015BB4]">ADD YOUR COMMENT</h1>
            <form action="" className="flex flex-col gap-[10px]">
              <div className="flex flex-col sm:flex-row w-full gap-[20px]">
                <div className="flex flex-col gap-[4px] w-full sm:w-1/2">
                  <span className="text-[#535353]">Full Name</span>
                  <input type="text" placeholder="Enter Your Full Name" className="bg-[#EEEDED] p-3 rounded-[12px] w-full"/>
                </div>
                <div className="flex flex-col gap-[4px] w-full sm:w-1/2">
                  <span className="text-[#535353]">Email</span>
                  <input type="text" placeholder="Enter Your Full Name" className="bg-[#EEEDED] p-3 rounded-[12px] w-full "/>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] w-full ">
                  <span className="text-[#535353]">Email</span>
                  <textarea type="text" rows={6} placeholder="Enter Your Full Name" className="bg-[#EEEDED] p-3 rounded-[12px] w-full"/>
                </div>
                <button className=" justify-center mr-auto p-3 rounded-[12px] bg-[#015BB4] w-full cursor-pointer transition-all  hover:scale-105 duration-1000 sm:w-1/2 text-white flex items-center">
                  Submit Comment
                </button>
            </form>
          </div>
          </>
          )
          })}
      </div>
      <Footer/>
    </div>
  );
};

export default SingleBlog;

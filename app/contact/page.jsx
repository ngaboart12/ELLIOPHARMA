import React from "react";
import Navbar from "../Components/Navbar";
import { FaPhone } from "react-icons/fa6";
import Footer from "../Components/Footer";
import { IoMdMail } from "react-icons/io";


export const metadata = {
  title: "Ellophrama - Contact",
  description: "ellopgrama blog page",
};

const Contact = () => {
  return (
    <div className="flex flex-col gap-[40px] overflow-x-hidden">
      <div className="px-[10px] md:px-[100px]">
        <Navbar />
      </div>
      <div className="px-[10px] md:px-[100px] flex flex-col items-center lg:flex-row gap-[20px] w-full">
        <div className="flex flex-col gap-[10px] items-start py-10 w-full lg:w-1/2  md:px-20">
          <h1 className="text-[18px] font-[700] border-b-2 border-blue-500 uppercase">
            Contact Us
          </h1>
          <form action="" className="w-full py-5 flex flex-col gap-6">
            <div className="flex flex-col gap-1 w-full">
              <span className="text-black">Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-[10px] w-full  outline-none rounded-xl border border-gray-300 font-light placeholder:text-black text-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-black">Email</span>
              <input
                type="text"
                placeholder="Enter your Email"
                className="p-[10px] outline-none rounded-xl border border-gray-300 font-light  placeholder:text-black text-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-black">Message</span>
              <textarea
                type="text"
                placeholder="Enter your Message"
                className="p-[10px] outline-none rounded-xl border border-gray-300 font-light  placeholder:text-black text-black"
                rows={3}
              ></textarea>
            </div>
            <button
              type="submit"
              className=" bg-blueColor  w-full md:w-full text-white rounded-xl p-4"
            >
              Submit Now
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 py-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4238525825967!2d30.12989897473947!3d-1.9851223979969443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca71e1ddf7a99%3A0x75375873a766ef26!2sKaze%20Residence!5e0!3m2!1sen!2srw!4v1708994363396!5m2!1sen!2srw"
            width="500"
            height="350"
            className="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full md:grid-cols-3 gap-[20px] px-[10px] md:px-[100px]">
        <div className="flex flex-col md:flex-row items-center gap-[10px]   p-4 border-[1px] border-black/20">
            <div>
            <IoMdMail size={25} color="darkblue" />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span>Email</span>
              <span>Ellophrama@gmail.com</span>
            </div>
            
        </div>
      
        <div className="flex flex-col md:flex-row items-center gap-[10px]   p-4 border-[1px] border-black/20">
            <div><FaPhone size={25} color="darkblue"/></div>
            <div className="flex flex-col items-center md:items-start">
              <span>Phone</span>
              <span>0675234767</span>
            </div>
            
        </div>
      </div>
      
      <Footer/>
    </div>

  );
};

export default Contact;

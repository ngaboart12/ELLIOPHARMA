import React from "react";
import Navbar from "../Components/Navbar";
import { FaPhone } from "react-icons/fa6";
import Footer from "../Components/Footer";
import { IoMdMail } from "react-icons/io";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div className="flex flex-col gap-[40px] overflow-x-hidden">
      <div className="px-[10px] md:px-[100px]">
        <Navbar />
      </div>
      <div className="flex flex-row w-full gap-[20px] px-[10px] md:px-[150px]">
        <div className="w-full md:w-1/2">
          <h1 className="text-[18px] font-[700] w-[150px] border-b-2 border-blue-500 uppercase">
            Contact Us
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          Ready to experience personalized pharmacy care? Get in touch with us
          today to make an appointment or learn more about our services. Your
          health and well-being are our top priorities.
        </div>
      </div>
      <div className="px-[10px] md:px-[100px] flex flex-col items-center lg:flex-row gap-[20px] w-full">
        <div className="flex flex-col gap-[10px] items-start py-10 w-full lg:w-1/2  md:px-20">
          <Form />
        </div>

        <div className="w-full lg:w-1/2 py-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d379.6243736190742!2d30.088920513909457!3d-2.1424502555925673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1709250601014!5m2!1sen!2srw"
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
          <div>
            <FaPhone size={25} color="darkblue" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span>Phone</span>
            <span>0675234767</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

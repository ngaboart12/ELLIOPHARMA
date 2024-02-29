import React from "react";
import Image from "next/image"

import { LiaBuromobelexperte } from "react-icons/lia";


const WhychooseUs = () => {
  return (
    <div className="px-[10px] md:px-[100px] flex flex-col gap-[20px] w-full py-10">
      <div className="w-full flex flex-col md:flex-row gap-[20px] justify-between">
        <h1 className="text-[18px] font-[800] uppercase text-center md:text-start">Why <span className="text-blue-600"> Choose</span> Us</h1>
        <div className="w-full md:w-1/2">

        <span className=" text-center">
          Loremsss, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          tenetur a consequatur quidem mollitia minima delectus eum suscipit
          debitis voluptatum id asperiores, necessitatibus vel ipsam saepe aut
          consequuntur praesentium beatae.
        </span>
        </div>
      </div>
      <div className="grid gap-x-[70px] grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center border gap-[10px] p-[20px] py-[40px] hover:scale-105 transition-all hover:bg-[#015bb4] hover:text-white">
            <div className="w-14 h-14 flex items-center justify-center  rounded-full bg-white">
              <LiaBuromobelexperte color="violet" size={40} />
            </div>
            <div className="flex flex-col gap-[20px] items-center">
              <h1 className="text-[18px] font-[800]">Expert Pharmacists</h1>
              <span className="text-center text-[#acacac] font-[400]">
                Receive personalized guidance from our team of experienced and
                knowledgeable pharmacists dedicated to your health and
                well-being.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center border gap-[10px] p-[20px] py-[40px] hover:scale-105 transition-all hover:bg-[#015bb4] hover:text-white">
            <div className="w-14 h-14 flex items-center justify-center  rounded-full bg-white">
              <LiaBuromobelexperte color="violet" size={40} />
            </div>
            <div className="flex flex-col gap-[20px] items-center">
              <h1 className="text-[18px] font-[800]">Medication Delivery</h1>
              <span className="text-center text-[#acacac] font-[400]">
                Enjoy the convenience of doorstep delivery for your prescribed
                medications, ensuring a hassle-free experience for our valued
                customers.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center border gap-[10px] p-[20px] py-[40px] hover:scale-105 transition-all hover:bg-[#015bb4] hover:text-white">
            <div className="w-14 h-14 flex items-center justify-center  rounded-full bg-white">
              <LiaBuromobelexperte color="violet" size={40} />
            </div>
            <div className="flex flex-col gap-[20px] items-center">
              <h1 className="text-[18px] font-[800]">
                Customized Wellness Plans
              </h1>
              <span className="text-center text-[#acacac] font-[400]">
                Tailored wellness plans designed to meet your specific health
                goals, providing a holistic approach to your overall well-being.
              </span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default WhychooseUs;

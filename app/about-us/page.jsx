import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";

export const metadata = {
  title: "Elliopharma -about us",
  description: "Generated",
};

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-[20px] w-full">
      <div className="px-[10px] md:px-[100px]">
   

        <Navbar color={`white`} back={`white`} />
      </div>
      <div className=" px-[10px] md:px-[100px]  flex flex-col lg:flex-row gap-[10px] w-full py-20">
        <div className="flex flex-col w-full lg:w-1/2 gap-[20px]">
          <h1 className="p-2 max-w-[100px] text-white bg-blueColor">
            About us
          </h1>
          <span className="text-[20px] max-w-[300px] text-blueColor font-[800] leading-6 uppercase">
            Second Abundantly Move That Cattle Perform Appen Land
          </span>
          <span>
            Give their their without moving were stars called so divide in
            female be moving night may fish him Give their their without moving
            were stars called so divide female be moving night may fish him own
            male vreated great Give their their without moving were. Stars
            called so divide female moving night may fish him own male created
            great opportunity deal.
          </span>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <Image alt="photo"
            src="/image/first.jpg"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>
      </div>

      <div className="flex flex-col px-[10px] md:px-[100px]">
        <div className=" bg-[#015bb4]   rounded-md grid grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-center border-r py-8">
            <h1 className="text-[18px] font-[800] text-white">7 Years</h1>
            <span className="text-[16px] text-white/80">Exprience</span>
          </div>
          <div className="flex flex-col items-center border-r py-8">
            <h1 className="text-[18px] font-[800] text-white">1000+</h1>
            <span className="text-[16px] text-white/80">Happy Client</span>
          </div>
          <div className="flex flex-col items-center border-r py-8">
            <h1 className="text-[18px] font-[800] text-white">4 Years</h1>
            <span className="text-[16px] text-white/80">Exprience</span>
          </div>
          <div className="flex flex-col items-center border-r py-8">
            <h1 className="text-[18px] font-[800] text-white">4 Years</h1>
            <span className="text-[16px] text-white/80">Exprience</span>
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="flex flex-col gap-[40px] w-full items-center md:items-start px-[10px] md:px-[100px] py-10">
        <div className="flex flex-col ">
          <h1 className="text-[24px] font-[800]">Our Team</h1>
          <span>
            inventore facilis blanditiis dolor omnis pariatur, soluta nobis!
          </span>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
       
          <div className="flex flex-col gap-[10px]">
            <div className="w-full h-[50vh] ">
              <Image alt="photo"
                src={`/image/diane.jpg`}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-t-[8px] "
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[18px] font-[600]">Munezero Yvette Diane</h1>
              <span className="text-[14px] text-gray-500">Managing Director and Responsible Pharmacist.</span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="w-full h-[50vh]  ">
              <Image alt="photo"
                src={`/image/woman2.jpg`}
                width={500}
                height={500}
                className="w-full h-full  object-cover rounded-t-[8px]"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[18px] font-[600]">Dr Mugeni Adeline</h1>
              <span className="text-[16px] text-gray-500"></span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="w-full h-[50vh] ">
              <Image alt="photo"
                src={`/image/man1.jpg`}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-t-[8px]"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[18px] font-[600]">Kagamba Christophe</h1>
              <span className="text-[16px] text-gray-500"></span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="w-full h-[50vh]  ">
              <Image alt="photo"
                src={`/image/man2.jpg`}
                width={500}
                height={500}
                className="w-full h-full  object-cover rounded-t-[8px]"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[18px] font-[600]">Ntabanganyimana Valense</h1>
              <span className="text-[16px] text-gray-500"></span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

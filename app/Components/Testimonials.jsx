"use client";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";




function Testimonials() {
  const testimon = [
    {
      profile: "/image/profile1.jpg",
      name: "KAGABO Sharon",
      type: "student",
      comment:
        "For me, working with your educational consultant changed everything. Their advice and assistance were quite helpful to me during my academic career. I liked that they were always problem-solving and that I never felt guilty for whatever difficulties I encountered. I successfully and confidently made my way through my academics because of their knowledge.",
    },
    {
        profile: "/image/profile2.jpg",
      name: "SIBOMANA Christophe",
      type: "student",
      comment:
        "Absolutely! It's a terrific idea to provide a testimonial to an educational consultant encourage them to keep working hard and to show how their efforts have positively influenced many individuals. It might serve as a source of encouragement and gratitude for their commitment to assisting others.",
    },
    {
        profile: "/image/profile1.jpg",
      name: "IRASUBIZA Germain",
      type: "student",
      comment:
        "I have the utmost gratitude for BrightForth advice and assistance. Their expertise and dedication were crucial in assisting me in getting accepted into the faculty I wanted to attend. Their persistent dedication to assisting students in achieving their educational goals is much appreciated. I'm grateful that you have had such a big impact on my academic career.",
    },
  ];
  return (
    <div className="w-full relative bg-blueBack flex  justify-center mb-10 px-[10px] md:pl-[100px]  ">
     
      <div
      
        className=" z-40 max-w-7xl flex flex-col gap-4 md:gap-10 relative w-full justify-center items-start   py-[20px] px-[1px] md:py-[50px]"
      >
        <h1 className="text-[24px] text-black   font-bold">
          Testimonails
        </h1>

        <div className="w-full md:w-[90%] p-4 z-40">
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            
           {testimon.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-4 md:flex-row ">
               
              <div className="flex flex-col md:flex-row items-start gap-4 w-full  p-6 rounded-lg">
                <div className="w-[130px] h-[100px] ">
                  <Image
                   alt="profile"
                    src={item.profile}
                    width={500}
                    height={500}
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <div className="flex flex-col">
                <p className="text-[14px] font-[300] line-clamp-4 text-black max-w-[400px]">
                    {item.comment}
                  </p>
                  <div className="flex flex-col ">
                    <span className="text-black text-[18px] font-medium">
                      {item.name}
                    </span>
                   
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination absolute bottom-4 flex justify-center w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

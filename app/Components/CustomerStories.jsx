"use client";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const CustomerStories = () => {
  const testimon = [
    {
      profile: "/image/woman2.jpg",
      name: "Dr. Mugeni Adeline ",
      place: "Bugesera, Rwanda",
      type: "",
      comment:
        "Working with Elliopharma changed everything for me. Their advice and assistance were quite helpful during my academic career.",
    },
    {
      profile: "/image/diane.jpg",
      name: "Munezero Yvette Diane",
      place: "Bugesera, Rwanda",
      type: "",
      comment:
        "It is a terrific idea to provide a testimonial to a health consultant to encourage them to keep working hard.",
    },
    {
      profile: "/image/man2.jpg",
      name: "Ntabanganyimana Valense",
      place: "Bugesera, Rwanda",
      type: "",
      comment:
        "I have the utmost gratitude for Elliopharma's advice and assistance. Their expertise and dedication were crucial in assisting me in getting accepted into the faculty I wanted to attend.",
    },
  ];
  return (
    <div className="px-[10px] md:px-[100px] py-[50px] flex flex-col bg-[#F0F7FF]">
      <div className="flex flex-col sm:flex-row items-center w-full">
        <div className="flex flex-col items-center md:items-start  gap-[10px] w-full sm:w-1/2">
          <div className="p-[10px] mx-auto md:mx-0 w-[170px] bg-white justify-center md:justify-start">
            <span className="text-[18px] font-[800] text-[#015BB4]">
              Customer Stories
            </span>
          </div>
          <h1 className="text-[28px] text-center md:text-start max-w-[300px] leading-8 font-[800] text-[#015BB4]">
            Discover the Impact We have Made
          </h1>
        </div>
        <div className="w-full text-center md:text-start sm:w-1/2">
          <span>
            Discover the transformative impact we have made on individuals in the
            Bugesera community and beyond
          </span>
        </div>
      </div>

      <div className="w-full md:w-[100%] py-4">
        <Swiper
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
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
              <div className="flex bg-white rounded-[24px] min-h-[40vh]  flex-col gap-4 md:flex-row ">
                <div className="flex flex-col md:flex-row items-center gap-4 w-full  p-6 rounded-lg">
                  <div className="w-[130px] h-[100px] ">
                    <Image
                      alt="profile"
                      src={item.profile}
                      width={500}
                      height={500}
                      className="w-full h-full rounded-md object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center md:items-start gap-[5px]">
                    <div className="flex items-center md:items-start flex-col ">
                      <span className="text-black text-[18px] font-[800]">
                        {item.name}
                      </span>
                      <span className="text-[#9D9D9D]">{item.type}</span>
                    </div>
                    <p className="text-[14px] text-center md:text-start font-[300] line-clamp-4 text-black max-w-[400px]">
                      {item.comment}
                    </p>
                    <div className="flex flex-row items-center gap-[4px]">
                      <div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.53259 8.65936C3.5446 5.12554 6.41906 2.27054 9.95288 2.28251C13.4867 2.29455 16.3417 5.16901 16.3297 8.70284V8.7753C16.2862 11.0724 15.0036 13.1956 13.4311 14.855C12.5319 15.7889 11.5276 16.6156 10.4384 17.3188C10.1471 17.5707 9.71514 17.5707 9.4239 17.3188C7.80015 16.2619 6.37504 14.9275 5.21375 13.3767C4.17872 12.0244 3.59106 10.3831 3.53259 8.6811V8.65936Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            opacity="0.4"
                            d="M9.9311 10.8334C11.0637 10.8334 11.9818 9.91524 11.9818 8.78266C11.9818 7.65007 11.0637 6.73193 9.9311 6.73193C8.79851 6.73193 7.88037 7.65007 7.88037 8.78266C7.88037 9.91524 8.79851 10.8334 9.9311 10.8334Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-[#9D9D9D]">{item.place}</span>
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
  );
};

export default CustomerStories;

import React from "react";
import blogsData from "../../public/blogs.json";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className="px-[10px] md:px-[100px] py-10 flex flex-col gap-[10px] items-center">
      <div className="p-[10px] px-[20px] bg-[#00737D]/20">
        <span className="font-[800] text-[#00737D]">Programs</span>
      </div>
      <h1 className="text-[24px] font-[800] max-w-[300px] text-center leading-6 text-[#015BB4]">
        update about society programs
      </h1>
      <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-[20px] py-10">
        {blogsData.slice(0,4).map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-[10px]">
              <div className="h-[30vh]">
                <Image
                  src={item.image}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[14px] text-[#797C7F]">{item.date}</span>
                <h1 className="text-[18px] font-[500] text-black leading-6">
                  {item.title}
                </h1>
                <span className="text-[14px] text-[#797C7F] line-clamp-4">
                  {item.disc}
                </span>
                <a
                  href={`/singleblog?id=${item.id}`}
                  className=" duration-1000 transition-all hover:scale-105  text-[#015BB4] flex flex-row items-center gap-[10px]"
                >
                  <span>Read More</span>
                  <span>
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 7.22559L0.75 7.22559"
                        stroke="#015BB4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.7002 1.201L15.7502 7.225L9.7002 13.25"
                        stroke="#015BB4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Footer from "../Components/Footer";
import blogsData from "../../public/blogs.json";


export const metadata = {
  title: "Ellophrama - Blog",
  description: "ellopgrama blog page",
};

const Blog = () => {
  const blogs = [
    {
      image: (
        <Image
          src="/image/first.jpg"
          width={300}
          height={300}
          className="w-full rounded-[4px] h-full object-cover "
        />
      ),
      title: "Understanding Blood Pressure: What You Need to Know",
      disc: "High blood pressure, or hypertension, is a common but serious health condition that can lead to heart disease, stroke, and other complications. In this blog post, we break down the basics of blood pressure, including what the numbers mean, risk factors, and lifestyle changes to help manage and prevent hypertension.      ",
    },
    {
      image: (
        <Image
          src="/image/fourth.jpg"
          width={300}
          height={300}
          className="w-full rounded-[4px] h-full object-cover "
        />
      ),
      title: "Understanding Blood Pressure: What You Need to Know",
      disc: "High blood pressure, or hypertension, is a common but serious health condition that can lead to heart disease, stroke, and other complications. In this blog post, we break down the basics of blood pressure, including what the numbers mean, risk factors, and lifestyle changes to help manage and prevent hypertension.      ",
    },
    {
      image: (
        <Image
          src="/image/second.jpg"
          width={300}
          height={300}
          className="w-full rounded-[4px] h-full object-cover "
        />
      ),
      title: "Understanding Blood Pressure: What You Need to Know",
      disc: "High blood pressure, or hypertension, is a common but serious health condition that can lead to heart disease, stroke, and other complications. In this blog post, we break down the basics of blood pressure, including what the numbers mean, risk factors, and lifestyle changes to help manage and prevent hypertension.      ",
    },
    {
      image: (
        <Image
          src="/image/third.jpg"
          width={300}
          height={300}
          className="w-full rounded-[4px] h-full object-cover "
        />
      ),
      title: "Understanding Blood Pressure: What You Need to Know",
      disc: "High blood pressure, or hypertension, is a common but serious health condition that can lead to heart disease, stroke, and other complications. In this blog post, we break down the basics of blood pressure, including what the numbers mean, risk factors, and lifestyle changes to help manage and prevent hypertension.      ",
    },
    {
      image: (
        <Image
          src="/image/team.jpg"
          width={300}
          height={300}
          className="w-full rounded-[4px] h-full object-cover "
        />
      ),
      title: "Understanding Blood Pressure: What You Need to Know",
      disc: "High blood pressure, or hypertension, is a common but serious health condition that can lead to heart disease, stroke, and other complications. In this blog post, we break down the basics of blood pressure, including what the numbers mean, risk factors, and lifestyle changes to help manage and prevent hypertension.      ",
    },
    {
      image: (
        <Image
          src="/image/fith.jpg"
          width={300}
          height={300}
          className="w-full rounded-[4px] h-full object-cover "
        />
      ),
      title: "Understanding Blood Pressure: What You Need to Know",
      disc: "High blood pressure, or hypertension, is a common but serious health condition that can lead to heart disease, stroke, and other complications. In this blog post, we break down the basics of blood pressure, including what the numbers mean, risk factors, and lifestyle changes to help manage and prevent hypertension.      ",
    },
  
  ];
  return (
    <div className=" w-screen bg-white overflow-x-hidden">
      <div className=" px-[10px] md:px-[100px]">
      

        <Navbar color={"white"} back="white" />
      </div>
      <div className="flex  flex-col gap-[10px] w-full items-center px-[10px] md:px-[100px] py-20">
        <h1 className="text-[32px] text-blue-500 font-[700]">
          Health Insights Blog
        </h1>
        <span className="max-w-[500px] text-black/60 leading-5 font-[300] text-center">
          Welcome to Health Insights Blog by Elliopharma. Managing your
          medications effectively is crucial for maintaining your health and
          well-being. Whether you are juggling multiple prescriptions or just
          starting a new medication regimen, staying organized and informed can
          help you avoid potential complications and achieve the best possible
          outcomes. In this blog, we share valuable insights, tips, and
          information to help you manage your medications with confidence and
          ease.
        </span>
        {/* <div className="flex flex-row gap-[10px]">
          <div className="p-2 cursor-pointer bg-blue-500 text-white w-[100px] flex flex-row items-center justify-center">
            <span>Recent</span>
          </div>
          <div className="p-2 cursor-pointer  w-[100px] flex flex-row items-center justify-center">
            <span>Doned</span>
          </div>
        </div> */}
        <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-[20px] py-10">
        {blogsData.map((item, index) => {
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
                  href={`/singleblog/${item.id}`}
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
      <Footer />
    </div>
  );
};

export default Blog;

import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Footer from "../Components/Footer";

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
        <Navbar color={"black"} back="black" />
      </div>
      <div className="flex  flex-col gap-[10px] w-full items-center px-[10px] md:px-[100px] py-10">
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
        <div className=" grid bg-gradient-to-r grid-cols-1 md:grid-cols-3 gap-[50px] w-full py-4 mt-4">
          {blogs.map((item, index) => {
            return (
              <div
                key={index}
                className=" p-4 w-full flex flex-col gap-[4px]  rounded-[12px] py-[20px]"
              >
                <div className="h-[25vh] w-full   ">
                 {item.image}
                </div>
                <div className="py-1">
                  <span className="text-black/60 text-[14px] ">
                    17 june 2024
                  </span>
                </div>
                <h1 className="text-[16px] font-[600]">{item.title}</h1>
                <span className="text-[14px] text-black/40 leading-5 line-clamp-3">
                  {item.disc}
                </span>
                <a href="" className="mr-auto text-[12px] text-blue-600">
                  Read More
                </a>
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

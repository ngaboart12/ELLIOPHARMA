import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full px-[10px] md:px-[100px] py-10">
      <div className="flex flex-col-reverse lg:flex-row w-full  justify-between">
        <div className="w-full md:w-1/2 py-10 lg:pr-20">
          <Image
            src="/image/first.jpg"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-[4px]"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start py-10 gap-[20px]">
          <h1 className="text-[24px] font-[800] text-blue-600">About Us</h1>
          <span className="text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            necessitatibus aut maiores voluptatibus non velit, fugiat rerum
            ducimus nobis architecto veritatis accusamus exercitationem sequi,
            dolorum beatae eum accusantium est minus.
          </span>
          <a href="/about-us">

          <button className="p-4 hover:opacity-80 transition-all bg-blue-600 text-white w-[200px] rounded-[8px] font-[300]">Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

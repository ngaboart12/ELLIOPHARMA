import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full px-[10px] md:px-[100px] py-10">
      <div className="flex flex-col-reverse lg:flex-row w-full  justify-between">
        <div className="w-full h-[90vh] md:w-1/2 py-10 lg:pr-20">
          <Image
            src="/image/second.jpg"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-[4px]"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start py-10 gap-[20px]">
          <h1 className="text-[24px] font-[800] text-blue-600">About Us</h1>
          <span className="text-center md:text-start">
            Elliopharma Pharmaceuticals is a trusted provider of high-quality
            pharmaceutical services, dedicated to serving the Bugesera community
            and the people of Rwanda. Established in 2016, Elliopharma has been
            a cornerstone of healthcare excellence in Rwandas Bugesera District
            for over seven years. Our commitment to delivering personalized
            pharmacy services with integrity, compassion, and expertise has
            earned us the trust of our customers and the reputation as a leader
            in the pharmaceutical industry. At Elliopharma Pharmaceuticals, we
            prioritize the well-being of our community by providing tailored
            wellness solutions and convenient access to essential medications.
            With a focus on excellence and a dedication to serving our
            customers, we strive to make a meaningful difference in the lives of
            those we serve.
          </span>
          <div className="flex flex-row items-center gap-[40px]">
            <div className="flex flex-col gap-[4px]">
              <h1 className="text-[20px] font-[700]">7+ years</h1>
              <span className="text-[16px]">Exprience</span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <h1 className="text-[20px] font-[700]">400+ </h1>
              <span className="text-[16px]">Served Customers</span>
            </div>
          </div>
          <a href="/about-us">
            <button className="p-4 hover:opacity-80 transition-all  bg-buttonBack text-white w-[200px] rounded-[16px] font-[300]">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

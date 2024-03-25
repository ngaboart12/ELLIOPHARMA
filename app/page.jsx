import Image from "next/image";
import { FaTablets } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { TbFirstAidKit } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { TbVaccine } from "react-icons/tb";

import { MdOutlineMedicationLiquid } from "react-icons/md";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import WhychooseUs from "./Components/WhychooseUs";
import Form from "./Components/Form";
import Unlock from "./Components/Unlock";
import CustomerStories from "./Components/CustomerStories";
import Blogs from "./Components/Blogs";
export const metadata = {
  title: "Ellophrama - Home",
  description: "ellophran Home",
};

export default function Home() {
  return (
    <main className="overflow-x-hidden  ">
      <div className="w-full px-[10px] relative  md:px-[100px] justify-center flex bg-gradient-to-tr  min-h-[100vh]">
        <div className="w-full h-full bg-black/90 absolute z-20"></div>
        <div className="w-full h-full absolute z-10">
          <Image
            src="/image/unlock.jpg"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full max-w-7xl flex flex-col gap-[20px] z-20">
          <div className="flex flex-col">
            {/* <div className="flex flex-row items-center gap-[10px] p-2">
              <span className="text-[14px] text-white">Tel:+25078688704</span>
              <span className="text-[14px] text-white">Email:  <a href="">elliopharma10@gmail.com</a> </span>
            </div> */}
            <div>
             
            </div>

            <Navbar color="white" />
          </div>
          <div className="flex h-full flex-col lg:flex-row justify-center md:items-center   gap-[40px]  ">
            <div className="flex items-center lg:items-start flex-col  p-[10px]  item-start">
              <h1 className="text-[24px] text-center lg:text-start  font-[800] text-white leading-[50px]  ">
                Welcome to Elliopharma
              </h1>
              <span className="text-white font-[800] text-[40px] text-center lg:text-start leading-10   max-w-[800px]">
                we are committed <br /> to providing exceptional pharmaceutical
                services to our community.
              </span>
              <div className="flex flex-col md:flex-row gap-[20px] items-center py-[20px]">
                <a
                  href="/contact"
                  className="px-[60px] rounded-[16px] bg-buttonBack transition-all  py-[14px]  text-[14px] text-white font-[300]  border-[1px] border-white/40"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] items-center text-[20px] w-full py-10 px-[10px] md:px-[100px]">
        <h1 className="text-[#5e5e5e] max-w-[300px] text-center text-[18px] font-[700]">
          Trust By Beloved Partners and Customers
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[10px] items-center  w-full">
          <div className="w-[100px] p-2  rounded-[4px]">
            <Image
              src="/image/RSSB.jpg"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100px] p-2  rounded-[4px]">
            <Image
              src="/image/mmi2.png"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[100px] p-2  rounded-[4px]">
            <Image
              src="/image/sanlam.png"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100px] p-2  rounded-[4px]">
            <Image
              src="/image/minubumwe.png"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100px] p-2  rounded-[4px]">
            <Image
              src="/image/bdmi.png"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100px] p-2  rounded-[4px]">
            <Image
              src="/image/UZIMA.png"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100px] p-2  rounded-[4px]">
            <Image
              src="/image/ASA.png"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100px] p-2  rounded-[4px]">
            <Image
              src="/image/itm.jpg"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <About />

      <Unlock />

      <div className="px-[10px] md:px-[100px] bg-gradient-to-tr items-center md:items-start  w-full  flex flex-col  gap-[40px] pb-10">
        <h1 className="text-[32px] font-[700] text-blueColor">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px] gap-y-[40px]">
          <div className="flex flex-col items-center md:items-start gap-[10px] w-full">
            <div className="w-14 h-14  flex items-center justify-center border-[1px] border-blueColor  rounded-full">
              <FaTablets size={30} color="#015BB4" />
            </div>
            <h1 className="text-[18px] font-[700] text-blueColor">
              Medication Dispensing
            </h1>
            <span className="text-black text-center md:text-start font-[300]">
              We specialize in accurate and efficient dispensing of prescribed
              medications, ensuring that patients receive the precise treatments
              tailored to their health needs. Our trained pharmacists
              meticulously handle each prescription, guaranteeing the correct
              dosage and medication type to promote optimal health outcomes
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[10px] w-full">
            <div className="w-14 h-14 flex items-center justify-center bg-blueColor/40 rounded-full">
              <FaUserDoctor size={30} color="#015BB4" />
            </div>
            <h1 className="text-[18px] font-[700] text-blueColor">
              Health Consultation
            </h1>
            <span className="text-black text-center md:text-start  font-[300]">
              Receive personalized advice from our experienced pharmacists
              regarding medication usage, potential side effects, and any
              general health inquiries you may have. Our pharmacists take the
              time to understand your unique health concerns and provide
              tailored recommendations to support your well-being.
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[10px] w-full">
            <div className="w-14 h-14 flex items-center justify-center border  rounded-full">
              <TbFirstAidKit size={30} color="white" />
            </div>
            <h1 className="text-[18px] font-[700] text-blueColor">
              First Aid Supplies
            </h1>
            <span className="text-black text-center md:text-start  font-[300]">
              Access high-quality first aid essentials for addressing minor
              injuries and emergencies promptly. Our range of first aid products
              ensures that you are equipped with the necessary supplies to
              handle unexpected situations effectively, promoting safety and
              peace of mind.
            </span>
          </div>
          {/* <div className="flex flex-col items-center md:items-start gap-[10px] max-w-[450px]">
            <div className="w-14 h-14 flex items-center justify-center bg-blueColor/40 rounded-full">
              <FaHeartbeat size={30} color="#015BB4" />
            </div>
            <h1 className="text-[18px] font-[700] text-blueColor">
              Heart Health Monitoring
            </h1>
            <span className="text-black text-center md:text-start  font-[300]">
              Take proactive steps towards maintaining heart health with our
              regular blood pressure checks and monitoring services. Our skilled
              professionals provide comprehensive assessments to identify
              potential cardiovascular issues early, empowering you to
              prioritize your heart health and well-being.
            </span>
          </div> */}
          {/* <div className="flex flex-col items-center md:items-start gap-[10px] max-w-[450px]">
            <div className="w-14 h-14 flex items-center justify-center border  rounded-full">
              <TbVaccine size={30} color="white" />
            </div>
            <h1 className="text-[18px] font-[700] text-blueColor">
              Vaccination Services
            </h1>
            <span className="text-black text-center md:text-start  font-[300]">
              Ensure protection against various diseases with our convenient and
              reliable vaccination services. Stay up-to-date on essential
              immunizations, administered by trained healthcare professionals in
              a safe and comfortable environment, safeguarding your health and
              that of your loved ones.
            </span>
          </div> */}
          <div className="flex flex-col items-center md:items-start gap-[10px] w-full">
            <div className="w-14 h-14 flex items-center justify-center bg-blueColor/40 rounded-full">
              <MdOutlineMedicationLiquid size={30} color="#015BB4" />
            </div>
            <h1 className="text-[18px] font-[700] text-blueColor">
              Medication Counseling
            </h1>
            <span className="text-black text-center md:text-start  font-[300]">
              Benefit from in-depth counseling sessions on medication usage,
              potential interactions, and lifestyle adjustments aimed at
              optimizing treatment outcomes. Our pharmacists offer comprehensive
              guidance and support, empowering you to make informed decisions
              regarding your medication regimen for improved health and quality
              of life.
            </span>
          </div>
        </div>
      </div>

      <CustomerStories />

      <Blogs />

      <div className="py-10 gap-[40px] flex items-center md:items-start flex-col px-[10px] md:px-[100px] ">
        <h1 className="text-[24px] font-[800] text-[#015bb4]">Get In Touch</h1>
        <div className="w-full flex flex-col md:flex-row gap-[10px]">
          <div className="w-full lg:w-1/2 flex flex-col gap-[10px]">
            <span className="text-[18px] font-[500]">Our Schedule</span>
            <div className="flex flex-row gap-[20px] items-center">
              <div className="flex flex-col gap-[1px]">
                <span className="text-[16px] font-[300]">Monday-Friday</span>
                <span>24 Hours</span>
              </div>
              <div className="flex flex-col gap-[1px]">
                <span className="text-[16px] font-[300]">Saturday-Sunday</span>
                <span>24 Hours</span>
              </div>
            </div>
            <div className="w-full py-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d379.6243736190742!2d30.088920513909457!3d-2.1424502555925673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1709250601014!5m2!1sen!2srw"
                width="500"
                height="250"
                className="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-10">
            <Form />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

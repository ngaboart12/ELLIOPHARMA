import Image from "next/image";import { FaTablets } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { TbFirstAidKit } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { TbVaccine } from "react-icons/tb";

import { MdOutlineMedicationLiquid } from "react-icons/md";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About"
import WhychooseUs from "./Components/WhychooseUs"
export const metadata = {
  title: "Ellophrama - Home",
  description: "ellophran Home",
};


export default function Home() {
  return (
    <main className="overflow-x-hidden  ">
      
      <div className="w-full px-[10px] relative  md:px-[100px] justify-center flex bg-gradient-to-tr  from-background to-[#015bb4] min-h-[100vh]">
        <div className="w-full h-full absolute z-10 opacity-[3%] ">
          <Image src="/image/hero.jpg" width={1000} height={1000} className="w-full h-full object-cover"  />
        </div>
        <div className="w-full max-w-7xl flex flex-col gap-[20px] z-20">
         <Navbar color="white"/>
          <div className="flex flex-col lg:flex-row items-center  gap-[40px] py-10 ">
            <div className="flex items-center lg:items-start flex-col gap-[20px] p-[10px] w-full lg:w-1/2 item-start">
              <h1 className="text-[32px] text-center lg:text-start md:text-[48px] font-[800] text-white leading-[50px] max-w-[550px] ">
                Making Health Care Better Together
              </h1>
              <span className="text-[#c5c5c5] text-center lg:text-start font-[300]  max-w-[600px]">
                Also you dry creeping beast multiply fourth abundantly our itsel
                signs bring our. Won form living. Whose dry you seasons divide
                given gathering great in whose you'll greater let livein form
                beast sinthete better together these place absolute right.
              </span>
              <div className="flex flex-col md:flex-row gap-[20px] items-center">
                <a
                  href=""
                  className="px-[20px] hover:opacity-80 transition-all  py-[18px] rounded-md text-[14px] text-white font-[300]  bg-blueColor"
                >
                  Make An Appointment
                </a>
                <a
                  href="/contact"
                  className="px-[50px] hover:bg-black/40 transition-all  py-[18px] rounded-md text-[14px] text-white font-[300]  border-[1px] border-white/40"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="flex relative p-10 lg:p-4 flex-col gap-[20px]  w-full lg:w-1/2 item-start hover:scale-x-110 transition-all duration-700">
              <div className="p-6 py-[10px] bg-[#015bb4]/40 backdrop-blur w-[120px] hidden md:flex rounded-md  top-[60px] absolute right-[-10px]">
                <span className="text-white font-[600]">3 Years of <span className="font-[200]">experience</span> </span>
              </div>
              <div className="p-6 py-[10px] bg-[#ef40b2]/40 backdrop-blur w-[120px] hidden md:flex rounded-md bottom-[60px]  absolute right-[-10px]">
                <span className="text-white font-[600]">3 Years of <span className="font-[200]">experience</span> </span>
              </div>
              <div className="w-[150px] py-[14px] px-[20px] bg-[#34c5d8]/40 backdrop-blur hidden md:flex rounded-md bottom-[150px]  absolute left-[-10px]">
                <span className="text-white font-[600]">3 Years of <span className="font-[200]">experience</span> </span>
              </div>
              <Image src="/image/first.jpg" width={1000} height={1000} className="w-full h-full object-cover rounded-md   -z-10" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] items-center text-[20px] w-full py-10 px-[10px] md:px-[100px]">
        <h1 className="text-[#5e5e5e] max-w-[300px] text-center text-[18px] font-[700]">
          Trust By Beloved Partners and Customers
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] items-center  w-full">
          <div className="w-[100px] p-2  rounded-[4px]">
            <Image
              src="/image/MMI.png"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
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
              src="/image/sanlam.png"
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
        </div>
      </div>
      <About/>

      <WhychooseUs/>
      <div className="px-[10px] bg-gradient-to-tr items-center md:items-start from-background to-[#015bb4] w-full md:px-[100px] flex flex-col  gap-[40px] py-20">
        <h1 className="text-[32px] font-[700] text-white">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] gap-y-[40px]">
          <div className="flex flex-col items-center md:items-start gap-[10px] max-w-[450px]">
            <div className="w-14 h-14 flex items-center justify-center border  rounded-full">
              <FaTablets size={30} color="white" />
            </div>
            <h1 className="text-[18px] font-[700] text-white">
              Medication Dispensing
            </h1>
            <span className="text-[#b5b5b5] text-center md:text-start font-[300]">
              Accurate and efficient dispensing of prescribed medications to
              ensure patients receive the right treatments for their health
              needs.
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[10px] max-w-[450px]">
            <div className="w-14 h-14 flex items-center justify-center bg-white/80 rounded-full">
              <FaUserDoctor size={30} color="blue" />
            </div>
            <h1 className="text-[18px] font-[700] text-white">
              Health Consultation
            </h1>
            <span className="text-[#b5b5b5] text-center md:text-start  font-[300]">
              Personalized advice from our experienced pharmacists on medication
              usage, potential side effects, and general health queries.
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[10px] max-w-[450px]">
            <div className="w-14 h-14 flex items-center justify-center border  rounded-full">
              <TbFirstAidKit size={30} color="white" />
            </div>
            <h1 className="text-[18px] font-[700] text-white">
              First Aid Supplies
            </h1>
            <span className="text-[#b5b5b5] text-center md:text-start  font-[300]">
              Accessible first aid essentials to address minor injuries and
              emergencies. We provide a range of quality first aid products for
              your safety.
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[10px] max-w-[450px]">
            <div className="w-14 h-14 flex items-center justify-center bg-white/80 rounded-full">
              <FaHeartbeat size={30} color="blue" />
            </div>
            <h1 className="text-[18px] font-[700] text-white">
              Heart Health Monitoring
            </h1>
            <span className="text-[#b5b5b5] text-center md:text-start  font-[300]">
              Regular blood pressure checks and monitoring services to promote
              heart health and prevent cardiovascular issues.
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[10px] max-w-[450px]">
            <div className="w-14 h-14 flex items-center justify-center border  rounded-full">
              <TbVaccine size={30} color="white" />
            </div>
            <h1 className="text-[18px] font-[700] text-white">
              Vaccination Services
            </h1>
            <span className="text-[#b5b5b5] text-center md:text-start  font-[300]">
              Convenient and reliable vaccination services to protect against
              various diseases. Stay up-to-date on essential immunizations.
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[10px] max-w-[450px]">
            <div className="w-14 h-14 flex items-center justify-center bg-white/80 rounded-full">
              <MdOutlineMedicationLiquid size={30} color="blue" />
            </div>
            <h1 className="text-[18px] font-[700] text-white">
              Medication Counseling
            </h1>
            <span className="text-[#b5b5b5] text-center md:text-start  font-[300]">
              In-depth counseling on medication usage, potential interactions,
              and lifestyle adjustments to optimize treatment outcomes.
            </span>
          </div>
        </div>
      </div>


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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15949.983648147767!2d30.114462!3d-1.955021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca701a4aa0af3%3A0xabc56261f30a4e57!2sAmahoro%20National%20Stadium!5e0!3m2!1sen!2srw!4v1708622404667!5m2!1sen!2srw"
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
            <form action="" className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[6px]">
                <span className="text-[18px] font-[300]">Name</span>
                <input
                  type="text"
                  placeholder="Type Your Name"
                  className="border p-4"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <span className="text-[18px] font-[300]">Email</span>
                <input
                  type="text"
                  placeholder="Type Your Email"
                  className="border p-4"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <span className="text-[18px] font-[300]">Message</span>
                <textarea
                  type="text"
                  placeholder="Type Your Message"
                  className="border p-4"
                />
              </div>
              <button className="p-4 w-[200px] bg-blue-600 text-white">
                Contact
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
        
      </div>
    </main>
  );
}

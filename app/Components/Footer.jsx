import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div class="w-full bg-gradient-to-tr px-[10px] md:px-[100px] from-background to-[#015bb4] flex flex-col gap-[10px] p-4">
      <div class="w-full flex flex- md:flex-row gap-[20px] items-center justify-between py-4 border-b border-white/40">
        <div>
          <h1 class="text-[24px] font-[800] text-white">Logo</h1>
        </div>
        <div class="flex text-white flex-row items-center gap-[10px]">
          <span>&copy; 2024 ELLIOPHARMA inc</span>
        </div>
        <div class="flex flex-row gap-[10px]">
          <a href="#" class="p-2  px-3 flex items-center justify-center">
            <i className="text-white">
              <FaXTwitter />
            </i>
          </a>
          <a href="#" class="p-2  px-3 flex items-center justify-center">
            <i class=" text-white">
              <FaInstagram />
            </i>
          </a>
          <a href="#" class="p-2  px-3 flex items-center justify-center">
            <i class=" text-white">
              <CiFacebook />
            </i>
          </a>
        </div>
      </div>
      <div class="  grid grid-cols-1 md:grid-cols-2 py-4 gap-[20px] ">
        <div class="flex flex-col gap-[10px] items-center md:items-start">
          <h1 class="text-[24px] font-[500] text-white">Links</h1>
          <div class="grid grid-cols-2  gap-[20px]">
            <a href="" class="text-white">
              About
            </a>
            <a href="" class="text-white">
              Blog
            </a>
            <a href="" class="text-white">
              Home
            </a>
            <a href="" class="text-white">
              Contact
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center md:items-start gap-[10px] w-full">
          <h1 class="text-[24px] font-[500] text-white">Our Mission</h1>

          <span class="text-[#b5b5b5] font-[300] text-center md:text-start">
            our mission is to provide exceptional care and support to our
            community by delivering personalized pharmacy services with
            integrity, compassion, and expertise.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

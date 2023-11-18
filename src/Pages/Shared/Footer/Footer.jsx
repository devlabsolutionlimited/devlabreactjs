import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa';
import img from "../../../assets/images/logo.svg";
import img1 from "../../../assets/images/mail.png";

const Footer = () => {
  return (
    <footer className="bg-[#081828] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className=" flex flex-col justify-between items-center">
          <img src={img} alt="Logo" className="mr-[300px] h-24 w-24 mb-5" />
          <div className='text-start'>
            <p className=" text-base font-sans leading-7">Making the world a better place through constructing <br /> elegant hierarchies.</p>
            <p className='mt-5 text-lg'>Follow Us:</p>
            <div className="flex mt-4 gap-3">
              <FaFacebook className="mr-2" />
              <FaTwitter className="mr-2" />
              <FaInstagram className="mr-2" />
              <FaLinkedin className="mr-2" />
              <FaYoutube className="mr-2" />
              <FaPinterest />
            </div>
          </div>
        </div>

        {/* 2nd Section */}
        <div>
          <p className="font-bold text-lg font-spartan mb-7 ">Solutions</p>
          <ul className='space-y-4 text-base'>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* 3rd Section */}
        <div>
          <p className="font-bold text-lg font-spartan mb-7">Support</p>
          <ul className='space-y-4 text-base'>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>

        {/* 4th Section */}
        <div>
          <p className="font-bold text-lg font-spartan mb-7">Subscribe</p>
          <p className='leading-7 text-base mb-9'>Subscribe to our newsletter for the latest <br /> updates.</p>
          <div className="mt-4 flex">
            <input type="text" placeholder="Enter your email" className="px-4 rounded-ss-lg rounded-es-lg py-1" />
            <button className="bg-gray-600 text-white px-4 py-3 rounded-se-lg rounded-ee-lg mr-4"><img src={img1} alt="" /></button>
          </div>
        </div>
        
      </div>
      <hr className="lg:w-[1280px] mx-auto mt-20 border-zinc-500" />
      <div className='max-w-7xl mx-auto  flex justify-between mt-9'>
        <h1>© 2023 DavLab Solution - All Rights Reserved</h1>
        <h1 className='text-xm'>Designed and Developed by Naeem Islam</h1>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/Logo.png';
import fbIcon from '../public/images/fbButton.png';
import twitter from '../public/images/xbutton.png';
import Linkdin from '../public/images/in.png';
import email from '../public/images/emaiIcon.png';
import phone from '../public/images/phoneIcon.png';
import location from '../public/images/locationIcon.png';

const Footer = () => {
  return (
    <div className="border-[1px] border-gray-800">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between py-8 lg:py-12 px-6 lg:px-14 xl:px-20 2xl:px-80">
        <Link href="/" className="flex justify-center items-center gap-2 mb-6 lg:mb-0">
          <Image className="lg:h-auto" src={logo} alt="Logo" width={60} priority />
          <h1 className="lg:text-[36px] text-[24px] font-bold">QUNAR</h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-center items-center mb-6 lg:mb-0">
          <Link href="/" className="hover:text-blue-500 transition duration-300">Home</Link>
          <Link href="/services" className="hover:text-blue-500 transition duration-300">Services</Link>
          <Link href="/work" className="hover:text-blue-500 transition duration-300">Work</Link>
          <Link href="/process" className="hover:text-blue-500 transition duration-300">Process</Link>
          <Link href="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link>
        </div>

        {/* Stay Connected */}
        <div className="flex gap-2 justify-center items-center border-[1px] border-gray-800 p-3 rounded-lg hover:shadow-lg transition duration-300">
          <p className="text-[18px] font-medium">Stay Connected</p>
          <Link href="#">
            <Image src={fbIcon} alt="Facebook Icon" className="hover:scale-110 transition duration-300" />
          </Link>
          <Link href="#">
            <Image src={twitter} alt="Twitter Icon" className="hover:scale-110 transition duration-300" />
          </Link>
          <Link href="#">
            <Image src={Linkdin} alt="LinkedIn Icon" className="hover:scale-110 transition duration-300" />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t-[1px] border-gray-800"></div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between py-8 lg:py-12 px-6 lg:px-14 xl:px-20 2xl:px-80">
        {/* Contact Info */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6 lg:mb-0">
          <div className="flex justify-center items-center gap-2">
            <Image src={email} alt="Email Icon" />
            <p>hello@qunar.com</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Image src={phone} alt="Phone Icon" />
            <p>+91 91813 23 2309</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Image src={location} alt="Location Icon" />
            <p>Somewhere in the World</p>
          </div>
        </div>

        {/* Copyright Text */}
        <div>
          <p className="text-[#8F8F8F] text-center lg:text-right">
            © 2024 Qunar. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

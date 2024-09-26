import React from 'react'
import logo from '../public/images/Logo.png';
import Image from 'next/image';

const Banner2 = () => {
  return (
    <div className="container relative overflow-hidden rounded-lg w-full h-[500px] mt-10 mb-10">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      />
      {/* Black overlay to darken the image */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content Section */}
      <div className="relative flex flex-col justify-center items-center mx-auto text-center px-6 md:px-12 lg:px-16 py-10 md:py-16 gap-7">
        {/* Logo */}
        <Image src={logo} alt="logo" />

        {/* Text Section */}
        <div className="xl:w-[896px]">
          <h1 className="font-semibold text-[24px] md:text-[38px] text-white leading-snug md:leading-tight">
            Let us Bring your Ideas to Life in the Digital World.
          </h1>
          <p className="text-[#E6E6E6] text-sm md:text-lg font-normal mt-3 leading-relaxed">
            No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
          </p>
          
        </div>
        <button className='text-black bg-[#8F94FB] px-4 py-3 rounded-lg font-[500] transition duration-300 ease-in-out transform hover:bg-[#6e73f5] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8F94FB] focus:ring-opacity-50 '>Start Project</button>
      </div>
    </div>
  )
}

export default Banner2;

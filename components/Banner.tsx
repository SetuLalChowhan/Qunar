import React from 'react'
interface Details{
  title:string;
  para:string;
}

const Banner = ({title,para}:Details) => {
  return (
    <div className=" container relative overflow-hidden rounded-lg w-full h-[448px]">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      />
      {/* Black overlay to darken the image */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-0">
        <h1 className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-4">
          {title}
        </h1>
        <p className="text-[#E6E6E6] text-sm md:text-base lg:text-lg max-w-[800px]">
         {para}
        </p>
      </div>
    </div>
  )
}

export default Banner;

import Banner from "@/components/Banner";
import Head from "@/components/Head";
import React from "react";
import Image from "next/image";
import ui from "../../public/images/ui.png";
import brand from "../../public/images/branding.png";
import video from "../../public/images/video.png";
import production from "../../public/images/production.png";
import { serviceDetails } from "@/utils/data";
import Banner2 from "@/components/Banner2";

const page = () => {
  return (
    <div>
      <Banner title="Our Services" para=" Discover a full range of digital solutions designed to elevate your brand and drive results. From web design and branding to video promotion and 3D design, our expert team delivers tailored services that meet your unique needs." />
      <div className="container">
        <Head
          title="Services"
          para="Elevate Your Digital Presence with Tailored Solutions That Drive Results"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center border-2 border-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Image className="w-[30px] h-[30px]" src={ui} alt="UI Design" />
              <p className="text-[24px] md:text-[36px]">UI Design</p>
            </div>
            <p className="w-[16px] h-[16px] bg-[#333333] rounded-full"></p>
          </div>
          <div className="flex justify-between items-center border-2 border-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Image className="w-[30px] h-[30px]" src={brand} alt="Branding" />
              <p className="text-[24px] md:text-[36px]">Branding</p>
            </div>
            <p className="w-[16px] h-[16px] bg-[#333333] rounded-full"></p>
          </div>
          <div className="flex justify-between items-center border-2 border-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Image
                className="w-[30px] h-[30px]"
                src={video}
                alt="Motion / 3D"
              />
              <p className="text-[24px] md:text-[36px]">Motion / 3D</p>
            </div>
            <p className="w-[16px] h-[16px] bg-[#333333] rounded-full"></p>
          </div>
          <div className="flex justify-between items-center border-2 border-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Image
                className="w-[30px] h-[30px]"
                src={production}
                alt="Video Production"
              />
              <p className="text-[24px] md:text-[36px]">Video Production</p>
            </div>
            <p className="w-[16px] h-[16px] bg-[#333333] rounded-full"></p>
          </div>
        </div>
        <div className=" mt-10 ">
          <h1 className=" text-[24px] md:text-[48px] font-[500]">Here is what we offer :</h1>
          <div className=" space-y-3 mt-4" >
            {serviceDetails.map((service,index)=>(
              <div key={index} className="xl:w-[1320px] xl:h-[483px] md:px-20 px-10 py-16 border-[1px] border-gray-800 space-y-8 rounded-lg text-justify">
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center gap-3">
                    <Image className="w-[30px] h-[30px] text-[#8F94FB] " src={service.image} alt="icon" />
                    <p className="md:text-[36px] text-[24px] text-[#8F94FB]">{service.title}</p>
                  </div>
                  <div className="w-[15px] h-[15px]  bg-[#8F94FB] rounded-full"></div>
                </div>
                <p className="xl:w-[1096px] xl:h-[280px] md:text-[22px] text-[#8F8F8F]">{service.description}</p>

              </div>
            ))}
          </div>

        </div>
      </div>
      <Banner2/>
    </div>
  );
};

export default page;

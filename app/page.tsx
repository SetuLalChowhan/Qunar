import Image from "next/image";
import zapier from "../public/images/zapier.png";
import spotify from "../public/images/spotify.png";
import zoom from "../public/images/zoom.png";
import slack from "../public/images/slack.png";
import amazon from "../public/images/amazon.png";
import adobe from "../public/images/adobe.png";
import ui from "../public/images/ui.png";
import brand from "../public/images/branding.png";
import video from "../public/images/video.png";
import production from "../public/images/production.png";
import Head from "../components/Head";
import ProcessCard from "@/components/ProcessCard";
import { workProcess } from "@/utils/data";

export default function Home() {
  return (
    <section>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 h-[800px] "
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 h-full w-full bg-black bg-opacity-60">
          <div className="flex flex-col justify-center items-center mt-24 text-center">
            <h1 className="text-[36px] md:text-[48px] lg:text-[68px] font-bold max-w-3xl">
              A Digital Product Studio that will Work
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button className="text-[16px] md:text-[20px] px-6 py-3 bg-[#333333] rounded-lg text-white transition duration-300 ease-in-out transform hover:bg-[#555555] hover:scale-105">
                Our Works
              </button>
              <button className="text-[16px] md:text-[20px] px-6 py-3 bg-[#6e73f5] rounded-lg text-white transition duration-300 ease-in-out transform hover:bg-[#555555] hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-24">
            <h2 className="bg-[#1A1A1A] p-4 rounded-lg text-lg">
              Trusted By 250+ Companies
            </h2>
          </div>
          <div className="lg:w-[1414px] lg:h-[170px] bg-[#1A1A1A] container mt-24 flex-wrap flex justify-center items-center rounded-lg max-w-4x md:mt-2  ">
            <Image
              className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]"
              src={zapier}
              alt="zapier"
            />
            <Image
              className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]"
              src={spotify}
              alt="zapier"
            />
            <Image
              className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]"
              src={zoom}
              alt="zapier"
            />
            <Image
              className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]"
              src={slack}
              alt="zapier"
            />
            <Image
              className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]"
              src={amazon}
              alt="zapier"
            />
            <Image
              className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]"
              src={adobe}
              alt="zapier"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto  max-w-[1320px] h-auto px-8 py-10 mt-10">
        <Head
          title="Services"
          para=" Elevate Your Digital Presence with Tailored Solutions That Drive
      Results"
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
      </div>
      <div className="container lg:w-[1350px] lg:h-[1250px] border-2 border-gray-800 px-8 mt-10">
        <Head
          title="Work Process"
          para="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital "
        />
        <div className="lg:w-[434px] lg:h-[64px] bg-[#333333] rounded-lg text-[22px] p-3">
          Here's an overview of our typical process:
        </div>
        <div className="mt-4 grid grid-cols-1  lg:grid-cols-2  gap-2 ">
          {
            workProcess.map((work,index)=>(
              <ProcessCard key={index} id={work.id} title={work.title} des={work.description} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

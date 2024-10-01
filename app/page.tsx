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
import { cars, workProcess } from "@/utils/data";
import CarCard from "@/components/CarCard";
import Slide from "@/components/Slide";
import FormSubmit from "@/components/FormSubmit";
import { FaQ } from "react-icons/fa6";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <section>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 h-[450px] md:h-[800px] "
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 h-full w-full bg-black bg-opacity-60">
          <div className="flex flex-col justify-center items-center mt-24 text-center">
            <h1 className="text-[36px] md:text-[48px] lg:text-[68px] font-bold max-w-3xl">
              A Digital Product Studio that will Work
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button className="text-[16px] md:text-[20px] px-6 py-3 bg-transparent border-2 border-white rounded-lg text-white transition duration-300 ease-in-out transform hover:bg-white hover:text-[#333333] hover:scale-105">
                Our Works
              </button>

              <button className="text-[16px] md:text-[20px] px-6 py-3 bg-[#6e73f5] rounded-lg text-white transition duration-300 ease-in-out transform hover:bg-[#555555] hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-12 md:mt-24">
            <h2 className="bg-transparent p-4 rounded-lg text-xl md:text-2xl font-bold opacity-70">
              Trusted By 250+ Companies
            </h2>
          </div>
          <div className="w-full container lg:w-[1414px] h-[60px] md:h-[90px] bg-transparent overflow-hidden rounded-lg mt-4 md:mt-[20px]">
            <div className="flex items-center space-x-6 md:space-x-10 animate-slide">
              {[zapier, spotify, zoom, slack, amazon, adobe].map((logo, index) => (
                <Image
                  key={index}
                  className="w-[100px] h-[40px] md:w-[150px] md:h-[65px] lg:w-[200px] lg:h-[85px]"
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                />
              ))}
              {/* Duplicate logos for continuous animation */}
              {[zapier, spotify, zoom, slack, amazon, adobe].map((logo, index) => (
                <Image
                  key={index + 6}
                  className="w-[100px] h-[40px] md:w-[150px] md:h-[65px] lg:w-[200px] lg:h-[85px]"
                  src={logo}
                  alt={`Company logo ${index + 7}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-4  max-w-[1320px] h-auto px-8 py-10 mt-10">
        <Head
          title="Services"
          para=" Elevate Your Digital Presence with Tailored Solutions That Drive
      Results"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-between items-center border-2 border-gray-800 p-4 rounded-lg hover:border-gray-600 transition duration-300 ease-in-out transform hover:scale-105 group">
            <div className="flex items-center gap-4">
              <Image className="w-[30px] h-[30px]" src={ui} alt="UI Design" />
              <p className="text-[24px] md:text-[36px]">UI Design</p>
            </div>
            <p className="w-[16px] h-[16px] bg-[#333333] rounded-full group-hover:bg-[#6e73f5] transition-colors duration-300"></p>
          </div>
          <div className="flex justify-between items-center border-2 border-gray-800 p-4 rounded-lg hover:border-gray-600 transition duration-300 ease-in-out transform hover:scale-105 group">
            <div className="flex items-center gap-4">
              <Image className="w-[30px] h-[30px]" src={brand} alt="Branding" />
              <p className="text-[24px] md:text-[36px]">Branding</p>
            </div>
            <p className="w-[16px] h-[16px] bg-[#333333] rounded-full group-hover:bg-[#6e73f5] transition-colors duration-300"></p>
          </div>
          <div className="flex justify-between items-center border-2 border-gray-800 p-4 rounded-lg hover:border-gray-600 transition duration-300 ease-in-out transform hover:scale-105 group">
            <div className="flex items-center gap-4">
              <Image
                className="w-[30px] h-[30px]"
                src={video}
                alt="Motion / 3D"
              />
              <p className="text-[24px] md:text-[36px]">Motion / 3D</p>
            </div>
            <p className="w-[16px] h-[16px] bg-[#333333] rounded-full group-hover:bg-[#6e73f5] transition-colors duration-300"></p>
          </div>
          <div className="flex justify-between items-center border-2 border-gray-800 p-4 rounded-lg hover:border-gray-600 transition duration-300 ease-in-out transform hover:scale-105 group">
            <div className="flex items-center gap-4">
              <Image
                className="w-[30px] h-[30px]"
                src={production}
                alt="Video Production"
              />
              <p className="text-[24px] md:text-[36px]">Video Production</p>
            </div>
            <p className="w-[16px] h-[16px] bg-[#333333] rounded-full group-hover:bg-[#6e73f5] transition-colors duration-300"></p>
          </div>
        </div>
      </div>
      <div className="container lg:w-[1350px] flex flex-col gap-4  mt-10 ">
        <Head
          title="Work Process"
          para="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital "
        />
        <div className="w-full md:w-[300px] lg:w-[434px] h-auto lg:h-[64px] bg-[#333333] rounded-lg text-[18px] md:text-[20px] lg:text-[22px] p-2 md:p-3">
          Here's an overview of our typical process:
        </div>

        <div className="mt-4 grid grid-cols-1  lg:grid-cols-2  mb-5 ">
          {workProcess.map((work, index) =>
            index <= 3 ? (
              <ProcessCard
                key={index}
                id={work.id}
                title={work.title}
                des={work.description}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="container lg:w-[1350px] mt-10 flex flex-col gap-4">
        <Head
          title="Our Work"
          para="We have The Privilege od Working With a Diverse Range"
        />
        <div className="w-full md:w-[350px] lg:w-[500px] h-auto lg:h-[64px] bg-[#333333] rounded-lg text-[18px] md:text-[20px] lg:text-[22px] p-2 md:p-4">
          Here are some example of our notable works:
        </div>
        <div className="mt-4 grid grid-cols-1  lg:grid-cols-2  gap-4 mb-5 ">
          {cars.map((car, index) =>
            index <= 3 ? (
              <CarCard
                key={index}
                id={car.id}
                image={car.image}
                title={car.title}
                link={car.link}
                details={car.details}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="container lg:w-[1350px] mt-10 flex flex-col gap-4">
        <Head
          title="Trusted Feedback"
          para="Our Clients Love the Results. Here’s What They’re Saying About Qunar"
        />

        <div className="mt-5  ">
          <Slide
            number={3}
            tailwindValue={`md:w-[600px] lg:w-full w-[300px] rounded-md mx-auto`}
          />
        </div>
      </div>
      <div className=" container lg:w-[1596px] mt-10">
        <Head
          title="Contact Us"
          para="Feel free to reach out using the contact form below for any questions or feedback"
        />
        <div className="flex justify-center items-center">
          <FormSubmit />
        </div>
      </div>
      <div className=" container lg:w-[1596px] mt-10">
        <Head
          title="FAQ"
          para="Feel free to reach out using the contact form below for any questions or feedback"
        />
        <div>
          <FaqSection />
        </div>
      </div>
    </section>
  );
}
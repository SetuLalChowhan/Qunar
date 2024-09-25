import Image from "next/image";
import zapier from "../public/images/zapier.png";
import spotify from "../public/images/spotify.png";
import zoom from "../public/images/zoom.png";
import slack from "../public/images/slack.png";
import amazon from "../public/images/amazon.png";
import adobe from "../public/images/adobe.png";

export default function Home() {
  return (
    <section>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12"
        style={{ backgroundImage: "url('/images/hero.jpg')", height: "800px" }}
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
          <div className="lg:w-[1414px] lg:h-[170px] bg-[#1A1A1A] container mt-2 flex-wrap flex justify-center items-center rounded-lg max-w-4x ">
            <Image className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]" src={zapier} alt="zapier" />
            <Image className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]" src={spotify} alt="zapier" />
            <Image className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]" src={zoom} alt="zapier" />
            <Image className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]" src={slack} alt="zapier" />
            <Image className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]" src={amazon} alt="zapier" />
            <Image className=" w-[120px] h-[50px] md:w-[219px] md:h-[90px]" src={adobe} alt="zapier" />
          </div>
        </div>
      </div>
      <div className=" container w-[1320px] h-[470px]">

      </div>
    </section>
  );
}

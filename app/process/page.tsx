import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import Head from "@/components/Head";
import ProcessCard from "@/components/ProcessCard";
import { workProcess } from "@/utils/data";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner
        title="Work Process"
        para="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
      />
      <div className="container mt-10 ">
        <Head title="Work Process" para="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital " />
        <div className="w-full md:w-[300px] lg:w-[434px] h-auto lg:h-[64px] bg-[#333333] rounded-lg text-[18px] md:text-[20px] lg:text-[22px] p-2 md:p-3 mb-10">
          Here's an overview of our typical process:
        </div>
        <div className="mt-4 grid grid-cols-1  lg:grid-cols-2  gap-2 mb-5 ">
          {workProcess.map((work, index) => (
            <ProcessCard
              key={index}
              id={index+1}
              title={work.title}
              des={work.description}
            />
          ))}
        </div>

      </div>
      <Banner2/>
    </div>

  );
};

export default page;

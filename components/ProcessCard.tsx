import React from 'react';

interface Work {
  id: number;
  title: string;
  des: string;
}

const ProcessCard = ({ id, title, des }: Work) => {
  return (
    <div className="xl:w-[675px] xl:h-[450px] mx-auto md:px-16 px-6 py-8 border border-gray-700  shadow-lg bg-[#1a1a1a]">
      {/* ID and Title */}
      <div className="flex items-end mb-6">
        <h1 className="md:text-[150px] font-bold text-[#8F94FB] leading-none sm:text-[100px] text-[80px]">
          0{id}
        </h1>
        <div className="ml-2">
          <p className=" md:text-[30px] text-[24px] font-semibold text-white ">{title}</p>
          <div className="border-t-[1px] border-gray-600 w-full mt-2"></div>
        </div>
      </div>

      {/* Description */}
      <div className="text-[#B0B0B0] md:text-[20px] text-[18px] font-medium text-justify leading-relaxed">
        {des}
      </div>
    </div>
  );
};

export default ProcessCard;

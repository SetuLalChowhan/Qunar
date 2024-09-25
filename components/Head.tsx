import React from 'react';

interface HeadProps {
  title: string;
  para: string;
}

const Head = ({ title, para }: HeadProps) => {
  return (
    <div className="py-2 md:py-4">
      <div className="flex gap-3 items-center">
        <p className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] bg-[#6e73f5] rounded-full"></p>
        <p className="text-[24px] md:text-[36px] font-bold ">{title}</p>
      </div>
      <p className="text-[20px] md:text-[32px] lg:text-[48px] font-medium mt-2">
        {para}
      </p>
    </div>
  );
}

export default Head;

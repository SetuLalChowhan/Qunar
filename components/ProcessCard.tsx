
import React from 'react'
 
interface Work{
  id:number;
  title:string;
  des:string
}

const ProcessCard = ({id,title,des}:Work) => {
  return (
    <div className='  mx-auto lg:px-14    border-2  border-gray-800 rounded-lg shadow-lg p-10'>
      <div className='flex items-center mb-4'>
        <h1 className='md:text-[150px] font-[600] text-[#8F94FB] leading-none sm:text-[100px] text-[80px] '>0{id}</h1>
        <div className='ml-4'>
          <p className='md:text-[30px] font-bold text-[24px] '>{title}</p>
          <div className='border-[1px] border-gray-800 w-full mt-2'></div>
        </div>
      </div>
      <div className='text-[#8F8F8F] text-[20px] font-[600] text-justify'>
        {des}
      </div>
    </div>
  )
}

export default ProcessCard;

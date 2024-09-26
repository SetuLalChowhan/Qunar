
import React from 'react'
 
interface Work{
  id:number;
  title:string;
  des:string
}

const ProcessCard = ({id,title,des}:Work) => {
  return (
    <div className=' xl:w-[675px] xl:h-[450px]  mx-auto md:px-16 px-3 py-8 border-2  border-gray-800 rounded-lg shadow-lg  '>
      <div className='flex items-center mb-4'>
        <h1 className='md:text-[150px] font-[600] text-[#8F94FB] leading-none sm:text-[100px] text-[80px] '>0{id}</h1>
        <div className='ml-4'>
          <p className='md:text-[30px] font-bold text-[24px] '>{title}</p>
          <div className='border-[1px] border-gray-800 w-full mt-2'></div>
        </div>
      </div>
      <div className='text-[#8F8F8F] md:text-[20px] font-[600] text-justify '>
        {des}
      </div>
    </div>
  )
}

export default ProcessCard;

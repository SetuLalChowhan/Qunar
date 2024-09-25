import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

interface CarDetails{
    id:number;
    image:string | StaticImageData;
    title:string;
    link:string;
    details:string

}

const CarCard = ({id,image,title,link,details}:CarDetails) => {
  return (
    <div className= ' flex flex-col justify-start items-start  md:p-3 p-3   space-y-3   border-[1px] border-gray-800 '>
        <Image src={image} alt='car' />
        <h1 className='text-[24px] font-[500]'>{title}</h1>
        <p className='text-[20px] bg-[#262626] lg:px-4 rounded-lg p-2  '>{link}</p>
        <p className=' md:text-[20px] text-[#98989A] md:text-justify '>{details}</p>
    </div>
  )
}

export default CarCard
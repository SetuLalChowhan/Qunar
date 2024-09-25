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
    <div className= ' flex flex-col justify-start items-start gap-4  p-10 border-[1px] border-gray-800 '>
        <Image src={image} alt='car' />
        <h1 className='text-[24px] font-[500]'>{title}</h1>
        <p className='text-[20px] bg-[#262626] px-4 rounded-lg '>{link}</p>
        <p className=' text-[20px] text-[#98989A] text-justify'>{details}</p>
    </div>
  )
}

export default CarCard
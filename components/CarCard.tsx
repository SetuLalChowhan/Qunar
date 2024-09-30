import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CarDetails {
  id: number;
  image: string | StaticImageData;
  title: string;
  link: string;
  details: string;
}

const CarCard = ({ id, image, title, link, details }: CarDetails) => {
  return (
    <div className='xl:w-[675px] xl:h-[700px] flex flex-col justify-start items-start md:px-6 px-6 py-6 border border-gray-700 rounded-lg shadow-lg bg-[#1a1a1a]'>
      {/* Image */}
      <div className='w-full h-[350px] relative'>
        <Image src={image} alt='car' layout='fill' objectFit='cover' className='rounded-t-lg' />
      </div>

      {/* Title */}
      <h1 className='text-[28px] font-semibold text-white mt-4'>{title}</h1>

      {/* Link */}
      <a 
        href={link} 
        className='text-blue-400 hover:text-blue-600 text-[18px] mt-2 underline'
        target='_blank' 
        rel='noopener noreferrer'
      >
        {link}
      </a>

      {/* Details */}
      <p className='text-[18px] text-gray-300 mt-4 leading-relaxed'>
        {details}
      </p>
    </div>
  );
}

export default CarCard;

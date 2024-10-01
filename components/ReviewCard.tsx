interface UserDetails {
  id: number;
  review: string;
  image: string | StaticImageData;
  name: string;
  dep: string;
}

import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface UserDetails {
  id: number;
  review: string;
  image: string | StaticImageData;
  name: string;
  dep: string;
  rating: number;
}

const ReviewCard = ({ id, review, image, name, dep, rating }: UserDetails) => {
  return (
    <div className="w-full lg:w-[424px] lg:h-[352px] md:px-8 px-4 py-6 border border-gray-700 rounded-lg bg-[#1a1a1a] text-justify shadow-lg space-y-8">
      {/* Review Text with Quotation Icon */}
      <div className="w-full h-auto lg:mt-8">
        <svg
          className="w-6 text-blue-500 mb-4"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <p className="text-[16px] lg:text-[20px] font-light text-gray-300 lg:h-32">
          {review}
        </p>
      </div>

      {/* User Image and Info */}
      <div className="flex items-center gap-4 lg:gap-6 mt-4 lg:mt-0">
        <Image
          className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full object-cover"
          src={image}
          alt="user-image"
        />
        <div>
          <div className="text-[16px] lg:text-[18px] font-semibold text-white flex flex-row items-center gap-2">
            {name}
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${
                    star <= rating ? "text-[#FFD700]" : "text-[#FFD700]"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[14px] lg:text-[17px] text-gray-400 mr-2">
              {dep}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

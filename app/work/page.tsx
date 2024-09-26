import Banner from '@/components/Banner'
import Banner2 from '@/components/Banner2'
import CarCard from '@/components/CarCard'
import Head from '@/components/Head'
import { cars } from '@/utils/data'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner title='Our Works' para='Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.'/>

      <div className= ' container mt-10'>
        <Head title='Our Work' para='We Have The Privilege of Working With A Diverse Range' />
        <div className="w-full md:w-[350px] lg:w-[500px] h-auto lg:h-[64px] bg-[#333333] rounded-lg text-[18px] md:text-[20px] lg:text-[22px] p-2 md:p-4">
          Here are some example of our notable works:
        </div>
        <div className="mt-4 grid grid-cols-1  lg:grid-cols-2  gap-2 mb-5 ">
          {cars.map((car, index) => (
            <CarCard
              key={index}
              id={car.id}
              image={car.image}
              title={car.title}
              link={car.link}
              details={car.details}
            />
          ))}
        </div>
      </div>
      <Banner2/>
    </div>
  )
}

export default page
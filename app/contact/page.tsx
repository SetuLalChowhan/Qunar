import Banner from '@/components/Banner'
import Banner2 from '@/components/Banner2'
import FormSubmit from '@/components/FormSubmit'
import Head from '@/components/Head'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner title='Contact' para='Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.'/>
      <div className=" container lg:w-[1596px] mt-10">
        <Head
          title="Contact Us"
          para="Feel free to reach out using the contact form below for any questions or feedback"
        />
        <div className="flex justify-center items-center">
          <FormSubmit />
        </div>
      </div>
      <Banner2/>
    </div>
  )
}

export default page
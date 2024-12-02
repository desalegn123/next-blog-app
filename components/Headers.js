import Image from 'next/image';
import React from 'react';
import { assets } from '@/Assets/assets';

const Headers = () => {
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          alt=""
          width={180}
          className="w-[130px] sm:w-auto"
        />
        <button className="flex px-3 py-1 sm:px-6 sm:py-3 gap-3 shadow-[-8px_8px_0px_#000000] font-medium  items-center border border-solid border-black   ">
          Get Started <Image src={assets.arrow} alt='name'/>
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          {' '}
          lorem fgdnlfg egjbrs rglhvui viaaaaaaaaaafs sdfjkbkjvg ebj ggea gegkjb
          trtrk.bd jkndbsbio ebgio
        </p>
        <form className='flex justify-between mx-auto max-w-[500px] scale-75 sm:scale-100 mt-10 border border-black shadow-[-8px_8px_0px_#000000]'>
            <input type='email' placeholder='Enter your email' className='pl-4 outline-none'/>
            <button className='border-1 border-black px-4 py-4 sm:px-8 active:bg-gray-600 active:text-white '>Subscribe</button>

        </form>
      </div>
    </div>
  );
};

export default Headers;

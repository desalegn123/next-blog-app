import Image from 'next/image'
import React from 'react'

import { blog_data } from '@/Assets/assets'

const BlogItems = () => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] border border-black bg-white hover:shadow-[-7px_7px_0px_#000000]'>
      <Image src={blog_data[0].image} alt=' ' width={400} height={400} className='border border-b-black'/>
      
    </div>
  )
}

export default BlogItems

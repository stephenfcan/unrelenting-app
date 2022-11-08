import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Collection = ({ collection: { image, name, slug, details, products } }) => {
  return (
    <div className='flex flex-col items-center w-full md:w-5/6 mx-auto space-y-4'>
      <Link href={`/collections/${slug.current}`}>
        <div className='cursor-pointer text-xs'>
          <img src={urlFor(image)} className='hover:opacity-90 object-cover w-screen md:w-[1060px] md:h-[400px]' alt="" />
          <p className='font-semibold px-1 pt-1'>{name}</p>
          <p className='text-gray-700 px-1'>{details}</p>
        </div>
      </Link>
    </div>
  )
}

export default Collection
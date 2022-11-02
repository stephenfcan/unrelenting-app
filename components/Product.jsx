import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price, availability } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='cursor-pointer text-xs'>
          <img src={urlFor(image && image[0])} width={250} height={250} className='hover:bg-gray-200 bg-gray-100 p-5' alt="" />
          <p className='font-semibold px-1 pt-1'>{name}</p>
          <p className='text-gray-700 px-1'>${price} USD</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
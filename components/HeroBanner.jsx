import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container flex flex-col items-center text-center'>
      <div className='flex flex-col items-center justify-center'>
        {/* <p className='beats-solo'>{heroBanner.smallText}</p> */}
        <h3>{heroBanner.midText}</h3>
        <h1 className='z-10 absolute my-auto mx-auto text-white'>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="" className='z-0 object-cover relative hero-banner-image md:px-10 w-screen md:w-[1060px] md:h-[450px]' />
        <Link href={`/collections/${heroBanner.collection}`}>
          <button className='absolute mt-20 hover:shadow-lg font-semibold w-[200px] px-[5px] py-[13px] bg-black text-white' type='button'>{heroBanner.buttonText}</button>
        </Link>

        <div>
          {/* <Link href={`/product/${heroBanner.product}`}>
            <button className='absolute -mt-[80px] md:-mt-[170px] -mx-[100px] hover:shadow-lg font-semibold w-[200px] px-[5px] py-[13px] bg-black text-white' type='button'>{heroBanner.buttonText}</button>
          </Link> */}
          {/* <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container flex flex-col items-center text-center'>
      <div>
        {/* <p className='beats-solo'>{heroBanner.smallText}</p> */}
        <h3>{heroBanner.midText}</h3>
        {/* <h1 className='z-10 absolute mt-[250px] ml-[435px] text-white font-semibold'>{heroBanner.largeText1}</h1> */}
        <img src={urlFor(heroBanner.image)} alt="" className='z-0 relative hero-banner-image md:px-10 w-screen md:w-[1060px] md:h-[450px]' />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button className='absolute -mt-[125px] md:-mt-[170px] -mx-[125px] hover:shadow-lg font-semibold w-[250px] px-[5px] py-[13px] bg-black text-white' type='button'>{heroBanner.buttonText}</button>
          </Link>
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
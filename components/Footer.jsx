import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className=''>
      <div className='hidden md:block bg-gray-100'>
        <div className='hidden md:grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 max-w-7xl mx-auto text-gray-600'>
          {/* Shop */}
          <div className='space-y-3 text-xs text-gray-800'>
            <h5 className='font-bold'>SHOP</h5>
            <Link href='/shop'>
              <p className='hover:underline cursor-pointer'>All Products</p>
            </Link>
          </div>

          {/* Collection */}
          <div className='space-y-3 text-xs text-gray-800'>
            <h5 className='font-bold'>COLLECTIONS</h5>
            <Link href='/collections'>
              <p className='hover:underline cursor-pointer'>All Collections</p>
            </Link>
            <Link href='/collections/the-signature-collection'>
              <p className='hover:underline cursor-pointer'>The Signature Collection</p>
            </Link>
          </div>

          {/* Support */}
          <div className='space-y-3 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <Link href='/guarantee'>
              <p className='hover:underline cursor-pointer'>UNRELENTING Guarantee</p>
            </Link>
            <Link href='/sizing-chart'>
              <p className='hover:underline cursor-pointer'>Sizing Chart</p>
            </Link>
            <Link href='/customer-support'>
              <p className='hover:underline cursor-pointer'>Customer Support</p>
            </Link>
          </div>

          {/* Connect */}
          <div className='space-y-3 text-xs text-gray-800'>
            <h5 className='font-bold'>CONNECT</h5>
            <Link href='https://www.instagram.com/unrelentingofficial/'>
              <p className='hover:underline cursor-pointer'>Instagram</p>
            </Link>
            <Link href='https://www.linkedin.com/company/unrelenting/'>
              <p className='hover:underline cursor-pointer'>LinkedIn</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='md:hidden flex-col text-center text-xs space-y-3 pb-3'>
        <p>2022 UNRELENTING All rights reserved</p>
        <p className='flex justify-center'>
          <Link href='https://www.instagram.com/unrelentingofficial/'>
            <AiFillInstagram className='cursor-pointer' size={30} />
          </Link>
          <Link href='https://www.linkedin.com/company/unrelenting/'>
            <AiFillLinkedin size={30} />
          </Link>
        </p>
      </div>
    </div>
    
  )
}

export default Footer
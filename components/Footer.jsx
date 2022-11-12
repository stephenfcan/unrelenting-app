import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex-col text-center text-xs space-y-3 pb-3'>
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
  )
}

export default Footer
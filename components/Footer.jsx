import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex-col text-center text-xs space-y-3 pb-3'>
      <p>2022 UNRELENTING All rights reserved</p>
      <p className='flex justify-center'>
        <AiFillInstagram size={30} />
        <AiOutlineTwitter size={30} />
      </p>
    </div>
  )
}

export default Footer
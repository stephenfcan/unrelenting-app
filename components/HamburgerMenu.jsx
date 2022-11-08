import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'

const HamburgerMenu = () => {
  const { setShowHamburgerMenu } = useStateContext();
  return (
    <div className='fixed w-screen left-0 top-15 z-100 transition ease-in-out bg-[#000000] bg-opacity-50'>
      <div className='cart-container h-screen w-screen md:w-[600px] bg-white float-left px-[30px] py-[10px] relative'>
        <button type='button' className='hidden md:inline-flex float-right items-center cursor-pointer space-x-2 mx-[18px]' onClick={() => setShowHamburgerMenu(false)}>
          <span>Exit Menu</span>
          <AiOutlineRight className='text-gray-500 hover:text-black relative' />
        </button>
        <div className='flex flex-col items-start space-y-3'>
          <Link href='/shop'>
            <button onClick={() => setShowHamburgerMenu(false)} className='text-gray-500 hover:text-black cursor-pointer mx-[10px] md:mx-[18px] text-xl font-semibold'>SHOP</button>
          </Link>
          <Link href='/collections'>
            <button onClick={() => setShowHamburgerMenu(false)} className='text-gray-500 hover:text-black cursor-pointer mx-[10px] md:mx-[18px] text-xl font-semibold'>COLLECTIONS</button>
          </Link>
          <Link href='/about'>
            <button onClick={() => setShowHamburgerMenu(false)} className='text-gray-500 hover:text-black cursor-pointer mx-[10px] md:mx-[18px] text-xl font-semibold'>ABOUT</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu
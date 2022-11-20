import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const NavBar = () => {
  const { showHamburgerMenu, setShowHamburgerMenu, showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className={`flex justify-between max-w-7xl mx-auto py-4 px-3 md:px-7 items-center ${showCart ? ('bg-white') : ('bg-white/70 backdrop-blur-sm')}`}>
      <div className='flex md:space-x-5 items-center'>
        {/* Hamburger Menu */}
        <button type='button' className='flex md:hidden' onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}>
          { showHamburgerMenu ? (<AiOutlineClose size={20} className='text-gray-500 hover:text-black relative' />) : 
          (<AiOutlineMenu size={20} className='text-gray-500 hover:text-black relative' />) }
        </button>

        {/* UNRELENTING Logo */}
        <div className='font-bold text-xl cursor-pointer'>
          <Link href='/'>
            <button onClick={() => setShowHamburgerMenu(false)} className='flex items-center space-x-2'>
              <img className='hidden md:inline-flex h-5' src="https://user-images.githubusercontent.com/84104582/199637301-fc77f935-c997-42e4-ae4b-bc2556405081.png" alt="" />
              <p>UNRELENTING</p>
            </button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className='hidden md:inline-flex text-xs space-x-5 text-gray-500'>
          <p className='cursor-pointer hover:text-black'>
            <Link href='/shop'>SHOP</Link>
          </p>
          <p className='cursor-pointer hover:text-black'>
            <Link href='/collections'>COLLECTIONS</Link>
          </p>
          <p className='cursor-pointer hover:text-black'>
            <Link href='/about'>ABOUT</Link>
          </p>
        </div>
      </div>

      {/* Shopping Cart */}
      <button type='button' className='flex' onClick={() => setShowCart(true)}>
        <AiOutlineShopping size={25} className='text-gray-500 hover:text-black relative' />
        <span className='absolute right-[8px] md:right-[25px] text-xs font-semibold text-white bg-[#f02d34] rounded-full w-4 h-4 align-center'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default NavBar
import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='flex justify-between max-w-7xl mx-auto py-4 px-7 items-center'>
      
      
      
      <div className='flex space-x-5 items-center'>
        <p className='font-bold text-xl cursor-pointer'>
          <Link href='/'>
            <div className='flex items-center space-x-2'>
              <img className='hidden md:inline-flex h-5' src="/logo.png" alt="" />
              <p>UNRELENTING</p>
            </div>
          </Link>
        </p>
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

      <button type='button' className='flex' onClick={() => setShowCart(true)}>
        <AiOutlineShopping size={25} className='text-gray-500 hover:text-black relative' />
        <span className='absolute right-[22px] text-xs font-semibold text-white bg-[#f02d34] rounded-full w-4 h-4 align-center'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default NavBar
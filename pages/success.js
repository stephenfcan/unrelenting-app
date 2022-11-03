import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [])

  return (
    <div className='success-wrapper'>
      <div className='success flex flex-col min-h-[60vh] justify-center items-center m-auto'>
        <p className='icon'>
          <BsBagCheckFill size={40} />
        </p>
        <h2 className='font-semibold text-sm mt-1'>Thank you for your order!</h2>
        <p className='email-msg text-xs mb-3'>Check your email for the receipt.</p>
        <p className='description text-xs mb-10'>If you have any questions, please email <a className='email' href="mailto:stephenfcan@gmail.com">stephenfcan@gmail.com</a></p>
        <Link href='/shop'>
          <button type='button' width='300px' className='btn hover:shadow-lg font-semibold w-3/12 px-[5px] py-[13px] bg-black text-white'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default Success
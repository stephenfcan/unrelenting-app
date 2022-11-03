import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { BsBagXFill } from 'react-icons/bs'

const Canceled = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/shop');
  }, []);
  return (
    <div className='success-wrapper'>
      <div className='success flex flex-col min-h-[60vh] justify-center items-center m-auto'>
        <p className='icon'>
          <BsBagXFill size={40} />
        </p>
        <h2 className='font-semibold text-sm mt-1'>Order Canceled</h2>
        <p className='email-msg text-xs mb-3'>Redirecting you back to shop...</p>
      </div>
    </div>
  )
}

export default Canceled
import Link from 'next/link'
import React from 'react'

const Guarantee = () => {
  return (
    <div className='success-wrapper'>
      <div className='success flex flex-col min-h-[60vh] justify-center items-center m-auto px-8 md:px-40 xl:px-60'>
        <h2 className='font-semibold mt-1'>Our Guarantee</h2>
        <p className='text-sm mb-5 mt-7'>Our products are built to take on your hardest challenges and we&apos;re incredibly proud of their quality and consistency - it&apos;s why each product comes with a hand-signed certificate of authentication and inspection. While we do not offer a refund for goods due to improper/misplaced purchases, we do accept returns for any new items that arrive damaged.</p>
        <Link href={`/customer-support`}>
          <button className='mt-5 hover:shadow-lg font-semibold w-[200px] px-[5px] py-[12px] border border-black' type='button'>Customer Support</button>
        </Link>
      </div>
    </div>
  )
}

export default Guarantee
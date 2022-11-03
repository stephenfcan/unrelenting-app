import React from 'react'
import { Product } from '../components'
import { client } from '../lib/client'

const Shop = ({ products }) => {
  return (
    <>
      <div className='text-center'>
        <h2 className='font-semibold'>All Products</h2>
        <p className='text-sm'>Made for the grind</p>
      </div>

      <div className='flex flex-wrap justify-center mt-5 w-full space-x-3 mb-10'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Shop
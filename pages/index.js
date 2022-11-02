import React from 'react'
import Head from 'next/head'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <>
      {/* <Head>
        <title>UNRELENTING</title>
        <meta name='description' content='UNRELENTING Apparel' />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}

      <div className='text-center'>
        <h2 className='font-semibold'>Latest Arrivals</h2>
        <p className='text-sm'>Speakers of many variations</p>
      </div>

      <div className='flex flex-wrap justify-center mt-5 w-full space-x-3'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
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

export default Home
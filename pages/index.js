import React from 'react'
import Head from 'next/head'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client'
import { useRouter } from 'next/router'

const Home = ({ products, bannerData }) => {
  const router = useRouter();
  return (
    <main className='space-y-10'>
      {/* <Head>
        <title>UNRELENTING</title>
        <meta name='description' content='UNRELENTING Apparel' />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {/* Top Banner */}
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}

      {/* Latest Products */}
      <div>
        <div className='text-center'>
          <h2 className='font-semibold'>Latest Arrivals</h2>
          <p className='text-sm'>Fresh off the press</p>
        </div>  
        <div className='flex flex-wrap justify-center mt-4 w-full space-x-3 mb-10'>
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className='flex flex-col items-center w-5/6 mx-auto bg-black py-9 space-y-4'>
        <div className='text-white text-center'>
          <h1 className='font-semibold'>The UNRELENTING Story</h1>
          <p className='text-sm mx-5'>Creating products designed to tackle your biggest ambitions</p>
        </div>
        <button type='button' onClick={() => router.push('/about')} className='hover:shadow-lg font-semibold w-[200px] px-[5px] py-[13px] bg-white'>Learn More</button>
      </div>
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </main>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product" && new == true]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home
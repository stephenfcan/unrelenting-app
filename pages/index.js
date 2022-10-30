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

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
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
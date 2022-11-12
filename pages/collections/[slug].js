import React, { useState } from 'react'
import { urlFor, client } from '../../lib/client'
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext'

const CollectionDetails = ({ collection }) => {

  const { image, name, details, description, products } = collection;
  const [index, setIndex] = useState(0);
  console.log(products);

  return (
    <div>
      <div className='flex flex-col justify-center items-center space-x-[40px] md:mx-[20px] space-y-5 md:space-y-0'>
        <div className='mb-1 md:mb-7'>
          {/* Collection Banner */}
          <div className='flex flex-col items-center justify-center'>
            <img src={urlFor(image)} alt="" className='relative object-cover w-screen md:w-[1060px] h-[200px]' />
            <h1 className='z-100 absolute mx-auto my-auto font-semibold mb-2 text-white'>{name}</h1>
          </div>
        </div>

        {/* Collection Details */}
        <div className='w-5/6 md:w-4/6 mx-auto'>
          <div className='pb-3'>
            <p className='text-xs'>{details}</p>
          </div>
        </div>

        {/* {products?.map((item) => (
          <Product key={item._ref} product={item}/>
        ))} */}
      </div>
    
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "collection"] {
    slug {
        current
    }
  }`

  const collections = await client.fetch(query);

  const paths = collections.map((collection) => ({
    params: {
        slug: collection.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  // query for collection
  const query = `*[_type == "collection" && slug.current == '${slug}'][0]`;
  const collection = await client.fetch(query);

  return {
    props: { collection }
  }
}

export default CollectionDetails
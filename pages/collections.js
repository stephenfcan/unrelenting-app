import React from 'react'
import Collection from '../components/Collection'
import { client } from '../lib/client'

const Collections = ({ collections }) => {
  return (
    <>
      <div className='text-center mt-5'>
        <h2 className='font-semibold'>All Collections</h2>
        <p className='text-sm'>Find your grind</p>
      </div>

      <div className='flex flex-wrap justify-center mt-5 w-full space-y-7 mb-10'>
        {collections?.map((collection) => <Collection key={collection._id} collection={collection}>{collection.name}</Collection>)}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "collection"]';
  const collections = await client.fetch(query);

  return {
    props: { collections }
  }
}

export default Collections
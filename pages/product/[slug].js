import React, { useState } from 'react'
import { urlFor, client } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({ product, products }) => {

  const { image, name, details, price, availability } = product;
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start space-x-[40px] md:mx-[20px] mt-5 md:m-[40px] md:mt-[60px] space-y-5 md:space-y-0'>
        <div>
          {/* Product Image */}
          <div className='image-container'>
            <img src={urlFor(image && image[index])} alt="" className='object-contain bg-gray-200 w-[300px] h-[300px] md:w-[400px] md:h-[400px] cursor-pointer transition ease-in-out' />
          </div>
          <div className='flex mt-[20px] space-x-2'>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={i === index ? 'w-[70px] h-[70px] cursor-pointer bg-gray-300' : 'w-[70px] h-[70px] cursor-pointer bg-gray-200'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className=''>
          <h1 className='font-semibold mb-2'>{name}</h1>

          {/* Reviews */}
          <div className='flex space-x-[5px] items-center mb-5'>
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>

          {/* Description */}
          <div className='pb-3'>
            <h4 className='font-semibold'>Description:</h4>
            <p className='text-xs'>{details}</p>
          </div>
          
          <p className='font-semibold pt-5'>${price} USD</p>
          
          {availability ? (
            <>
              {/* Quantity */}
              <div className='flex space-x-[20px] items-center pb-5'>
                <h3>Quantity:</h3>
                <p className='flex p-[6px] items-center space-x-5'>
                  <span className='hover:shadow-lg cursor-pointer border border-black p-1' onClick={decQty}><AiOutlineMinus /></span>
                  <span className=''>{qty}</span>
                  <span className='hover:shadow-lg cursor-pointer border border-black p-1' onClick={incQty}><AiOutlinePlus /></span>
                </p>
              </div>

              {/* Buttons */}
              <div className='md:inline-flex md:space-x-[15px] space-y-3 md:space-y-0'>
                <button
                  type='button'
                  className='hover:shadow-lg font-semibold w-[200px] px-[5px] py-[12px] border border-black'
                  onClick={() => onAdd(product, qty)}
                >
                  Add to Cart
                </button>
                <button type='button' className='hover:shadow-lg font-semibold w-[200px] px-[5px] py-[13px] bg-black text-white' onClick={handleBuyNow}>Buy Now</button>
              </div>
            </>      
          ) : (<h1>Out of Stock</h1>)}
        </div>
      </div>
    
      {/* Similar Products */}
      <div className='my-[50px] mx-[5px] md:mx-[50px] text-center'>
        <h2 className='font-semibold'>You may also like</h2>
        <div className='marquee'>
          <div className='flex justify-center space-x-3 mt-5'>
            {products.map((item) => (
                <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
        current
    }
  }`

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
        slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  // query for product
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  
  // query for similar products
  const productsQuery = '*[_type == "product"][0...4]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products }
  }
}

export default ProductDetails
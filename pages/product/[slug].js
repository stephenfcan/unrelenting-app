import React, { useState } from 'react'
import { urlFor, client } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({ product, products }) => {

  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          {/* Product Image */}
          <div className='image-container'>
            <img src={urlFor(image && image[index])} alt="" className='product-detail-image' />
          </div>
          <div className='small-images-container'>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className='product-detail-desc'>
          <h1>{name}</h1>

          {/* Reviews */}
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>

          {/* Details */}
          <h4>Details:</h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          
          {/* Quantity */}
          <div className='quantity'>
            <h3>Quantity</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>

          {/* Buttons */}
          <div className='buttons'>
            <button
              type='button'
              className='add-to-cart'
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type='button' className='buy-now' onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    
      {/* Similar Products */}
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container'>
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
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products }
  }
}

export default ProductDetails
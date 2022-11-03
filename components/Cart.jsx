import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading('Redirecting to checkout...');
    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className='cart-wrapper fixed w-screen right-0 top-0 z-100 transition ease-in-out bg-[#000000] bg-opacity-50' ref={cartRef} >
      <div className='cart-container h-screen w-screen md:w-[600px] bg-white float-right px-[30px] py-[10px] relative'>
        <button type='button' className='cart-heading flex items-center cursor-pointer space-x-2 m-[10px]' onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading font-semibold'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {/* Empty Cart */}
        {cartItems.length < 1 && (
          <div className='flex flex-col empty-cart text-center items-center justify-center m-[40px]'>
            <AiOutlineShopping size={150} />
            <h3 className='text-sm font-semibold mb-10'>Your shopping bag is empty</h3>
            <Link href='/shop'>
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className='btn hover:shadow-lg font-semibold w-11/12 px-[5px] py-[13px] bg-black text-white'
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        {/* Items in Cart */}
        <div className='mt-[15px] overflow-auto max-h-[70vh]'>
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className='product flex space-x-[30px] p-[20px]' key={item._id}>
              <img src={urlFor(item?.image[0])} alt="" className='cart-product-image w-[150px] h-[150px] bg-gray-200' />
              <div className='item-desc space-y-5'>
                <div className=''>
                  <h5 className='font-semibold'>{item.name}</h5>
                  <h4>${item.price} USD</h4>
                </div>
                <div className='space-y-5'>
                  <div>
                    <p className='quantity-desc flex items-center space-x-3'>
                      <span className='minus border border-black' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
                      <span className='num' onClick=''>{item.quantity}</span>
                      <span className='plus border border-black' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button
                    type='button'
                    className='remove-item flex text-xs items-center hover:underline'
                    onClick={() => onRemove(item)}
                  >
                    Remove
                    <TiDeleteOutline size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Subtotal */}
        {cartItems.length >= 1 && (
          <div className='cart-bottom absolute bottom-3 right-1 w-full px-[30px] pt-[65px]'>
            <div className='total flex justify-around font-semibold mb-10'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice} USD</h3>
            </div>
            <div className='btn-container w-full m-auto text-center'>
              <button
                type='button'
                className='btn hover:shadow-lg font-semibold w-11/12 px-[5px] py-[13px] bg-black text-white'
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
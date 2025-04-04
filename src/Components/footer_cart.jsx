import React from 'react'
import { Link } from 'react-router-dom'

function footer_cart() {
  return (
    <div className='w-full px-24 py-10 bg-blue-50 grid grid-cols-2 gap-10 text-center text-white font-bold'>
        <Link to='/cart' className='bg-blue-300 p-5 rounded-lg hover:animate-pulse shadow-lg shadow-gray-400'>Add to Cart</Link>
        <Link to='/buy' className='bg-blue-600 p-5 rounded-lg hover:animate-pulse shadow-lg shadow-gray-400'>Buy Now</Link>
    </div>
  )
}

export default footer_cart
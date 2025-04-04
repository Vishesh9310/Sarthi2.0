import React from 'react'
import logo6 from '../assets/jpg/logo6.jpg'
import { Link } from 'react-router-dom'

function ecom_card() {
    return (
        <div className='bg-white mx-5 my-2 rounded-3xl' >
            <img src={logo6} alt="nothing" className='h-50 w-full bg-green-400 rounded-t-3xl' />
            <div className='p-3 rounded-3xl bg-gray-200'>
                <h1 className='text-gray-500 text-sm'>Healthcare</h1>
                <h3 className='pb-4'>Nitrile diposable gloves 100</h3>
                <div className='flex justify-between'>
                    <Link to="/home" className='bg-none border-2 border-gray-500 w-fit px-4 text-sm py-1 rounded-4xl'>+Add to Cart</Link>
                    <p><span>$80.00</span><span>$64.00</span></p>
                </div>
            </div>
        </div>
    )
}

export default ecom_card
import React from 'react'
import logo from '../assets/hospital.avif'
import { Link } from 'react-router-dom'

function navbarEcom() {
    const brand = "Sarthi";
    return (
        <nav className='inline-flex justify-between w-full px-10 h-20 bg-blue-100 text-sky-600'>
            <Link to="/" className='inline-flex py-1 px-14'>
                <img src={logo} alt="hello" className='h-14 self-center' />
                <div className='w-fit px-2 content-center'>
                    <h2 className='text-sky-500 font-bold'>{brand}</h2>
                    <h3 className='text-gray-700 italic'>A Hospital that lives in your pocket</h3>
                </div>
            </Link>
            <div className='content-center w-2/3 p-1'>
                <ul className='text-black items-center list-none inline-flex justify-between w-full font-semibold py-2 px-4 bg-slate-300 rounded-2xl'>
                    <Link to="/" className="hover:text-green-600">Home</Link>
                    <Link to="/about" className="hover:text-green-600">About Us</Link>
                    <Link to="/service" className="hover:text-green-600">Services</Link>
                    <Link to="/gallery" className="hover:text-green-600">Gallery</Link>
                    <Link to="/news" className="hover:text-green-600">News</Link>
                    <Link to="/signup" className="text-black hover:text-orange-600 px-4 py-1 rounded">Sign Up</Link>
                </ul>
            </div>
        </nav>
    )
}

export default navbarEcom
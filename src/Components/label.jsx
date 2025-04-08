import React from 'react'
import { Link } from 'react-router-dom'

function lable() {
  return (
    <>
    <marquee behavior="slide" direction="right" className="label" loop="2" scrollamount="10">
    <div className='px-2 inline-flex gap-5 content-center w-full'>
        <Link to="/contactus" className='ele py-5 px-3 '>
            <h1 className='divheadingblack text-xl font-bold font-sans'>Book Apppintment</h1>
            <h3 className='font-bolder'>Choose by name, specialty, city and more.</h3>
        </Link>
        <Link to="/consultant" className='ele py-5 px-3 hover:bg-sky-500'>
            <h1 className='divheadingblack text-xl font-bold font-sans'>Consult Online</h1>
            <h3 className='font-bolder'>Talk to a doctor online</h3>
        </Link>
        <Link to="/ecom" className='ele py-5 px-3 hover:bg-sky-500'>
            <h1 className='divheadingblack text-xl font-bold font-sans'>Buy Medicines</h1>
            <h3 className='font-bolder'>Order online</h3>
        </Link>
        <Link to="/fitness" className='ele py-5 px-3 hover:bg-sky-500'>
            <h1 className='divheadingblack text-xl font-bold font-sans'>Book Health Check</h1>
            <h3 className='font-bolder'>Choose by location, Age, Gender & more</h3>
        </Link>
        <Link to="/about" className='ele py-5 px-3 hover:bg-sky-500'>
            <h1 className='divheadingblack text-xl font-bold font-sans'>Find Hospital</h1>
            <h3 className='font-bolder'>Find Directions & contact details</h3>
        </Link>
    </div>
    </marquee>
    </>
  )
}

export default lable


/*
<div className='px-24 py-5 text-white inline-flex gap-5 content-center w-full bg-sky-400'>
        <div className='px-3'>
            <h1 className='text-xl font-bold font-sans'>Book Apppintment</h1>
            <h3 className='font-bolder'>Choose by name, specialty, city and more.</h3>
        </div>
        <div className='px-3'>
            <h1 className='text-xl font-bold font-sans'>Consult Online</h1>
            <h3 className='font-bolder'>Talk to a doctor online</h3>
        </div>
        <div className='px-3'>
            <h1 className='text-xl font-bold font-sans'>Buy Medicines</h1>
            <h3 className='font-bolder'>Order online</h3>
        </div>
        <div className='px-3'>
            <h1 className='text-xl font-bold font-sans'>Book Health Check</h1>
            <h3 className='font-bolder'>Choose by location, Age, Gender & more</h3>
        </div>
        <div className='px-3'>
            <h1 className='text-xl font-bold font-sans'>Find Hospital</h1>
            <h3 className='font-bolder'>Find Directions & contact details</h3>
        </div>
    </div>
*/
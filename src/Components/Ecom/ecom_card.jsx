import React from 'react'
import logo6 from '../../assets/jpg/logo6.jpg'
import { Link } from 'react-router-dom'

function ecom_card(props) {
    const title = props.title;
    const description = props.desc;
    const price = parseInt(props.price);
    const newprice = parseInt(props.newprice);
    return (
        <Link to="/details" className='bg-white mx-5 my-2 rounded-3xl' >
            <img src={logo6} alt="nothing" className='h-50 w-full bg-green-400 rounded-t-3xl' />
            <div className='divheadingblack p-3 rounded-3xl bg-gray-200'>
                <h1 className='text-sm'>{title}</h1>
                <h3 className='pb-4'>{description}</h3>
                <div className='flex justify-between'>
                    <Link to="/addtocart" className='bg-none border-2 w-fit px-4 text-sm py-1 rounded-4xl'>+Add to Cart</Link>
                    <p><span>${price}</span><span> ${newprice}</span></p>
                </div>
            </div>
        </Link>
    )
}

export default ecom_card
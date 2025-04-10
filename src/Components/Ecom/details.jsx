import React from 'react'
import { isCookie, Link } from 'react-router-dom'
import image from '../../assets/jpg/batsy.jpg'
import Nav from '../navbar'
import Footer from '../footer'

function details() {
    const img = image;
    const color = "Black";
    const product_name = "K' Footlance Sneakers For Men";
    const rate = 3.6;
    const discount = 51;
    const isdeliveryfree = true;
    const delivery_date = "7 april, monday";
    const isreturn = true;
    const return_duration = 7;
    const isCOD = true;
    const description = "about deatils";

    const  dataObj= {
     img : image,
     color : "Black",
     product_name : "K' Footlance Sneakers For Men",
     rate : 3.6,
     discount : 51,
     isdeliveryfree : true,
     delivery_date : "7 april, monday",
     isreturn : true,
     return_duration : 7,
     isCOD : true,
     description : "about deatils",
     };

    return (
        <>
            <Nav />
            <main className="px-10 py-10 space-y-2">
                <div className=' mx-auto mb-10 w-full h-fit p-4 shadow-lg'>
                    <img src={img} alt="K' Footlance Sneakers" className="w-full h-150 object-cover rounded-lg" />
                </div>
                <div className="form p-4 space-y-2 w-full h-fit shadow-lg">
                    <h2>Color: {color}</h2>
                    <h2 className="text-large font-semibold">{product_name} ({color})</h2>
                    <p className="italic">{description}</p>
                    <p className="text-small text-gray-500">Rating: {rate}</p>
                    {(discount >= 50) ? <p className='bg-purple-600 w-fit px-1 text-white'>Hot Deal!</p> : null}
                    <div className='inline-flex gap-2'>
                        <p className="text-small text-red-500">{discount}% off</p>
                        <p className="text-extra large font-bold text-green-600">₹302</p>
                        <p className="text-small text-gray-500 line-through">₹999</p>
                    </div>
                </div>

                <div className="form w-full h-fit p-4 shadow-lg">
                    <p className="text-small text-gray-700 inline-flex gap-2 w-full content-center"><img src={img} alt="" className='h-5 w-5' />{(isdeliveryfree === true) ? <span className='text-green-600 font-bold'>Free delivery</span> : null}Delivery by {delivery_date}</p>
                    {isreturn ? <p className="text-small text-gray-700 inline-flex w-full gap-2 content-center"><img src={img} alt="" className='h-5 w-5' />{return_duration} days return policy</p> : null}
                    {isCOD ? <p className="text-small text-gray-700 inline-flex w-full gap-2 content-center"><img src={img} alt="" className='h-5 w-5' /> Cash on Delivery Available</p> : null}
                </div>
            </main>

            <div className='w-full px-24 py-10 bg-blue-50 grid grid-cols-2 gap-10 text-center text-white font-bold'>
                {/* <Link to='/addtocart' className='bg-blue-300 p-5 rounded-lg hover:animate-pulse shadow-lg shadow-gray-400'>Add to Cart</Link>*/}
                <button className='bg-blue-300 p-5 rounded-lg hover:animate-pulse shadow-lg shadow-gray-400'>Add to Cart</button> 
                {/* add to cart wale me functionality lagegi ki add to aarray product ho jaye na ki new page open ho */}
                <Link to='/shippingform' state={{data: dataObj}} className='button p-5 rounded-lg hover:animate-pulse shadow-lg shadow-gray-400'>Buy Now</Link>
            
            </div>

            <Footer/>
        </>
    )
}

export default details
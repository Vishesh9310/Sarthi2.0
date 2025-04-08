import React, { useState } from 'react'
import Nav from '../navbar'
import Footer from '../footer'
import img from '../../assets/jpg/capsule.jpg'

function buy() {
    const [instock, setInstock] = useState(true);
    const [itemcount, setItemCount] = useState(1);
    const img2 = img;
    const title = "fish oil capsule"
    const desc = "hello";
    const company = "hindustan unilever";
    return (
        <>
            <Nav />
            
            <section className='px-10 inline-flex justify-between w-full'>
                <div className='w-2/3 bg-pink-400 p-5'>
                <>
                <div>
                    <img src={img2} alt="" className='h-20 w-28'/>
                    <div>
                        <h1>{title}</h1>
                        <p>{desc} <br />{company}</p>
                    </div>
                    <div>
                        {instock ? <span className='text-green-600 font-bold'>In Stock</span> : <span className='text-red-600 font-bold'>Not In Stock</span>}
                        <button onClick={(itemcount)=>setItemCount(itemcount.target.value = parseInt(itemcount.target.value) + 1)}>{itemcount}</button>
                    </div>

                </div>
                </>
                </div>
                <div className='w-1/3 bg-sky-400 p-5'>hello</div>
            </section>
            
            <div className="bg-gray-100 min-h-screen p-6">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <div className="flex justify-between items-center border-b pb-4">
                        <div>
                            <h2 className="text-lg font-semibold">infinix hot 50s</h2>
                            <p className="text-sm text-gray-500">Size: 7, Black, 7</p>
                            <p className="text-green-600 font-semibold">⭐⭐⭐ 3.6 (18,916)</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm line-through text-gray-400">₹15000</p>
                            <p className="text-lg font-bold text-green-600">₹4650</p>
                            <p className="text-xs text-green-500">69% OFF</p>
                        </div>
                    </div>
                    <div className="py-4 border-b">
                        <p className="text-sm text-green-600">1 coupon applied • 2 offers available</p>
                        <p className="text-sm text-gray-500">Delivery by Mon Apr 7 - <span className="text-green-600">FREE Delivery</span></p>
                    </div>

                    <div className="py-4 border-b">
                        <button className="text-blue-600 font-semibold mr-4">Save for later</button>
                        <button className="text-red-600 font-semibold">Remove</button>
                    </div>

                    <div className="py-4">
                        <h3 className="text-lg font-semibold">Price Details</h3>
                        <div className="flex justify-between text-sm mt-2">
                            <p>Price (1 item)</p>
                            <p>₹15000</p>
                        </div>
                        <div className="flex justify-between text-sm text-green-600">
                            <p>Discount</p>
                            <p>- ₹4650</p>
                        </div>
                        <div className="flex justify-between text-sm text-green-600">
                            <p>Coupons for you</p>
                            <p>- ₹76</p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p>Platform Fee</p>
                            <p>₹3</p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p>Delivery Charges</p>
                            <p className="text-green-600">FREE Delivery</p>
                        </div>
                        <div className="flex justify-between font-bold text-lg mt-3">
                            <p>Total Amount</p>
                            <p>₹4653</p>
                        </div>
                        <p className="text-green-600 text-sm mt-1">You will save ₹10350 on this order</p>
                    </div>

                    <button className="bg-blue-500 text-white w-full py-2 rounded-md font-semibold mt-4">
                        Place order
                    </button>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default buy
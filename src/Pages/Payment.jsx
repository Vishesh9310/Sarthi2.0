import React from 'react'
import Nav from '../Components/navbar'
import Card from '../Components/payment_card'
import Satyam from './satyam'
import Item_details from './Item_details'
import Footer_cart from '../Components/footer_cart'

function Payment() {
    return (
        <>
            <Nav/>
            <Satyam/>
            <Item_details/>

            <section>
            <h1 className='font-bold text-center p-6 text-2xl'>Secure Checkout</h1>
            <div className='h-500 bg-blue-50 grid grid-cols-2 px-24 py-10 gap-5'>
                <div className='bg-white rounded-lg p-5'>
                    <h1>1. REVIEW YOUR ORDER (1 ITEMS)</h1>
                    <Card/>
                </div>
                <div className='bg-white rounded-lg p-5'> vishesh</div>
            </div>

            </section>
            <Footer_cart/>
        </>
    )
}

export default Payment
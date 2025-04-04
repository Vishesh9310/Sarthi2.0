import React from 'react'
import cross from '../../assets/svg/cross1.svg'
import { Link } from 'react-router-dom'


function consultantform() {
    const description = "hello munna";

    return (
        <>
            <main className='bg-gray-100 w-200 mx-auto my-20 h-fit rounded-2xl p-8 shadow-xl shadow-gray-500'>

                <div className='flex justify-between'>
                    <Link><img src={cross} alt="" className='h-12 w-12 bg-none p-2 hover:animate-spin' /></Link>
                    <Link className='px-4 content-center h-12 bg-blue-600 py-2 rounded-md text-white'>Save</Link>
                </div>
                <div>
                    <h1 className='font-semibold text-2xl py-8'>Consultation (example service)</h1>
                    <h2 className='font-bold'>Variations</h2>
                    <p className='font-bolder flex justify-between py-5'><span>Regular</span><span>Variable price</span></p>
                    <div className='px-5 py-2 rounded-md border-1 border-gray-300'>
                        <h1>Variable price</h1>
                        <input type="number" placeholder='$1.00' className='outline-none w-full' />
                    </div>

                    <h2 className='mt-6 font-bold'>Item note(optional)</h2>
                    <p className='my-4'>If you have anything you'd like your customer to know about this item, add it here, It'll appear on their invoice.</p>
                    <div className='px-5 py-2 rounded-md border-1 border-gray-300 h-30'>
                        <input type="text" placeholder='Note' className='outline-none h-fit w-full' />
                    </div>


                    <h2 className='mt-6 font-bold'>Item description</h2>
                    <p className='my-4'>to show item descriptions on your invoices, turn them on from your Receipt settings in Dashboard</p>
                    <p className='px-5 py-2 rounded-md bg-gray-200 h-30'>{description}</p>

                </div>
            </main>
        </>
    )
}

export default consultantform
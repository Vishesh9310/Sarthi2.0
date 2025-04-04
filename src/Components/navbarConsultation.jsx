import React from 'react'
import logo from '../assets/hospital.avif'
import { Link } from 'react-router-dom'
import search from '../assets/svg/icons8-search.svg'

function navbarConsultation() {
    const brand = "Sarthi"
    return (
        <>
            <nav className='px-20 h-fit flex justify-between bg-none border-b-1 border-white'>
                <Link to="/" className='inline-flex p-1 py-3 h-fit'>
                    <img src={logo} alt="hello" className='h-10 self-center' />
                    <div className='w-fit px-2 content-center text-start'>
                        <h2 className='text-white font-bold'>{brand}</h2>
                        <h3 className='text-white italic'>A Hospital that lives in your pocket</h3>
                    </div>
                </Link>
                <div className='items-center inline-flex bg-white rounded-md py-1 h-10 self-center px-3'>
                    <input type="text" autoFocu='true' placeholder='Search' autoComplete='on' className='bg-white h-10 px-2 py-1 rounded-md outline-none w-70' />
                    <Link to="/profile"><img src={search} className='h-7 rounded-[100%]' alt="" /></Link>
                </div>
            </nav>
            
        </>
    )
}

export default navbarConsultation
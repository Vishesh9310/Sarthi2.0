import React from 'react'
import Nav from '../Components/navbar'
import Footer from '../Components/footer'
import logo from '../assets/hospital.avif'
import logo2 from '../assets/png/signup_logo.png'
import { Link } from 'react-router-dom'

function Signup() {
  let brand = "Sarthi";
  return (
    <>
      <Nav />

      <section className='bg-white inline-flex w-full h-fit'>
        <div className='py-25 pl-20 bg-blue-600 w-1/2'>

          <div className='bg-white py-15 h-180 w-130 ml-auto'>
            <div className='inline-flex px-20'>
              <img src={logo} alt="hello" className='h-10 self-center' />
              <div className='w-fit px-2 content-center'>
                <h2 className='text-sky-500 font-bold'>{brand}</h2>
                <h3 className='text-gray-700 italic'>A Hospital that lives in your pocket</h3>
              </div>
            </div>

            <form action="" className='py-2 h-fit p-20'>
              <h3 className='font-bold text-4xl mt-10 mb-1'>Let's create your account</h3>
              <h2 className='font-bolder mb-10'>Signing up for {brand} is fast and free.</h2>
              <label htmlFor="#name" className='text-gray-500'>Name</label>
              <input type="text" id='name' className='bg-gray-100 border-1 px-3 outline-none border-gray-200 rounded-md w-full h-10 mb-6' />
              
              <label htmlFor="#email" className='text-gray-500'>Email</label>
              <input type="email" id='email' className='bg-gray-100 border-1 border-gray-200 rounded-md px-3 outline-none w-full h-10 mb-6' />
              
              <label htmlFor="#password" className='text-gray-500'>Password</label>
              <input type="password" id='password' className='bg-gray-100 border-1 px-3 outline-none border-gray-200 rounded-md w-full h-10' />
              <input type="checkbox" className='mb-6' id='t&c'/>
              <label htmlFor="#t&c" className='content-center px-3'>I agree to {brand} Terms, Privacy Policy</label>
              <button className='bg-blue-600 text-white content-center px-20 rounded-md h-10 w-full'>Sign Up</button>
              
              <div className='flex justify-center gap-2 py-2'>
                <p>have an Account?</p>
                <Link to="/login" className='text-blue-600'>Login</Link>
              </div>
            </form>

          </div>

        </div>
        <div className='py-25 pr-20 bg-sky-100 w-1/2'>
          <div className='bg-blue-600 mr-auto h-180 w-130'>
            <img src={logo2} alt="" className='h-180 w-130' />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Signup
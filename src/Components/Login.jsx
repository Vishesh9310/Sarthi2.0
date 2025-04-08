import React, { useEffect, useState } from 'react'
import Nav from '../Components/navbar'
import Footer from '../Components/footer'
import logo from '../assets/hospital.avif'
import logo2 from '../assets/png/signup_logo.png'
import { Link, useNavigate } from 'react-router-dom'

function Login(props) {
  let brandname = props.info.brand;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email && password){
      navigate('/');
    }else{
      setError("please fill valid details")
    }
  }

  return (
    <>
      <Nav />

      <section className=' inline-flex w-full h-fit'>
        <div className='py-25 pl-20 w-1/2'>

          <div className='form py-15 h-160 w-130 ml-auto'>
            <div className='inline-flex px-20'>
              <img src={logo} alt="hello" className='h-10 self-center' />
              <div className='w-fit px-2 content-center'>
                <h2 className=' font-bold'>{brandname}</h2>
                <h3 className=' italic'>A Hospital that lives in your pocket</h3>
              </div>
            </div>

            <form action="" className='py-2 h-fit p-20' onSubmit={handleLogin}>
              <h3 className='font-bold text-4xl my-10'>Log In</h3>
              <label htmlFor="#email" className=''>Email</label>
              <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} className='bg-gray-100 border-1 px-3 outline-none border-gray-200 rounded-md w-full h-10 mb-6' />
              <div className='flex justify-between'>
                <label htmlFor="#password" className=''>Password</label>
                <label htmlFor="#password" className='text-blue-600'>Forgot Password?</label>
              </div>
              <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} className='outline-none px-3 bg-gray-100 border-1 border-gray-200 rounded-md w-full h-10 mb-6' />
              <button type='submit' className='button text-white content-center px-20 rounded-md h-10 w-full'>Log in</button>
              <div className='flex justify-center gap-2 py-2'>
                <p>have no Account?</p>
                <Link to="/signup" className='text-blue-600'>Register now</Link>
              </div>
            </form>
            {error && <p className='text-center font-bold italic text-red-600'>{error}</p>}

          </div>

        </div>
        <div className='py-25 pr-20 bg w-1/2'>
          <div className='backg_teal mr-auto h-160 w-130'>
            <img src={logo2} alt="" className='h-160 w-130' />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Login
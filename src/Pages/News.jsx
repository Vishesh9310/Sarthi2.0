import React from 'react'
import Nav from '../Components/navbar'
import Label from '../Components/label'
import Footer from '../Components/footer'
import logo1 from '../assets/jpg/consultant2.jpg'
import { Link } from 'react-router-dom'

function News() {

  return (
    <>
      <Nav/>

      <section>
        <div className='inline-flex px-40 py-5 h-100'>
          <div className='w-1/2 h-full py-10'>
            <p className='font-bolder text-6xl'>Your Trusted Partner for Strategic Growth</p>
            <p className='leading-snug pt-3 italic mb-6'>your problems our problems your problems our problems your problems our problems your problems our problemsyour problems our problemsyour problems our problems</p>
            <Link to="/signup" className='w-fit button_border border-2 px-4 py-1 mt-3 rounded-2xl'>See Case Studies</Link>
          </div>
          <img src={logo1} alt="" className=' mx-10 w-1/2 rounded-br-[25%] rounded-tl-[25%]' />
        </div>

        <div className='px-24 py-5 grid grid-cols-5 w-full '>
          <div className='inline-flex items-center'>
            <img src={logo1} alt="" className='h-10 rounded-[100%] mr-3' />
            <h3 className='text-center font-bold divheadingblack'> logoipsum</h3>
          </div>
          <div className='inline-flex items-center'>
            <img src={logo1} alt="" className='h-10 rounded-[100%] mr-3' />
            <h3 className='text-center font-bold divheadingblack'> logoipsum</h3>
          </div>
          <div className='inline-flex items-center'>
            <img src={logo1} alt="" className='h-10 rounded-[100%] mr-3' />
            <h3 className='text-center font-bold divheadingblack'> logoipsum</h3>
          </div>
          <div className='inline-flex items-center'>
            <img src={logo1} alt="" className='h-10 rounded-[100%] mr-3' />
            <h3 className='text-center font-bold divheadingblack'> logoipsum</h3>
          </div>
          <div className='inline-flex items-center'>
            <img src={logo1} alt="" className='h-10 rounded-[100%] mr-3' />
            <h3 className='text-center font-bold divheadingblack'> logoipsum</h3>
          </div>

        </div>

        <div className='px-24 py-18'>
          <h3 className='divheadingblack text-center w-full font-bold text-6xl mb-10'>Latest News</h3>
          <div className='grid grid-cols-4 w-full gap-8'>
            <div className='div rounded-tl-4xl rounded-br-4xl pb-5 h-fit hover:bg-sky-400'>
              <img src={logo1} alt="" className='h-16 rounded-tl-4xl' />
              <h3 className='divheadingblack px-5 mt-50'>Stretegic Planning</h3>
              <p className='px-5'>craft winning strategies for subtainable growth</p>
            </div>
            <div className='div rounded-tl-4xl rounded-br-4xl pb-5 h-fit hover:bg-sky-400'>
              <img src={logo1} alt="" className='h-16 rounded-tl-4xl' />
              <h3 className='divheadingblack px-5 mt-50'>Stretegic Planning</h3>
              <p className='px-5'>craft winning strategies for subtainable growth</p>
            </div>
            <div className='div rounded-tl-4xl rounded-br-4xl pb-5 h-fit hover:bg-sky-400'>
              <img src={logo1} alt="" className='h-16 rounded-tl-4xl' />
              <h3 className='divheadingblack px-5 mt-50'>Stretegic Planning</h3>
              <p className='px-5'>craft winning strategies for subtainable growth</p>
            </div>
            <div className='div rounded-tl-4xl rounded-br-4xl pb-5 h-fit hover:bg-sky-400'>
              <img src={logo1} alt="" className='h-16 rounded-tl-4xl' />
              <h3 className='divheadingblack px-5 mt-50'>Stretegic Planning</h3>
              <p className='px-5'>craft winning strategies for subtainable growth</p>
            </div>
          </div>
        </div>

        <div className='div shadow-2xl shadow-teal-700 p-24 w-fit rounded-4xl mx-10 mb-20 inline-flex'>
          <div className='w-1/2 px-10'>
            <h3 className='divheadingblack text-4xl pb-5'>Get the insights you need to worry less & grow more</h3>
            <img src={logo1} alt="" className='w-full h-80' />
          </div>
          <div className='w-1/2 pl-10'>
            <h3 className='divheadingblack text-2xl pl-10 pr-10 pb-10'>Get the insights you need to worry less & grow more</h3>
            <div className='pb-3'>
              <h3 className='font-bold text-xl pb-3'>Starting Analysis</h3>
              <p>62 following. This account is private. Already follow sayme_vishesh? Switch to the app or log in to see their photos and videos. Switch to the App.</p>
            </div>
            <div className='pb-3'>
              <h3 className='font-bold text-xl pb-3'>Starting Analysis</h3>
              <p>62 following. This account is private. Already follow sayme_vishesh? Switch to the app or log in to see their photos and videos. Switch to the App.</p>
            </div>
            <div className='pb-3'>
              <h3 className='font-bold text-xl pb-3'>Starting Analysis</h3>
              <p>62 following. This account is private. Already follow sayme_vishesh? Switch to the app or log in to see their photos and videos. Switch to the App.</p>
            </div>
          </div>
        </div>

        <div className='text-center w-full mt-20 py-10 px-24 flex justify-center'>
          <div className='w-2/5'>
            <h3 className='divheadingblack text-3xl px-28 pb-5'>Customer service is our main focus</h3>
            <p >62 following. This account is private. Already follow sayme_vishesh? Switch to the app or log in to see their photos and videos. Switch to the App.</p>
            <p className='font-bolder text-lg mt-16 mb-5'>62 following. This account is private. Already follow sayme_vishesh? Switch to the app or log in to see their photos and videos. Switch to the App.</p>
            <div className='inline-flex'>
              <img src={logo1} className="rounded-[100%] h-10 w-10" alt="" />
              <p><span className='font-bold'>Sarthi</span> <br />hello</p>
            </div>
          </div>
        </div>
      </section>

      <Label />
      <Footer />
    </>
  )
}

export default News
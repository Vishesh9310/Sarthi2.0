import React from 'react'
import Nav from '../Components/navbar'
import Footer from '../Components/footer'
import Label from '../Components/label'
import clock from '../assets/svg/clock_icon.svg'
import dir from '../assets/svg/direction_icon.svg'
import face1 from '../assets/jpg/face_doctor.jpg'
import hospital from '../assets/jpg/hospital3.jpg'

function Gallery(props) {
  const brandname = props.info.brand;

  return (
    <>
      <Nav/>

      <section className='bg-cover h-fit' style={{backgroundImage: `url(${hospital})`}}>
        <div className='p-14'>
          <h1 className='text-2xl font-bold pb-3'>{brandname}</h1>
          <div className='inline-flex gap-2 text-lg pb-3'><img src={clock} alt="" /><p>Open 24/7</p></div>
          <br />
          <div className='inline-flex gap-2 text-lg pb-3'><img src={dir} alt="" /><p>Get Direction | Find a Doctor</p></div>
        </div>

        <div className='bg-none p-24 w-3/4 grid grid-cols-4 gap-y-5'>
          <div className=' div rounded-xl h-fit w-50 shadow-2xl shadow-gray-500'>
            <img src={face1} alt="no" className='h-50 w-full rounded-t-xl' />
            <div className='p-2'>
              <h1 className='pb-2'>Dr B. S. Murthy</h1>
              <h3 className='line-clamp-1'>Arthroscopy & Sports Injury</h3>
            </div>
          </div>
          <div className='div rounded-xl h-fit w-50 shadow-2xl shadow-gray-500'>
            <img src={face1} alt="no" className='h-50 w-full rounded-t-xl' />
            <div className='p-2'>
              <h1 className='pb-2'>Dr B. S. Murthy</h1>
              <h3 className='line-clamp-1'>Arthroscopy & Sports Injury</h3>
            </div>
          </div>
          <div className='div rounded-xl h-fit w-50 shadow-2xl shadow-gray-500'>
            <img src={face1} alt="no" className='h-50 w-full rounded-t-xl' />
            <div className='p-2'>
              <h1 className='pb-2'>Dr B. S. Murthy</h1>
              <h3 className='line-clamp-1'>Arthroscopy & Sports Injury</h3>
            </div>
          </div>
          <div className='div rounded-xl h-fit w-50 shadow-2xl shadow-gray-500'>
            <img src={face1} alt="no" className='h-50 w-full rounded-t-xl' />
            <div className='p-2'>
              <h1 className='pb-2'>Dr B. S. Murthy</h1>
              <h3 className='line-clamp-1'>Arthroscopy & Sports Injury</h3>
            </div>
          </div>
        </div>

      </section>

      <Label />
      <Footer />
    </>
  )
}

export default Gallery
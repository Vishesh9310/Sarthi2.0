import React from 'react'
import Nav from '../Components/navbar'
import Footer from '../Components/footer'
import Card from '../Components/sevices_card'
import { Link } from 'react-router-dom'
import Label from '../Components/label'
import logo1 from '../assets/jpg/logo1.jpg'
import logo2 from '../assets/png/logo2.png'
import logo3 from '../assets/jpg/logo3.jpg'
import logo4 from '../assets/jpg/logo4.jpg'
import logo5 from '../assets/png/logo5.png'
import logo6 from '../assets/jpg/logo6.jpg'
import logo7 from '../assets/jpg/logo7.jpg'
import logo8 from '../assets/jpg/logo8.jpg'
import logo9 from '../assets/jpg/logo9.jpg'
import logo10 from '../assets/png/logo10.png'

function Services() {
  const brandname = "Sarthi";

  const location = "Noida";
  const address = "E2, Block e, sector-26";
  const state = "Uttar-Pradesh";
  const pincode = 201301;
  const tel = 543245;
  const email = "sarthi@gmail.com";
  const emer_call = 654322234;

  const data1 = { img: logo1, h: 'M/F Nurse', p: 'Services can include wound care, administering medications, monitoring vital signs, providing therapies, and educating patients and families about health management.' };
  const data2 = { img: logo2, h: 'M/F Attendant', p: 'It involve trained professionals providing assistance and support to individuals, especially the elderly, with their daily activities and health needs.' };
  const data3 = { img: logo3, h: 'Baby Sitter', p: 'an arrangement in which a business such as a hotel or shopping centre provides care for children while their parents are out for an evening, shopping, etc' };
  const data4 = { img: logo4, h: 'Physiotherapist', p: ' works with patients to help them manage pain, balance, mobility, and motor function. ' };
  const data5 = { img: logo5, h: 'Old Age Care Taker', p: 'It helps with the tasks of daily living activities such as (but not limited to) dressing, bathing, toileting, feeding, walking, medication monitoring, also providing emotional support and companionship.' };
  const data6 = { img: logo6, h: 'Part Time Staff', p: 'Services can include wound care, administering medications, monitoring vital signs, providing therapies, and educating patients and families about health management.' };
  const data7 = { img: logo7, h: 'Injection On Call', p: 'Many health conditions may require injection treatment. This treatment can be carried out at home by a private nurse.' };
  const data8 = { img: logo8, h: 'Dressing On Call', p: 'We provide nursing services for Nurses for Wound Dressing at Home in Delhi. We make sure our serves come from well experienced professionally qualified nurses who are experts in this area.' };
  const data9 = { img: logo9, h: 'Medical Equipment On Rent', p: 'a service industry providing machinery, equipment and tools for a limited period of time to final users, mainly to general contractors but also to industry and individual consumers.' };
  const data10 = { img: logo10, h: 'Medical Equipment On Sell', p: 'sell medical equipment on sell in low price as well as.' };
  const data11 = { img: logo1, h: 'Japa Maid', p: 'very caring japa maids' };

  return (
    <>
      <Nav />

      <section className='bg-gradient-to-tl from-white to-green-300 text-black h-fit pb-40 px-24'>
        <div className='py-10'>
          <h1 className='font-bold text-2xl'>OUR SERVICES</h1>
          <em>Our Medical Service & Specialties</em>
          <div className=' grid md:grid-cols-4 w-full '>
            <Card data={data1} />
            <Card data={data2} />
            <Card data={data3} />
            <Card data={data4} />
            <Card data={data5} />
            <Card data={data6} />
            <Card data={data7} />
            <Card data={data8} />
            <Card data={data9} />
            <Card data={data10} />
            <Card data={data11} />
          </div>
        </div>

        <div className='pb-10'>
          <h1 className='font-bold text-2xl pt-5 text-green-700'>24/7</h1>
          <p>We provide total<br />HealthCare Solutions</p>
        </div>

        <div className='bg-sky-300 px-8 py-10 rounded-2xl text-green-900'>
          <h1 className='text-lg font-bolder'>Could not find the what you are looking for?</h1>
          <h2 className='text-xl font-bold mb-6 mt-2'>Request a Callback</h2>
          
          <form action="">
            <div className='inline-flex gap-3 w-full'>
              <input type="text" className='outline-none border-1 border-gray-700 rounded-md px-3' placeholder='Enter Name' />
              <div className=' border-1 border-gray-700 rounded-md'>
                <input type="tel" className='outline-none px-3' placeholder='Mobile Number' />
                <button className='bg-sky-400 px-2'>Send OTP</button>
              </div>
              <input type="number" className='outline-none border-1 border-gray-700 rounded-md px-3' placeholder='Enter OTP' />
            </div>
            
            <input type="submit" className='px-7 py-2 bg-sky-400 rounded mt-8' />
          </form>
        </div>

        <div className='bg-none mx-20'>
          <h3 className='text-xl text-blue-600 pt-8 pb-5 mb-5 border-b border-blue-600'>{brandname} {location}</h3>
          <p>
            {address} {location} {state} {pincode} <br />
            Email: <Link to="https://accounts.google.com" className='text-blue-600' href="#email">{email}</Link> <br />
            Phone No: <Link to="/zfun" className='text-blue-600' href="#tel">{tel} </Link><br />
            Emergency Contact No: <Link to="/zfun" className='text-blue-600' href="#emer_call">{emer_call}</Link>
          </p>
        </div>
      </section>

      <Label />

      <Footer />
    </>
  )
}

export default Services
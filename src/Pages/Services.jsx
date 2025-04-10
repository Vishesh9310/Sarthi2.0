import React from 'react'
import Nav from '../Components/navbar'
import Footer from '../Components/footer'
import Card1 from '../Components/services_card1'
import Card2 from '../Components/services_card2'
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

function Services(props) {
  const brandname = props.info.brand;
  const location = props.info.location;
  const address = props.info.address;
  const state = props.info.state;
  const pincode = props.info.pincode;
  const tel = props.info.tel;
  const email = props.info.email;
  const emer_call = props.info.emer_call;

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

      <section className=' h-fit pb-40 px-24'>
        <div className='py-10'>
          <h1 className='font-bolder text-4xl text-white'>OUR SERVICES</h1>
          <em className='text-amber-50 border-b-2 border-white'>Our Medical Service & Specialties</em>

          {/* <div className=' grid md:grid-cols-4 w-full '>
            <Card data={data1} />
            <Card data={data2} />
          </div> */}

          <div className='w-full mt-10'>
            <Card1 data={data1} />
            <Card2 data={data2} />
            <Card1 data={data3} />
            <Card2 data={data4} />
            <Card1 data={data5} />
            <Card2 data={data6} />
            <Card1 data={data7} />
            <Card2 data={data8} />
            <Card1 data={data9} />
            <Card2 data={data10} />
            <Card1 data={data11} />
          </div>
        </div>

        <div className='pb-10'>
          <h1 className='font-bold text-2xl pt-5 divheadingblack'>24/7</h1>
          <p>We provide total<br />HealthCare Solutions</p>
        </div>


        <div className='bg-none'>
          <h3 className='text-xl divheadingblack pt-8 pb-5 mb-5 border-b border-black'>{brandname} {location}</h3>
          <p>
            {address} {location} {state} {pincode} <br />
            Email: <Link to="https://accounts.google.com" className='' href="#email">{email}</Link> <br />
            Phone No: <Link to="/zfun" className='' href="#tel">{tel} </Link><br />
            Emergency Contact No: <Link to="/zfun" className='' href="#emer_call">{emer_call}</Link>
          </p>
        </div>
      </section>

      <Label />

      <Footer />
    </>
  )
}

export default Services
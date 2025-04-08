import React, { useState } from 'react';
import Nav from '../Components/navbar';
import Footer from '../Components/footer';
import Label from '../Components/label';
import { Link } from 'react-router-dom';
import doctor from '../assets/png/consultant3.png'
import doctorface from '../assets/jpg/doctor_face2.jpg';
import capsule from '../assets/jpg/capsule.jpg'
import capsule2 from '../assets/jpg/capsule2.jpg'
import instru1 from '../assets/jpg/instru1.jpg'
import surgrey from '../assets/jpg/surgrey.jpg'
import consultant from '../assets/jpg/consultant2.jpg'
import consultant2 from '../assets/consultant8.webp'


function ContactUs(props) {
  const isloggedin = props.info.logged;
  const [isvisible, setisvisible] = useState(false);

  const obj1 = {img: capsule ,text:"hello" ,desc: "hello"};
  const obj2 = {img: capsule2 ,text:"hello" ,desc: "hello"};
  const obj3 = {img: instru1 ,text:"hello" ,desc: "hello"};
  const obj4 = {img: consultant ,text:"hello" ,desc: "hello"};
  const obj5 = {img: surgrey ,text:"hello" ,desc: "hello"};
  const obj6 = {img: consultant2 ,text:"hello" ,desc: "hello"};

    const brandname = props.info.brand;
    const location = props.info.location;
    const address = props.info.address;
    const state = props.info.state;
    const pincode = props.info.pincode;
    const tel = props.info.tel;
    const email = props.info.email;
    const emer_call = props.info.emer_call;

  function showmore() {
    setisvisible(!isvisible);
  }

  return (
    <>
      <Nav />

      <section className="">
        <div className="px-6 sm:px-12 md:px-24 pb-26 bg-cover bg-center" style={{ backgroundImage: `url(${doctorface})` }}>
          <div className="w-full md:w-1/2 h-fit py-20 pl-6 md:pl-40 text-white space-y-3">
            <p className="leading-loose">Individual approach to each patient</p>
            <p className="font-bold text-3xl sm:text-4xl md:text-6xl pb-5">Medical Service</p>
            <Link to="/consultant" className=' button p-2'>Book An Appointment</Link>
          </div>
        </div>

        <div className='grid grid-cols-2 px-24 my-20'>
          <img src={doctor} alt="" className='' />
          <div className='py-10 px-5 space-y-5'>
            <h1 className="divheadingblack text-3xl font-bold">What Makes Us Different</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur, doloribus beatae vitae officia sed quisquam voluptate, perspiciatis qui dolor laboriosam eos perferendis ratione ullam sequi deleniti ea nobis quidem.</p>
            {isvisible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laboriosam officiis nobis blanditiis fuga expedita voluptatem tenetur qui dolor sequi eum eius rerum repellendus praesentium cumque, pariatur quidem. Tempora, veritatis.</p>}
            <button onClick={showmore} className='text-indigo-800'>{isvisible ? "Show less" : "Show more"}</button>
          </div>
        </div>

        <div className='div grid grid-cols-3 px-24 py-10'>
          <div className='text-center overflow-hidden rounded-lg p-5'>
            <img src={obj1.img} alt="" className='content-center rounded-lg h-60 w-full' />
            <h1>{obj1.text}</h1>
            <h4>{obj1.desc}</h4>
          </div>
          <div className='text-center overflow-hidden rounded-lg p-5'>
            <img src={obj2.img} alt="" className='content-center rounded-lg h-60 w-full' />
            <h1>{obj2.text}</h1>
            <h4>{obj2.desc}</h4>
          </div>
          <div className='text-center overflow-hidden rounded-lg p-5'>
            <img src={obj3.img} alt="" className='content-center rounded-lg h-60 w-full' />
            <h1>{obj3.text}</h1>
            <h4>{obj3.desc}</h4>
          </div>
          <div className='text-center overflow-hidden rounded-lg p-5'>
            <img src={obj4.img} alt="" className='content-center rounded-lg h-60 w-full' />
            <h1>{obj4.text}</h1>
            <h4>{obj4.desc}</h4>
          </div>
          <div className='text-center overflow-hidden rounded-lg p-5'>
            <img src={obj5.img} alt="" className='content-center rounded-lg h-60 w-full' />
            <h1>{obj5.text}</h1>
            <h4>{obj5.desc}</h4>
          </div>
          <div className='text-center overflow-hidden rounded-lg p-5'>
            <img src={obj6.img} alt="" className='content-center rounded-lg h-60 w-full' />
            <h1>{obj6.text}</h1>
            <h4>{obj6.desc}</h4>
          </div>
        </div>

        <div className=' content-center h-fit py-20 text-xl font-semibold space-y-3 px-24'>
          {brandname} <br />
          <br />
          
          Response time: we response with in 24 hours <br /> <br />
          Phone number: {tel} <br />
          Emergency call on: {emer_call} <br />
          Email: {email} <br /><br />

          Address: {address} <br />
          Location: {location}, {state}, {pincode} <br />
        </div>


      </section>

      <Label />

      <Footer />
    </>
  );
}

export default ContactUs;

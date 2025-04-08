import React from 'react'
import Nav from '../Components/navbar'
import Footer from '../Components/footer'
import Lable from '../Components/label'
import Aboutdiv1 from '../Components/AboutPage/aboutdiv1'
import logo1 from '../assets/jpg/logo1.jpg'
import { Link } from 'react-router-dom'

function Experience() {
  const brandname = "Sarthi";
  return (
    <>
      <Nav />

      <section>
        <div className='w-full px-24 h-fit text-center py-10'>
          <h3 className='divheadingblack font-bold text-2xl'>{brandname} HealthCare Solutions Pvt.Ltd.</h3>
          <h3 className='font-bold text-2xl'>Experience</h3>
          <h1 className='font-bold mt-10 text-xl'>TRACHEOSTOMY CARE, ICU</h1>
          <p className='divheadingblack font-semibold m-auto w-fit border-b-2'>CCU TRAINED NURSES</p>
          <p className='px-24 py-10 font-semibold'>If you need a nurse or nursing addendant and Medical Equipment on rent
            then contact us, we will provide better services for our patient.
            Our service  is provided at your home in all Delhi NCR
            our endeavor is to provide better services too you.</p>
          <img className="m-auto w-54 h-54 rounded-[100%] border-2 border-amber-300 mb-10" src={logo1} alt="" />
          <Link to="/contactus" className="h-fit button ele px-4 py-1 rounded text-white">Contact Us</Link>
        </div>

        <h1 className='label py-3 font-bold text-2xl px-24 '>OUR HIGHLY TRAINED NURSES CAN HELP YOU WITH</h1>

        <div className='bg-none px-24 py-5 text-lg font-semibold'>
          <ol className='list-decimal'>
            <li>Initial assesment & vital sign monitoring</li>
            <li>GRBS check & reporting to primary doctor if any chances.</li>
            <li>Ryle’s tube insertion/feed & PEG feed (percutaneous endoscopic astrostomy)</li>
            <li>Catheterization and care</li>
            <li>Administering Oral/IM/IV/SC Medication & IV fluids.</li>
            <li>Doing Dressing: Simple, bed sore & Surgical.</li>
            <li>Monitoring GCS and reporting.</li>
            <li>Providing Nebulization.</li>
            <li>Oxygen therapy</li>
            <li>Tracheostomy care: Suctioning & care </li>
            <li>Monitoring critical aspects and reporting</li>
            <li>Spirometry and simple exercises</li>
            <li>Other activities: CPR accompaning the patient for hospital.</li>
            <li>Assisting ina advanced procedures: tapping, chemotherapy</li>
            <li>IV cannula insertion</li>
            <li>Care of all ICU lines</li>
            <li>Administering proctoclysis enema </li>
            <li>Specialized nursing procedures like assisting tapping</li>
            <li>Other services as per the doctor order</li>
          </ol>

          <h3 className='bg-none my-5 button_border border-2 w-fit p-2 font-bold divheadingblack'>Minimum Duration: 10 Days</h3>
          <ul className='grid grid-cols-3 list-disc'>
            <li>12 Hrs. 1400/Day</li>
            <li>24 Hrs. 2400/Day</li>
          </ul>

          <h3 className='bg-none my-5 button_border border-2 w-fit p-2 font-bold divheadingblack'>Injection on call</h3>
          <ul className='grid grid-cols-3 list-disc'>
            <li>Infusion: IV/IM/SC</li>
            <li>Physiotherapist</li>
            <li>All type dressing</li>
            <li>Changing Ryle’s Tube</li>
            <li>Traceostomy Tube changing</li>
            <li>Peg tube changing</li>
            <li>Folly catheter change</li>
          </ul>

          <h3 className='bg-none my-5 button_border border-2 w-fit p-2 font-bold divheadingblack'>Our staffs are well trained BSC nursing/gnm qualified staff will</h3>
          <ul className='grid grid-cols-3 list-disc'>
            <li>1 Hrs.  $500 visit </li>
            <li>4-6 Hrs.  $700 visit </li>
            <li>8-10 Hrs.  $1200 visit</li>
          </ul>
        </div>

        <h1 className='label py-3 font-bold text-2xl px-24'>Our experience Caregivers/ Ward boy/ Attendant can help you with</h1>

        <div className='bg-none px-24 py-5 text-lg font-semibold'>
          <ol className='list-decimal'>
            <li>Mouth Wash</li>
            <li>Giving Sponge bath to the patient</li>
            <li>Grooming the patient</li>
            <li>Taking to walk, change of position and changing the diaper (catheter bag)</li>
            <li> Attending to the patient’s toilet needs</li>
            <li>Giving medicine on time as prescribed by a doctor</li>
            <li>Transferring patient from bed to wheelchair</li>
            <li>In case if NA falls sick we provide quick replacement</li>
            <li>Monitor Vitals BP/Sugar</li>
          </ol>

          <h3 className='bg-none my-5 button_border divheadingblack w-fit p-2'>Minimum Duration: 10 Days</h3>
          <ul className='grid grid-cols-3 list-disc'>
            <li>12 Hrs. 700/Day</li>
            <li>24 Hrs. 900/Day</li>
          </ul>

          <h3 className='bg-none my-5 button_border divheadingblack w-fit p-2'>BABY CARE / NANNY CARE</h3>
          <ul className='list-disc'>
            <li>caring baby: Sponge baby massage, diaper sponge bath</li>
            <li>Washing Cloths, diaper</li>
            <li>Making feed for baby, cleaning bottles</li>
          </ul>

          <h3 className='bg-none my-5 button_border divheadingblack w-fit p-2'>Minimum Duration: 10 Days</h3>
          <ul className='grid grid-cols-3 list-disc'>
            <li>12 Hrs. 700/Day</li>
            <li>24 Hrs. 900/Day</li>
          </ul>

          <h3 className='bg-none my-5 button_border divheadingblack w-fit p-2'>BABY CARE / JAPA</h3>
          <ul className='list-disc'>
            <li>caring baby: Sponge baby massage, diaper sponge bath</li>
            <li>Washing Cloths, diaper</li>
            <li>Mother massage +30 days after birth</li>
          </ul>

          <h3 className='bg-none my-5 button_border divheadingblack w-fit p-2'>Minimum Duration: 10 Days</h3>
          <ul className='grid grid-cols-3 list-disc'>
            <li>12 Hrs. 800/Day</li>
            <li>24 Hrs. 1000/Day</li>
          </ul>
        </div>

        <div className='w-full px-24 h-fit py-10 font-semibold'>
          <div className='text-center'>
            <h1 className='divheadingblack font-bold mt-10 text-xl'>PHYSIOTHERAPY</h1>
            <p className='font-semibold m-auto w-fit border-b-2 mb-6'>Physiotherapy service provided at your doorstep by {brandname} healthcare Solutions Pvt. Ltd.</p>
            <img className="m-auto w-90 h-80 border-2 my-2" src={logo1} alt="" />
          </div>

          <h3 className='divheadingblack bg-none border-black border-b-2 w-fit p-1 mb-3 font-xl font-bold'>Physiotherapy can be done for many problems:-</h3>
          <p >Physiotherapy can be done to get relief for any kind of injury.</p>
          <ul className='grid grid-cols-4 list-disc px-5'>
            <li>Chronic disease</li>
            <li>Physical disability</li>
            <li>Physical pain</li>
            <li>Muscle spasm</li>
            <li>Joint pain</li>
            <li>Stiffness</li>
          </ul>
          <p className='py-3'>Apart from this, physiotherapy can also be used as a treatment for fractures and strains and risks during exercise or sports</p>

          <h3 className='divheadingblack bg-none border-black border-b-2 w-fit p-1 mb-3 font-xl font-bold'>Types of Physiotherapist</h3>
          <p>There are many types of physiotherapy, which include excercise</p>
          <ul className='grid grid-cols-4 list-disc px-5'>
            <li>Heat therapy</li>
            <li>Cold therapy</li>
            <li>Electrotherapy</li>
            <li>Women’s health therapy</li>
            <li>Sports therapy</li>
            <li>Cardiovascular physiotherapy</li>
            <li>Neuromusculoskeletal physiotherapy</li>
            <li>Orthopedic physiotherapy</li>
            <li>Pediatric physiotherapy</li>
          </ul>
          <p className='pt-3 pb-6'>Physiotherapy is different for every injury, physical pain and disease etc. That’s why physiotherapist use different techniques depending on your condition.</p>
          <Link to="/contactus" className="h-fit button px-4 py-1 rounded">Contact Us</Link>
        </div>
      </section>

      <Aboutdiv1/>
      <Lable />
      <Footer />
    </>
  )
}

export default Experience
import React from 'react'
import instagram from '../assets/svg/Instagram-Logo.wine.svg'
import facebook from '../assets/svg/Facebook-f_Logo-Blue-Logo.wine.svg'
import github from '../assets/svg/GitHub-Logo.wine.svg'
import linkedin from '../assets/svg/LinkedIn-Icon-Logo.wine.svg'
import { Link } from 'react-router-dom'

function footer() {
    const contactno = 1234565432;
    const email = "sarthi@gmail.com";
    return (
        <footer className='h-fit content-center w-full footer'>
            <div className='h-fit px-60 pt-10 pb-6 gap-10 inline-flex content-center w-full text-white'>
                <div className='bg-none h-full w-1/3 px-10'>
                    <h3 className='font-bold text-lg pb-2'>CEO's</h3>
                    <div className=' w-fit'>
                        <p>Mr.Sourav: <em>Bussiness Specialist</em></p>
                        <p>Mr.Vishesh: <em>Software Engineer</em></p>
                        <p>Mr.Satyam: <em>Software Developer</em></p>
                        <p>Mr.Prakash: <em>Software Developer</em></p>
                    </div>

                    <h3 className='font-bold text-lg pt-5 pb-1'>Our Doctors</h3>
                    <div className=' w-fit'>
                        <p>Dr.Neha: <em>Cardiologist</em></p>
                        <p>Dr.Pallavi: <em>Cardiologist</em></p>
                        <p>Dr.Muskan: <em>Physiologist</em></p>
                    </div>
                </div>
                <div className='bg-none h-full w-1/3 px-20'>
                    <h3 className='font-bold text-lg  pb-2'>Address</h3>
                    <address className='mb-10'>21 Av. <br /> de l'Hermitage, <br />98000, Monaco</address>
                    
                    <Link to='/about' className='font-bold text-lg'>About Us</Link>
                
                </div>
                
                <div className='bg-none h-full w-1/3 px-12'>
                    <div className='pb-6'>
                        <h3 className='font-bold pb-2'>Social media</h3>
                        <div className='inline-flex justify-between w-full'>
                            <Link to="https://www.instagram.com/" className=''><img className='h-8 w-8' src={instagram} alt="" /></Link>
                            <Link to="https://www.facebook.com/" className=''><img className='h-8 w-8' src={facebook} alt="" /></Link>
                            <Link to="https://www.github.com/" className=''><img className='h-8 w-8' src={github} alt="" /></Link>
                            <Link to="https://www.linkedin.com/" className=''><img className='h-8 w-8' src={linkedin} alt="" /></Link>
                        </div>
                    </div>
                    <div className='pb-6'>
                        <h3 className='font-bold pb-2'>Contact Us</h3>
                        <em>{contactno}</em>
                    </div>
                    <div className='pb-6'>
                        <h3 className='font-bold pb-2'>Enquiry</h3>
                        <em>{email}</em>
                    </div>

                </div>
            </div>
            <div className='text-center py-5 border-t-1'>
                &copy; 2024-2026 Pharmaeasy
                <h3>TERM AND CONDITIONS - PRIVACY POLICY</h3>
            </div>
        </footer>
    )
}

export default footer
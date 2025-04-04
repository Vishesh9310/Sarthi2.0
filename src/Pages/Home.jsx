import React from 'react'
import Nav from '../Components/navbar'
import Footer from '../Components/footer'
import team_pic from '../assets/jpg/group2.jpg'
import tracker from '../assets/png/tracker.png'
import consultant from '../assets/png/consultant.png'
import shopping from '../assets/png/cart.png'
import nurshing_care from '../assets/png/nurse.png'
import Label from '../Components/label'
import {Link} from 'react-router-dom'

function Home() {
    const brandname = "Sarthi";
    const h1head ="Your health our priority";
    const teampic = team_pic;
    
    return (
        <>
            <Nav/>
            <section className='bg-sky-200 h-fit pb-40'>
                <div className='px-24 pb-26'>
                    <div className='justify-between inline-flex h-fit'>
                        <div className='w-1/2 h-fit py-20 pr-20 '>
                            <Link to="/experience" className='w-fit bg-sky-400 hover:bg-sky-300 px-4 py-1 rounded text-white'>Experience</Link>
                            <p className='font-bold text-6xl pt-2'>{h1head}</p>
                            <p className='leading-snug pt-6 italic'>
                                Discover expert fitness advice, top-quality health products, and personalized wellness
                                plans all in one place. Wheather you're looking to enhance your fitness routine or shop for premium health essentials, <span className='text-green-900 font-bold leading-'>{brandname}</span> is
                                here to support your journey to a healthier lifestyle. Start today and take the first step towards a better you!
                            </p>
                        </div>

                        <div className='w-1/2 content-center'>
                            <img src={teampic} alt="we are best in our work" className='w-full h-96' />
                        </div>
                    </div>


                    <div className='bg-blue-50 inline-flex justify-between gap-5 w-full p-3 shadow-gray-400 shadow-lg rounded-lg'>
                        <div className='w-1/4 inline-flex p-1'>
                            <img src={tracker} alt="hello" className='h-14 self-center' />
                            <div className='w-fit px-2 content-center'>
                                <h2 className='text-sky-400 font-bold'>Health tracker </h2>
                                <h3 className='italic'>Track your health</h3>
                            </div>
                        </div>
                        <div className='w-1/4 inline-flex  p-1'>
                            <img src={nurshing_care} alt="hello" className='h-14 self-center' />
                            <div className='w-fit px-2 content-center'>
                                <h2 className='text-sky-400 font-bold'>Personal care aida</h2>
                                <h3 className='italic'>Home nurse care facility</h3>
                            </div>
                        </div>
                        <div className='w-1/4 inline-flex p-1'>
                            <img src={consultant} alt="hello" className='h-14 self-center' />
                            <div className='w-fit px-2 content-center'>
                                <h2 className='text-sky-400 font-bold'>Online Consultant</h2>
                                <h3 className='italic'>Personal doctor</h3>
                            </div>
                        </div>
                        <div className='w-1/4 inline-flex p-1'>
                            <img src={shopping} alt="hello" className='h-14 self-center' />
                            <div className='w-fit px-2 content-center'>
                                <h2 className='text-sky-400 font-bold'>Medical Products</h2>
                                <h3 className='italic'>Buy all medical needs</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-sky-300 text-white inline-flex'>
                    <Link to="/fitness" className='bg-none hover:bg-sky-400 h-fit w-1/3 pl-24 pr-4 pb-6'>
                        <img src={tracker} alt="hello" className='h-20 w-24 p-2' />
                        <h2 className='font-bold text-3xl py-3'>Fitness tracker</h2>
                        <p className='leading-tight pb-4'>“No matter how slow you go you're still lapping everyone on the couch.”</p>
                        <Link to="/fitness" className='bg-none border-white border-2 rounded py-1 px-4 hover:bg-sky-300'>Click Here <span>&gt;&gt;</span></Link>
                    </Link>
                    <Link to="/consultant" className='bg-none hover:bg-sky-400 h-fit w-1/3 pb-6 px-4'>
                        <img src={nurshing_care} alt="hello" className='h-20 w-24 p-2' />
                        <h2 className='font-bold text-3xl py-3'>Doctor Consultant</h2>
                        <p className='leading-tight pb-4'>“No matter how slow you go you're still lapping everyone on the couch.”</p>
                        <Link to="/consultant" className='bg-none border-white border-2 rounded py-1 px-4 hover:bg-sky-300'>Click Here <span>&gt;&gt;</span></Link>
                    </Link>
                    <Link to="/ecom" className='bg-none hover:bg-sky-400 h-fit w-1/3 pr-24 pl-4 pb-6'>
                        <img src={shopping} alt="hello" className='h-20 w-24 p-2' />
                        <h2 className='font-bold text-3xl py-3'>Medical Services</h2>
                        <p className='leading-tight pb-4'>“No matter how slow you go you're still lapping everyone on the couch.”</p>
                        <Link to="/ecom" className='bg-none border-white border-2 rounded py-1 px-4 hover:bg-sky-300'>Click Here <span>&gt;&gt;</span></Link>
                    </Link>
                </div>

            </section>

            <Label/>
            <Footer />
        </>
    )
}

export default Home
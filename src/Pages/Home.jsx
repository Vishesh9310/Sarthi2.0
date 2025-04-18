import React, { useState, useEffect } from 'react'
import Nav from '../Components/navbar'
import Footer from '../Components/footer'
import team_pic from '../assets/jpg/group2.jpg'
import Chatbot from '../Components/Chatbot/chatbot'
import tracker_icon from '../assets/icons/book-of-black-cover-closed.png'
import consultant_icon from '../assets/icons/consultant.png'
import doctor_icon from '../assets/icons/doctor.png'
import cart_icon from '../assets/icons/grocery-store.png'
import Label from '../Components/label'
import { Link } from 'react-router-dom'
import slide1 from '../assets/icons/doctors.jpg'
import slide2 from '../assets/jpg/banner5.jpg'
import slide3 from '../assets/jpg/capsule2.jpg'

function Home(props) {
    const brandname = props.info.brand;
    const h1head = "Your health our priority";
    const teampic = team_pic;

    const slides = [
        {
            img: slide1,
            desc: "Sarthi is not just a place of treatment it's where hope is restored strength is rebuilt, and miracles happens everyday.",
        },
        {
            img: slide2,
            desc: "A 24X7 hospital that lives in your pocket",
        },
        {
            img: slide3,
            desc: "At Sarthi - we don't just treat illness. we walk with you on the journey of wellness. Your health Our mission. Your trust, Our Strength.",
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000); // 3 seconds interval

        return () => clearInterval(interval); // Clean up
    }, []);
    return (
        <>

            {/* <Color/> */}
            <Nav />
            <div className='px-20'>
                <section className=' h-fit pb-40' >
                    <div className=' pb-26'>
                        <div className='justify-between inline-flex h-fit px-24'>
                            <div className='w-1/2 h-fit py-20 pr-20 '>
                                <Link to="/experience" className='w-fit bg-sky-400 hover:bg-sky-300 px-4 py-1 rounded text-white'>Experience</Link>
                                <p className='font-bold text-6xl pt-2 text-black'>{h1head}</p>
                                <p className='leading-snug pt-6 italic text-gray-600'>
                                    Discover expert fitness advice, top-quality health products, and personalized wellness
                                    plans all in one place. Wheather you're looking to enhance your fitness routine or shop for premium health essentials, <span className='text-green-900 font-bold leading-'>{brandname}</span> is
                                    here to support your journey to a healthier lifestyle. Start today and take the first step towards a better you!
                                </p>
                            </div>

                            <div className='w-1/2 content-center'>
                                <img src={teampic} alt="we are best in our work" className='w-full h-96' />
                            </div>
                        </div>


                        <div className='bg-sky-50 shadow-md shadow-sky-300 text-sky-500 inline-flex justify-between gap-5 w-full p-3 rounded-lg'>
                            <div className='w-1/4 inline-flex p-1'>
                                <img src={tracker_icon} alt="hello" className='h-14 self-center' />
                                <div className='w-fit px-2 content-center'>
                                    <h2 className='divheadingblack font-bold'>Health tracker </h2>
                                    <h3 className='italic'>Track your health</h3>
                                </div>
                            </div>
                            <div className='w-1/4 inline-flex  p-1'>
                                <img src={doctor_icon} alt="hello" className='h-14 self-center' />
                                <div className='w-fit px-2 content-center'>
                                    <h2 className='divheadingblack font-bold'>Personal care</h2>
                                    <h3 className='italic'>Home nurse care facility</h3>
                                </div>
                            </div>
                            <div className='w-1/4 inline-flex p-1'>
                                <img src={consultant_icon} alt="hello" className='h-14 self-center' />
                                <div className='w-fit px-2 content-center'>
                                    <h2 className='divheadingblack font-bold'>Online Consultant</h2>
                                    <h3 className='italic'>Personal doctor</h3>
                                </div>
                            </div>
                            <div className='w-1/4 inline-flex p-1'>
                                <img src={cart_icon} alt="hello" className='h-14 self-center' />
                                <div className='w-fit px-2 content-center'>
                                    <h2 className='divheadingblack font-bold'>Medical Products</h2>
                                    <h3 className='italic'>Buy all medical needs</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                

                    <div className='bg-sky-50 shadow-md shadow-sky-300 text-sky-500 inline-flex'>
                        <Link to="/fitness" className='bg-none ele h-fit w-1/3 pl-24 pr-4 pb-6'>
                            <img src={tracker_icon} alt="hello" className='h-20 w-20 p-2' />
                            <h2 className='divheadingblack font-bold text-3xl py-3'>Fitness tracker</h2>
                            <p className='leading-tight pb-4'>“No matter how slow you go you're still lapping everyone on the couch.”</p>
                            <Link to="/fitness" className='bg-none button_border border-2 rounded py-1 px-4'>Click Here <span>&gt;&gt;</span></Link>
                        </Link>
                        <Link to="/consultant" className='bg-none ele h-fit w-1/3 pb-6 px-4'>
                            <img src={doctor_icon} alt="hello" className='h-20 w-20 p-2' />
                            <h2 className='divheadingblack font-bold text-3xl py-3'>Doctor Consultant</h2>
                            <p className='leading-tight pb-4'>“No matter how slow you go you're still lapping everyone on the couch.”</p>
                            <Link to="/consultant" className='bg-none button_border border-2 rounded py-1 px-4'>Click Here <span>&gt;&gt;</span></Link>
                        </Link>
                        <Link to="/ecom" className='bg-none ele h-fit w-1/3 pr-24 pl-4 pb-6'>
                            <img src={cart_icon} alt="hello" className='h-20 w-20 p-2' />
                            <h2 className='divheadingblack font-bold text-3xl py-3'>Medical Services</h2>
                            <p className='leading-tight pb-4'>“No matter how slow you go you're still lapping everyone on the couch.”</p>
                            <Link to="/ecom" className='bg-none button_border border-2 rounded py-1 px-4'>Click Here <span>&gt;&gt;</span></Link>
                        </Link>
                    </div>

                </section>
            </div>

            <div className='px-20 pb-20'>
                <div className="w-full h-100 bg-white overflow-hidden rounded-xl shadow-lg">
                    <div className="relative w-full h-full">
                        {slides.map((slide, index) => (
                            <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 flex flex-col items-center justify-center ${current === index ? "opacity-100" : "opacity-0"     }`}>
                                <img src={slide.img} alt={slide.desc} className="w-full h-full object-cover"/>
                                <div className="absolute bottom-4 bg-sky-600 bg-opacity-50 text-white text-lg font-semibold px-4 py-1 rounded">
                                    {slide.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Chatbot />
            <Label />
            <Footer />

        </>
    )
}

export default Home
import React from 'react'
import Nav from '../Components/navbar'
import Label from '../Components/label'
import Footer from '../Components/footer'
import Aboutdiv1 from '../Components/AboutPage/aboutdiv1'
import logo1 from '../assets/jpg/logo1.jpg'
import doctorface from '../assets/jpg/doctor_face2.jpg'
import { Link } from 'react-router-dom'

function About(props) {
    const brandname = props.info.brand;
    const location = props.info.location;
    const address = props.info.address;
    const state = props.info.state;
    const pincode = props.info.pincode;
    const tel = props.info.tel;
    const email = props.info.email;
    const emer_call = props.info.emer_call;

    const logo = logo1;
    const star_data = [["500", "bed facility"], ["265", "Doctor"], ["633", "Trained Straff"], ["30", "Specialities"]];

    return (
        <>
            <Nav />

            <section className=' h-fit pb-40'>
                <div className='px-24 pb-26 bg-cover' style={{ backgroundImage: `url(${doctorface})` }}>
                    <div className='w-1/2 h-fit py-20 pl-40 '>
                        <p className='font-bold text-6xl pt-2'>We Provide High Solutions for Your Health</p>
                        <p className='leading-snug pt-3 italic mb-3'>your problems our problems</p>
                        <Link to="/signup" className='w-fit bg-sky-400 text-white hover:bg-sky-300 px-4 py-1 mt-5 mr-5 rounded-br-2xl rounded-tl-2xl'>Get Started!</Link>
                    </div>
                </div>

                <Aboutdiv1 />

                <section className='shadow-2xl div rounded-4xl mx-20'>

                    <div className='w-full px-24 justify-center flex py-5'>
                        <div className='text-center inline-flex items-center w-fit text-3xl'>
                            <p className='text-gray-500'>Full range of solutions to effectively enhance your</p> <img src={logo} alt="hello" className='h-10 w-10 rounded-[100%] mx-2' /> <span className='text-black'>virtual care</span>
                        </div>
                    </div>

                    <div className='px-5 py-10 mx-20 my-10 rounded-2xl'>
                        <h1 className='divheadingblack font-bold text-3xl'>About Us:</h1>
                        <p className='py-4 text-lg'>
                            IBP Healthcare Solutions Private Limited was established in 2023. IBP Healthcare Solutions
                            Private Limited is located in Rampuri Surya Nagar Ghaziabad. We are known for providing
                            quality personnel. Who render unmatched services to our clients. We have carved a niche in the
                            market for our excellent level of services.We are one of the best services providers
                            we provide the best quality medical equipment on rent or sale in NCR, Delhi, Noida, and
                            Ghaziabad. To avail ourservices call us on the given number inquire now, we are the best nursing
                            service provider as well. Comparably to other business owners, our customers satisfaction
                            ratio is high, which is our only priority and we strive to continually improve the quality of our
                            services to accommodate the changing needs of our customers.
                        </p>
                        <p className='indent-10 text-lg'>
                            BP Healthcare Solutions Private Limited provides Male Female Nursing Staff in both public and
                            private sectors. We provide male/female attendants for hospitals. Male Female Attendants for
                            Homes, Baby Care, Staff Nurse, Nursing Care. Physiotherapist services etc. We have very
                            experienced staff members with great knowledge of the industry and we are available 24/7.
                            To assit with any requests you may have. We regularly conduct background checks on our
                            employees to ensure that they do not have any police cases registered against them, so you can
                            rest easy knowing that you are in safe hands. We constantly take feedback from our customers
                            about our staff and services so that we can provide the most caring and professional services
                            as per the requirements.
                        </p>

                        <div className='grid grid-cols-2'>
                            <div className='inline-flex py-10 gap-5 content-center'>
                                <img src={logo} alt="hello" className='h-15 w-15 rounded-[100%]' />
                                <div>
                                    <h1 className='font-bold text-lg'>{star_data[0][0]}+</h1>
                                    <p>{star_data[0][1]}</p>
                                </div>
                            </div>
                            <div className='inline-flex py-10 gap-5 content-center'>
                                <img src={logo} alt="hello" className='h-15 w-15 rounded-[100%]' />
                                <div>
                                    <h1 className='font-bold text-lg'>{star_data[1][0]}+</h1>
                                    <p>{star_data[1][1]}</p>
                                </div>
                            </div>
                            <div className='inline-flex gap-5 content-center'>
                                <img src={logo} alt="hello" className='h-15 w-15 rounded-[100%]' />
                                <div>
                                    <h1 className='font-bold text-lg'>{star_data[2][0]}+</h1>
                                    <p>{star_data[2][1]}</p>
                                </div>
                            </div>
                            <div className='inline-flex gap-5 content-center'>
                                <img src={logo} alt="hello" className='h-15 w-15 rounded-[100%]' />
                                <div>
                                    <h1 className='font-bold text-lg'>{star_data[3][0]}+</h1>
                                    <p>{star_data[3][1]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='form px-8 py-10 rounded-2xl mt-20 mx-20 shadow-2xl shadow-gray-400'>
                    <h1 className='text-lg font-bolder'>Could not find the what you are looking for?</h1>
                    <h2 className='text-xl font-bold mb-6 mt-2'>Request a Callback</h2>

                    <form action="">
                        <div className='inline-flex gap-3 w-full'>
                            <input type="text" className='outline-none border-1 border-gray-700 rounded-md px-3 py-1' placeholder='Enter Name' />
                            <input type="tel" className='outline-none border-1 border-gray-700 rounded-md px-3 py-1' placeholder='Mobile Number' />
                            <input type="email" className='outline-none border-1 border-gray-700 rounded-md px-3 py-1' placeholder='Email' />
                        </div>
                        <input type="submit" className='px-7 py-1 bg-sky-400 text-white rounded mt-8' />
                    </form>
                </div>



                <div className='bg-none mx-20 mt-40'>
                    <h3 className='text-xl divheadingblack pt-8 pb-5 mb-5 border-b border-black'>{brandname} {location}</h3>
                    <p>
                        {address} {location} {state} {pincode} <br />
                        Email: <Link to="https://accounts.google.com" className='text-blue-600' href="#email">{email}</Link> <br />
                        Phone No: {tel}<br />
                        Emergency Contact No: {emer_call}
                    </p>
                </div>
            </section>

            <Label />
            <Footer />
        </>
    )
}

export default About
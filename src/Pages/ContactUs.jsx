import React from 'react';
import Nav from '../Components/navbar';
import Footer from '../Components/footer';
import Label from '../Components/label';
import { Link } from 'react-router-dom';
import doctorface from '../assets/jpg/doctor_face2.jpg';

function ContactUs() {
  return (
    <>
      <Nav />

      <section className="bg-sky-200">
        <div
          className="px-6 sm:px-12 md:px-24 pb-26 bg-cover bg-center"
          style={{ backgroundImage: `url(${doctorface})` }}
        >
          <div className="w-full md:w-1/2 h-fit py-20 pl-6 md:pl-40 text-white">
            <p className="leading-loose pt-3">Individual approach to each patient</p>
            <p className="font-bold text-3xl sm:text-4xl md:text-6xl pt-2 mb-5">Medical Service</p>
            <Link
              to="/signup"
              className="w-fit bg-sky-400 text-white hover:bg-sky-300 px-5 py-2 mt-10 mr-5"
            >
              MAKE AN APPOINTMENT
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-6 sm:px-12 md:px-24 py-10">

          <div className="bg-sky-500 pb-10 text-white">
            <h1 className="px-5 text-2xl bg-white p-3 text-black">Doctors' Timetable</h1>
            <div className="inline-flex flex-col sm:flex-row w-full p-5 ml-5">
              <div className="sm:w-1/2 p-5">
                <h2 className="py-10">View a timetable showing when our doctors are usually available.</h2>
                <Link
                  to="/signup"
                  className="w-fit bg-sky-400 text-white hover:bg-sky-300 px-5 py-1 mt-5 mr-5"
                >
                  MAKE AN APPOINTMENT
                </Link>
              </div>
              <div className="sm:w-1/2 p-5">
                <p className="flex w-full justify-between border-b-2 border-white py-3">
                  <h3>Weekdays</h3> <span>8.00-20.00</span>
                </p>
                <p className="flex w-full justify-between border-b-2 border-white py-3">
                  <h3>Saturday</h3> <span>9.30-17.30</span>
                </p>
                <p className="flex w-full justify-between py-3">
                  <h3>Sunday</h3> <span>9.30-15.00</span>
                </p>
              </div>
            </div>
          </div>

          {/* Make an Appointment Section */}
          <div className="bg-sky-500">
            <h1 className="px-5 text-2xl bg-white p-3">Make an Appointment</h1>
            <div className="inline-flex w-full px-5 pb-5 pt-5">
              <form action="" className="flex flex-col sm:flex-row w-full">
                <div className="p-5 sm:w-1/2">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="outline-none w-full bg-white hover:bg-sky-100 px-5 py-1 mt-5"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full outline-none bg-white hover:bg-sky-100 px-5 py-1 mt-5"
                  />
                </div>
                <div className="p-5 sm:w-1/2">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full outline-none bg-white hover:bg-sky-100 px-5 py-1 mt-5"
                  />
                  <input
                    type="submit"
                    className="w-full bg-sky-400 text-white hover:bg-sky-300 px-5 py-1 mt-5 mr-5"
                  />
                </div>
              </form>
            </div>
          </div>

        </div>

      </section>

      <Label />

      <Footer />
    </>
  );
}

export default ContactUs;

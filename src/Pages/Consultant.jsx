import React, { useState } from "react";
import AppointmentList from "../Components/DoctorConsultant/AppointmentList";
import AppointmentForm from "../Components/DoctorConsultant/AppointmentForm";
import PrescriptionCard from "../Components/DoctorConsultant/PrescriptionCard";

import ConsultantHealthMonitoring from "../Components/DoctorConsultant/ConsultantHealthMonitoring";

import Nav from '../Components/navbar'
import Label from '../Components/label'
import { Link } from 'react-router-dom'
import Footer from '../Components/footer'
import logo from '../assets/jpg/logo1.jpg'
import consultant1 from '../assets/jpg/consultant.jpg'
import consultant2 from '../assets/jpg/consultant2.jpg'
import consultant3 from '../assets/png/consultant3.png'
import consultant4 from '../assets/consultant4.webp'
import blue from '../assets/jpg/blue.jpg'

function Consultant() {

  const submit = 'Submit Details';
  //appointments
  const [appointments, setAppointments] = useState([]);
  const [isBooking, setIsBooking] = useState(false);

  const handleAddAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
    setIsBooking(false);
  };

  const handleCancelAppointment = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };


  //prescriptions
  const [prescriptions, setPrescriptions] = useState([]);

  const handleAddPrescription = (prescription) => {
    setPrescriptions([...prescriptions, prescription]);
  };

  const [patientName, setPatientName] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPrescription = {
      id: Date.now(),
      patientName,
      medication,
      dosage,
      duration,
    };
    onAddPrescription(newPrescription);
    // Clear the form after submission
    setPatientName('');
    setMedication('');
    setDosage('');
    setDuration('');
  };


  return (
    <>
      <main className=''>
      <Nav />
        <article className='h-fit bg-cover mb-30' style={{backgroundImage: `url(${blue})`}}>
          <div className='py-10 text-center'>
            <h1 className='text-9xl text-purple-100 font-semibold font-sans my-10 leading-snug'>Consult with Leading Healthcare <span className='bg-blue-500'>Professionals</span></h1>
            {/* <p className='flex justify-center pb-10 gap-5'>
              <Link to='/signup' className='py-2 font-bold hover:text-blue-500 hover:border-blue-500 hover:bg-blue-200 text-white px-10 bg-none border-2 border-white rounded-4xl w-50 content-center'>Registration</Link>
              <Link to='/login' className='py-2 font-bold text-none px-10 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-200 bg-white border-2 border-white rounded-4xl w-50 content-center'>Login</Link>
            </p> */}
          </div>

          <div className='inline-flex gap-5 px-24 mb-5 mt-20'>
            <div className='inline-flex w-1/2 label rounded-4xl p-5'>
              <div className='w-1/2'>
                <h3 className='text-lg font-semibold'>Join affiliate program</h3><br />
                <h3 className='text-xl font-bold mb-24'>Join affiliate program, get fat comission, 20% as usual.</h3><br />
                <Link to='/signup' className='py-2 font-bold hover:animate-pulse text-white button px-10 rounded-4xl w-50 content-center'>Join now</Link>
              </div>
              <img src={consultant1} alt="" className='w-1/2 h-full rounded-r-4xl' />
            </div>

            <div className='inline-flex w-1/2 label rounded-4xl p-5'>
              <div className='w-1/2'>
                <h3 className='text-lg font-semibold'>Join affiliate program</h3><br />
                <h3 className='text-xl font-bold mb-24'>Join affiliate program, get fat comission, 20% as usual.</h3><br />
                <Link to='/signup' className='py-2 font-bold hover:animate-pulse px-10 button text-white rounded-4xl w-50 content-center'>Join now</Link>
              </div>
              <img src={consultant2} alt="" className='w-1/2 h-full rounded-r-4xl' />
            </div>
          </div>

          <div className='inline-flex gap-5 px-24 mt-6 mb-20 w-full'>
            <div className='w-1/3 label rounded-4xl'>
              <h3 className='text-lg font-bold p-5 w-2/3'>Subscribe and get maximum discount 90% off</h3>
              <div className='flex justify-between px-10 items-center'>
                <Link to='/signup' className=' font-bold text-white hover:animate-pulse button rounded-4xl w-10 h-10 text-center content-center'>&rarr;</Link>
                <img src={consultant3} alt="" className='w-2/3 h-30 rounded-xl' />
              </div>
            </div>
            <div className='w-1/3 label rounded-4xl'>
              <h3 className='text-lg font-bold p-5 w-2/3'>Subscribe and get maximum discount 90% off</h3>
              <div className='flex justify-between px-10 items-center'>
                <Link to='/signup' className=' font-bold text-white hover:animate-pulse button rounded-4xl w-10 h-10 text-center content-center'>&rarr;</Link>
                <img src={consultant4} alt="" className='w-2/3 h-30 rounded-xl' />
              </div>
            </div>
            <div className='w-1/3 label rounded-4xl p-5'>
              <h3 className='text-lg font-bold w-2/3 mb-10'>Subscribe and get maximum discount 90% off</h3>
              <input type="email" className='w-full h-10 rounded-4xl py-2 px-5 bg-white text-black-300 mb-10 outline-none' placeholder='Your email address' />
              <Link to='/signup' className='py-2 font-bold hover:animate-pulse px-10 button text-white rounded-4xl w-50 content-center'>Subscribe</Link>
            </div>
          </div>

        </article>

        <section className="px-24 space-y-20">
          {/* Doctor Timetable */}
          <div className="bg-indigo-900 pb-10 text-white">
            <h1 className="px-5 text-2xl bg-white p-3 text-black">Doctors' Timetable</h1>
            <div className="inline-flex flex-col sm:flex-row w-full p-5 ml-5">
              <div className="sm:w-1/2 p-5">
                <h2 className="py-10">View a timetable showing when our doctors are usually available.</h2>
              </div>
              <div className="sm:w-1/2 p-5">
                <p className="flex w-full justify-between border-b-2 border-white py-3">
                  <h3>Weekdays</h3> <span>8.00-8.00</span>
                </p>
                <p className="flex w-full justify-between border-b-2 border-white py-3">
                  <h3>Saturday</h3> <span>9.30-5.30</span>
                </p>
                <p className="flex w-full justify-between py-3">
                  <h3>Sunday</h3> <span>9.30-3.00</span>
                </p>
              </div>
            </div>
          </div>

          {/* Book & Manage Appointments */}
          <div className="h-fit p-8">
            <div className="form max-w-4xl mx-auto p-6 rounded-lg shadow-2xl mb-10 shadow-sky-500">
              <h1 className="divheadingblack text-3xl font-bold text-center mb-6">Appointment Booking</h1>
              {!isBooking 
              ? (<>
                  <button onClick={() => setIsBooking(true)} className="w-full button text-white py-2 rounded-lg hover:animate-pulse mb-4">Book an Appointment</button>
                  <AppointmentList appointments={appointments} onCancelAppointment={handleCancelAppointment}/>
                </>) 
              : (<AppointmentForm onAddAppointment={handleAddAppointment} />)}
            </div>
          </div>
        </section>

          {/* E-Precriptions 
          it is for admin panel*/}
          
          {/* Medical Reacords & History */}
          {/* Payment Gateway Integration */}

          {/* Health Monitoring
          <ConsultantHealthMonitoring/> */}
          {/* Emergency Consultation */}
          {/* Reminders & Notifications */}
          {/* Review & Ratings */}

        <Label />
        
      </main >

      <Footer />

    </>
  )
}

export default Consultant





      
// {/* E-Precriptions */}
// <div className="App min-h-fit py-20 bg-sky-200 p-8">
//     <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold text-center mb-6">E-Prescriptions</h1>
//       {/* <PrescriptionForm onAddPrescription={handleAddPrescription} /*/}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Create a Prescription</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700" >Patient Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg mt-1"
//               value={patientName}
//               onChange={(e) => setPatientName(e.target.value)}
//               required
//             />
//           </div>
          
//           <div>
//             <label className="block text-gray-700">Medication</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg mt-1"
//               value={medication}
//               onChange={(e) => setMedication(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Dosage</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg mt-1"
//               value={dosage}
//               onChange={(e) => setDosage(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Duration</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg mt-1"
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 mt-4"
//           >
//             Generate Prescription
//           </button>
//         </form>
//       </div>
//       {/* <PrescriptionList prescriptions={prescriptions} /> */}

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">Prescription List</h2>
//         {prescriptions.length === 0 ? (
//           <p className="text-gray-500 mt-2">No prescriptions available.</p>
//         ) : (
//           <div className="space-y-4 mt-4">
//             {prescriptions.map((prescription) => (
//               <PrescriptionCard key={prescription.id} prescription={prescription} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   </div>

// {/* <div className="App min-h-fit py-20 bg-sky-200 p-8">
//             <div className="max-w-4xl mx-auto bg-purple-50 rounded-4xl p-6 shadow-2xl shadow-purple-200">
//               {/* <PrescriptionForm onAddPrescription={handleAddPrescription} /*/}
//               <h1 className="text-2xl font-semibold mb-4">Create a Prescription</h1>
//               <div className='h-fit w-full p-10 my-10'>
//               <form className='w-full mr-30 space-y-10' onSubmit={handleSubmit}>
//                 <input type="text"value={patientName} onChange={(e) => setPatientName(e.target.value)} required className='w-full rounded-md outline-none bg-white p-5' placeholder='Patient Name' />
//                 <input type="text" value={medication} onChange={(e) => setMedication(e.target.value)} required className='w-full rounded-md outline-none bg-white p-5 ' placeholder='Medicine' />
//                 <input type="text" value={dosage} onChange={(e) => setDosage(e.target.value)} required className='w-full rounded-md outline-none bg-white p-5' placeholder='Dosage' />
//                 <input type="text" className='w-full rounded-md outline-none bg-white p-5' placeholder='Duration' />
//                 <input type="submit" value={submit} onChange={(e) => setDuration(e.target.value)} required className='text-amber-50 text-center w-40 rounded-md outline-none bg-gradient-to-l to-orange-400 from-pink-500 p-2 my-5 hover:animate-pulse'/>
//                 </form>
//               </div>
//               {/* <PrescriptionList prescriptions={prescriptions} /> */}
//               <div className="mt-6">
//                 <h2 className="text-xl font-semibold">Prescription List</h2>
//                 {prescriptions.length === 0 ? (
//                   <p className="text-gray-500 mt-2">No prescriptions available.</p>
//                 ) : (
//                   <div className="space-y-4 mt-4">
//                     {prescriptions.map((prescription) => (
//                       <PrescriptionCard key={prescription.id} prescription={prescription} />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>  */}
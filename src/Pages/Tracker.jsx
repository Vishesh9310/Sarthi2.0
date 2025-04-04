import React, { useState, useEffect } from 'react';
import Nav from '../Components/navbar';
import Footer from '../Components/footer';
import Label from '../Components/label';
import { Line } from 'react-chartjs-2';
import chatbot from '../assets/jpg/chatbot.jpg';
import 'chart.js/auto';

function Tracker() {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [water, setWater] = useState(0);
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [burned, setBurned] = useState('');
  const [sleep, setSleep] = useState(0);

  const handleWorkoutSubmit = () => {
    setCalories(prev => prev + (parseInt(burned) || 0));
    setSteps(prev => prev + Math.floor(Math.random() * 500 + 500));
    resetWorkout();
  };

  const resetWorkout = () => {
    setExercise('');
    setDuration('');
    setBurned('');
  };

  return (
    <>
      <Nav />

      {/* Chatbot Icon */}
      <div className='fixed bottom-5 right-5'>
        <img src={chatbot} alt="Chatbot" className='rounded-full h-14 cursor-pointer shadow-lg' />
      </div>

      <section className='px-10 py-10 bg-gray-100'>
        {/* Dashboard */}
        <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
          <h1 className='text-2xl font-bold mb-4'>Fitness Dashboard</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='bg-blue-500 text-white p-4 rounded-lg'>
              <h2 className='text-lg font-semibold'>Steps Taken</h2>
              <p className='text-2xl'>{steps}</p>
            </div>
            <div className='bg-red-500 text-white p-4 rounded-lg'>
              <h2 className='text-lg font-semibold'>Calories Burned</h2>
              <p className='text-2xl'>{calories} kcal</p>
            </div>
            <div className='bg-green-500 text-white p-4 rounded-lg'>
              <h2 className='text-lg font-semibold'>Water Intake</h2>
              <p className='text-2xl'>{water} L</p>
            </div>
            <div className='bg-yellow-500 text-white p-4 rounded-lg'>
              <h2 className='text-lg font-semibold'>Sleep Hours</h2>
              <p className='text-2xl'>{sleep} hrs</p>
            </div>
          </div>
        </div>

        {/* Workout Details */}
        <div className='bg-white p-6 mt-6 rounded-lg shadow-lg'>
          <h2 className='text-xl font-semibold mb-3'>Workout Details</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <input type='text' placeholder='Exercise Type' value={exercise} onChange={(e) => setExercise(e.target.value)} className='border p-3 rounded' />
            <input type='number' placeholder='Duration (min)' value={duration} onChange={(e) => setDuration(e.target.value)} className='border p-3 rounded' />
            <input type='number' placeholder='Calories Burned' value={burned} onChange={(e) => setBurned(e.target.value)} className='border p-3 rounded' />
          </div>
          <div className='mt-4 flex gap-4'>
            <button onClick={handleWorkoutSubmit} className='bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition'>Update</button>
            <button onClick={resetWorkout} className='bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition'>Reset</button>
          </div>
        </div>

        {/* Health Progress Chart */}
        <div className='bg-white p-6 mt-6 rounded-lg shadow-lg'>
          <h2 className='text-xl font-semibold mb-3'>Health Progress</h2>
          <Line data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              { label: 'Steps Taken', data: [0, 0, 0, 0, 0, 0, 0], borderColor: 'blue', borderWidth: 2 },
              { label: 'Calories Burned', data: [0, 0, 0, 0, 0, 0, 0], borderColor: 'red', borderWidth: 2 }
            ]
          }} />
        </div>
      </section>

      <Label />
      <Footer />
    </>
  );
}

export default Tracker;
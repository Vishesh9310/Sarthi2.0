import React, { useState, useEffect } from 'react';
import Nav from '../Components/navbar';
import Footer from '../Components/footer';
import Label from '../Components/label';
import { Line } from 'react-chartjs-2';
import Chatbot from '../Components/Chatbot/chatbot'
import 'chart.js/auto';

function Tracker() {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [water, setWater] = useState(0);
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [burned, setBurned] = useState('');
  const [sleep, setSleep] = useState(0);
  const [weight, setWeight] = useState(0);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

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

      <main className='px-24 py-10'>

        <h1 className='font-semibold text-3xl'>DashBoard</h1>
        <section>
          <div className='grid grid-cols-3 w-full gap-5'>

            <div className='h-full p-8 w-full bg-gradient-to-r to-pink-500 from-orange-400 rounded-4xl'>
              <h1 className='font-semibold'>Steps Taken</h1>
              <h3 className='font-bold text-4xl'>{steps}</h3>
              <div className='inline-flex gap-5 mt-6'>
                <div>
                  <h1 className='font-semibold'>Sleep Hours</h1>
                  <h3 className='font-bold text-4xl'>{sleep}</h3>
                </div>
                <div>
                  <h1 className='font-semibold'>Weight</h1>
                  <h3 className='font-bold text-4xl'>{weight} lbs</h3>
                </div>
              </div>
            </div>

            <div className='h-full p-8 w-full text-black bg-purple-50 rounded-4xl'>
              <h1 className='font-semibold'>Total Calories</h1>
              <h3 className='font-bold text-4xl'>{calories} calories</h3>
              <h1 className='font-semibold mt-6'>Total Water Intake</h1>
              <h3 className='font-bold text-4xl'>{water} ltr</h3>
            </div>

            <div className='h-full w-full p-8 text-black bg-purple-50 rounded-4xl'>
              <h1 className='font-bold'>Today Date</h1>
              <h3 className='font-bold text-4xl text-pink-500'>{currentDateTime.toLocaleString()}</h3>
            </div>

          </div>

          <div className='form h-fit w-full rounded-4xl p-10 my-10'>
            <input type="text" className='divheadingblack w-full rounded-md outline-none bg-teal-200 p-5 my-5' placeholder='Enter Exercise type' value={exercise} onChange={(e) => setExercise(e.target.value)} />
            <input type="number" className='divheadingblack w-full rounded-md outline-none bg-teal-200 p-5 my-5' placeholder='Enter Exercise duration' value={duration} onChange={(e) => setDuration(e.target.value)} />
            <input type="text" className='divheadingblack w-full rounded-md outline-none bg-teal-200 p-5 my-5' placeholder='Calories Burned' value={burned} onChange={(e) => setBurned(e.target.value)} />
            <div className='gap-5 inline-flex'>
              <button onClick={handleWorkoutSubmit} className='text-white text-center w-40 rounded-md outline-none bg-gradient-to-l to-orange-400 from-pink-500 p-2 my-5 hover:animate-pulse' >Submit</button>
              <button onClick={resetWorkout} className='text-white text-center w-40 rounded-md outline-none bg-gradient-to-l to-gray-300 from-gray-500 p-2 my-5 hover:animate-pulse'>Reset</button>
            </div>
          </div>

          <div className='bg-purple-50 p-6 mt-6 rounded-4xl shadow-lg'>
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
      </main>

      {/* Chatbot Icon */}
      <Chatbot/>

      <Label />
      <Footer />
    </>
  );
}

export default Tracker;
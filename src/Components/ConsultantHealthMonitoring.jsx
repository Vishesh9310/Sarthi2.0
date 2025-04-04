import React from 'react'

function ConsultantHealthMonitoring() {
    const bp = 33;
    const sugar = 57;
    const weight = 1.5;
    const steps = 33;
    const calories = 57;
    const water = 1.5;
    const date = 3455;
    const days = 5;

    return (
        <main className='px-24 py-10 bg-sky-200'>

            <h1 className='font-semibold text-3xl'>DashBoard</h1>
            <section className='inline-flex w-full p-5 gap-5'>
                <div className='w-2/3'>

                    <div className='inline-flex w-full gap-5'>
                        <div className='h-fit p-8 w-1/2 text-white bg-gradient-to-r to-pink-500 from-orange-400 rounded-4xl'>
                            <h1 className='font-semibold'>Blood pressure</h1>
                            <h3 className='font-bold text-4xl'>{bp} bp</h3>
                            <div className='inline-flex gap-5 mt-6'>
                                <div>
                                    <h1 className='font-semibold'>Sugar</h1>
                                    <h3 className='font-bold text-4xl'>{sugar} kg</h3>
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Weight</h1>
                                    <h3 className='font-bold text-4xl'>{weight} lbs</h3>
                                </div>
                            </div>
                        </div>

                        <div className='h-fit p-8 w-1/2 text-black bg-purple-50 rounded-4xl'>
                            <h1 className='font-semibold'>Total Calories</h1>
                            <h3 className='font-bold text-4xl'>{calories} calories</h3>
                            <h1 className='font-semibold mt-6'>Total Water Intake</h1>
                            <h3 className='font-bold text-4xl'>{water} ltr</h3>
                        </div>

                    </div>

                    <div className='h-fit w-full bg-purple-50 rounded-4xl p-10 my-10'>
                        <form className='w-full mr-30'>
                            <input type="text" className='w-full rounded-md outline-none bg-white p-5 my-5' placeholder='Enter Exercise type' />
                            <input type="number" className='w-full rounded-md outline-none bg-white p-5 my-5' placeholder='Enter Exercise duration' />
                            <input type="text" className='w-full rounded-md outline-none bg-white p-5 my-5' placeholder='Calories Burned' />
                            <input type="submit" className='text-center w-40 rounded-md outline-none bg-gradient-to-l to-orange-400 from-pink-500 p-2 my-5 hover:animate-pulse' />
                        </form>
                    </div>
                </div>

                <div className='w-1/3'>
                    <div className='h-fit w-full p-8 text-black bg-purple-50 rounded-4xl'>
                        <h1 className='font-bold'>Today Date</h1>
                        <h3 className='font-bold text-4xl text-pink-500'>{date}</h3>
                    </div>
                    <div className='h-fit w-full p-8 text-black bg-purple-50 rounded-4xl my-10'>
                        <h1 className='font-bold text-2xl pb-3'>Status</h1>
                        <h3 className='font-bold text-4xl text-pink-500 bg-green-200 w-full h-fit min-h-44'>chart</h3>
                        <br />
                        <h1 className='font-bold'>Complete Days</h1>
                        <h3 className='font-bold text-4xl text-pink-500'>{days}</h3>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ConsultantHealthMonitoring
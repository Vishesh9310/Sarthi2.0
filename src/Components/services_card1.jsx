import React from 'react'

function sevices_card(props) {
    const heading = props.data.h;
    const img = props.data.img;
    const about = props.data.p;
    return (

        <>
            <div className='div w-full overflow-hidden p-5 inline-flex gap-5 rounded-lg my-5'>
                <img src={img} alt="" className='w-1/2 h-fit' />
                <div className='w-1/2 space-y-4'>
                    <h1 className=' divheadingblack text-2xl'>{heading}</h1>
                    <p className='text-lg'>{about}</p>
                </div>
            </div>

            {/* <div className='div overflow-hidden p-2 my-3 inline-flex gap-5 rounded-lg w-full'>
                <img src={img} alt="" className='rounded-lg h-32 w-32' />
                <div>
                    <h1 className=' divheadingblack'>{heading}</h1>
                    <p className=''>{about}</p>
                </div>
            </div> */}
        {/* // <div className='py-5 w-62 h-fit bg-green-100 m-5 p-3 rounded-xl hover:bg-green-200 hover:border-green-600 hover:border-2'>
        //     <h1 className='text-lg font-bolder'>{heading}</h1>
        //     <img src={img} alt="" className='py-3 rounded-2xl font-thin w-62 h-62' />
        //     <p><span className='font-bold text-green-600'>About:</span> {about}</p>
        // </div> */}

        </>
    )
}

export default sevices_card
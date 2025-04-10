import React from 'react'

function services_card2(props) {
    const heading = props.data.h;
    const img = props.data.img;
    const about = props.data.p;
    return (
        <div className='div w-full overflow-hidden p-5 inline-flex gap-5 rounded-lg my-5'>
            <div className='w-1/2 space-y-4'>
                <h1 className=' divheadingblack text-2xl'>{heading}</h1>
                <p className='text-lg'>{about}</p>
            </div>
            <img src={img} alt="" className='w-1/2 h-fit' />
        </div>
    )
}

export default services_card2
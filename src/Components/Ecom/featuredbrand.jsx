import React from 'react'

function featuredbrand(props) {
    const img = props.img;
    const brand = props.brand;

    return (
        <div className='text-center py-10'>
            <img src={img} alt="" className='bg-pink-300 rounded-[100%] h-40 w-40' />
            <h2 className='font-bold'>{brand}</h2>
        </div>
    )
}

export default featuredbrand
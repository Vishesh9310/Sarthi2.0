import React from 'react'
import image from '../../assets/jpg/batsy.jpg'
import cross from '../../assets/svg/cross3.svg'

function payment_card() {
  const img = image;
  const heading = "Note Sleeve";
  const color = "tan";
  const quality = "mast";
  return (
    <div className='grid grid-cols-3 gap-3 py-5 my-4 border-y-2 border-gray-500'>
      <img src={img} alt="heel" className=' h-18 bg-pink' />
      <div className='text-left'>
        <h4 className='font-bold'>{heading}</h4>
        <p>Color: {color}</p>
        <p>quality: {quality}</p>
      </div>
      <div className='text-right'>
        <img src={cross} alt="*" className='float-right h-6'/>
      </div>
    </div>
  )
}

export default payment_card
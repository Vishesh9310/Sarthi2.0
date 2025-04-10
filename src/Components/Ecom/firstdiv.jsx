import React from 'react'

function firstdiv(props) {
  const img = props.img;
  const name = props.name;
  return (
    <div className='text-center p-3'>
      <img className='rounded-3xl' src={img} alt="" />
      <h5 className='divheadingblack'>{name}</h5>
    </div>
  )
}

export default firstdiv
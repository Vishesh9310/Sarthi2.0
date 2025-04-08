import React from 'react'
import { Link } from 'react-router-dom';

function firstdiv(props) {
  const img = props.img;
  const name = props.name;
  return (
    <Link to="/payment" className='text-center p-3'>
      <img className='rounded-3xl' src={img} alt="" />
      <h5 className='divheadingblack'>{name}</h5>
    </Link>
  )
}

export default firstdiv
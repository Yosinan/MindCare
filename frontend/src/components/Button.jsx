import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <div>
       <Link to='/login'>
      <button className='btn'>Sign Up</button>
    </Link>
    </div>
  )
}

export default Button

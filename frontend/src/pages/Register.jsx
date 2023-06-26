import React from 'react'
import { useState } from 'react'

import './Login-register.css'



const PasswordStrengthIndicator = ({ password }) => {
  const getColor = () => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/.test(password);
    if (password.length === 0) {
      return 'gray'; // Default color
    }
    if (password.length <= 6 ) {
      return 'red'; // Weak password
    }
    if (password.length <= 8 ) {
      return 'orange'; // Medium password
    }
    if ( password.length > 8 && hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter) {
    return 'green'; // Strong password
    }
    else {
      return 'gray';
  };
  };
  return password.length > 0 ? (
    <div>
      {/* <p>Strength</p> */}
      <div
        style={{
          width: '80px',
          height: '10px',
          fontSize: '8px',
          backgroundColor: getColor(),
          marginTop: '5px',
        }}
      ></div>
    </div>
  ) : null ;
};


const Register = ({ togglePage }) => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[name,setName]=useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setResponseMessage('Passwords do not match');
    return;
  }
  

  try {
    const response = await fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setResponseMessage(data.message);
      togglePage();
    } else {
      const error = await response.json();
      setResponseMessage(error.error);
    }
  } catch (error) {
    console.error('Error:', error);
    setResponseMessage(error.message);
  }
};
 
  return (
    <div className="Log">
    <div className='form-container'>
      <h2>Register</h2>
      {responseMessage && (
        <p>{responseMessage}</p>
      )}
      <form action="" onSubmit={handleSubmit} className='register-form'>
       <label htmlFor="name" >Full Name</label>
       <input type="text" id='name' placeholder='Full Name' value={name} required={true} onChange={(e)=>setName(e.target.value)}/>
       <label htmlFor="email" >Email</label>
       <input type="email" id='email' placeholder='youremail@gmail.com' value={email} required={true} onChange={(e)=>setEmail(e.target.value)}/>
       <label htmlFor="name">Password</label>
       <input  type="password" id='password' placeholder='*********' value={password} required={true} onChange={(e)=>setPassword(e.target.value)} />
       <PasswordStrengthIndicator password={password} />
       <label>Confirm Password</label>
       <input type="password" placeholder='*********' value={confirmPassword} required={true} onChange={(e) => setConfirmPassword(e.target.value)}/>
       <br />
       <button type='submit'>Sign Up</button> 
      
       </form>
      
      <button className='link-btn' onClick={togglePage}>Already have an account?Login here</button>
    </div>
    </div>
  )
}

export default Register
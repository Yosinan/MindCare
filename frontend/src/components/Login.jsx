import React from 'react'
import { useState } from "react"


function Login({ onLogin, togglePage }) {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          onLogin(data);
        } else {
          const error = await response.json();
          console.log(error);
          setResponseMessage(error.message); // Update the error message
        }
      } catch (error) {
        console.log(error);
        setResponseMessage(error.message);
      }
    };

  return (
    <div className='form-container'>
      {responseMessage && (
          <p>{responseMessage}</p>
        )}
      <h2>Login</h2>
        <form action="" onSubmit={handleSubmit} className='login-form'>
      
       <label htmlFor="email" >Email</label>
       <input type="email" id='email' placeholder='youremail@gmail.com' value={email} required={true} onChange={(e)=>setEmail(e.target.value)}/>
       <label htmlFor="name">Password</label>
       <input  type="password" id='password' placeholder='********' value={password} required={true} onChange={(e)=>setPassword(e.target.value)} />
       <button type='submit'>Login</button>
      
   </form>
   <button className="link-btn" onClick={togglePage}>Switch to Sign Up</button>
      {/* <button className='link-btn' onClick={()=>props.onFormSwitch('register')}>Don't have an account?Register here</button> */}
    
    </div>
  );
}

export default Login

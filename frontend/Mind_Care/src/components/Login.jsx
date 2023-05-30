import React from 'react'
import { useState } from "react"


function Login(props) {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

   const handleSubmit=(e)=>{
      e.preventDefault();
    }

  return (
    <div className='form-container'>
      <h2>Login</h2>
        <form action="" onSubmit={handleSubmit} className='login-form'>
      
       <label htmlFor="email" >Email</label>
       <input type="email" id='email' placeholder='youremail@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <label htmlFor="name">Password</label>
       <input  type="password" id='password' placeholder='********' value={password} onChange={(e)=>setPassword(e.target.value)} />
       <button type='submit'>Login</button>
      
   </form>
      
      <button className='link-btn' onClick={()=>props.onFormSwitch('register')}>Don't have an account?Register here</button>
    
    </div>
  );
}

export default Login

import React from 'react'
import { useState } from 'react'

const Register = (props) => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[name,setName]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
 
  return (
    <div className='form-container'>
      <h2>Register</h2>
      <form action="" onSubmit={handleSubmit} className='register-form'>
       <label htmlFor="name" >Full Name</label>
       <input type="text" id='name' placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}/>
       <label htmlFor="email" >Email</label>
       <input type="email" id='email' placeholder='youremail@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <label htmlFor="name">Password</label>
       <input  type="password" id='password' placeholder='*********' value={password} onChange={(e)=>setPassword(e.target.value)} />
       <button type='submit'>Login</button> 
      
   </form>
      
      <button className='link-btn' onClick={()=>props.onFormSwitch("login")}>Already have an account?Login here</button>
    </div>
  )
}

export default Register
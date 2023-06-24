import React from 'react'
import { useState } from 'react'

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
  return (
    <div>
      <label>Strength:</label>
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
  );
};


const Register = (props) => {
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
    <div className='form-container'>
      <h2>Register</h2>
      {responseMessage && (
        <p>{responseMessage}</p>
      )}
      <form action="" onSubmit={handleSubmit} className='register-form'>
       <label htmlFor="name" >Full Name</label>
       <input type="text" id='name' placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}/>
       <label htmlFor="email" >Email</label>
       <input type="email" id='email' placeholder='youremail@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <label htmlFor="name">Password</label>
       <input  type="password" id='password' placeholder='*********' value={password} onChange={(e)=>setPassword(e.target.value)} />
       <PasswordStrengthIndicator password={password} />
       <label>Confirm Password:&nbsp;
           <input
            type="password"
            placeholder='*********'
            value={confirmPassword}
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
         <br />
       <button type='submit'>Login</button> 
      
   </form>
      
      <button className='link-btn' onClick={()=>props.onFormSwitch("login")}>Already have an account?Login here</button>
    </div>
  )
}

export default Register

// import React, { useState } from 'react';

// const PasswordStrengthIndicator = ({ password }) => {
//   const getColor = () => {
//   const hasUppercase = /[A-Z]/.test(password);
//   const hasLowercase = /[a-z]/.test(password);
//   const hasNumber = /[0-9]/.test(password);
//   const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/.test(password);
//     if (password.length === 0) {
//       return 'gray'; // Default color
//     }
//     if (password.length <= 6 ) {
//       return 'red'; // Weak password
//     }
//     if (password.length <= 8 ) {
//       return 'orange'; // Medium password
//     }
//     if ( password.length > 8 && hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter) {
//     return 'green'; // Strong password
//     }
//     else {
//       return 'gray';
//   };
//   };
//   return (
//     <div>
//       <label>Strength:</label>
//       <div
//         style={{
//           width: '80px',
//           height: '10px',
//           fontSize: '8px',
//           backgroundColor: getColor(),
//           marginTop: '5px',
//         }}
//       ></div>
//     </div>
//   );
// };

// const Register = ({ togglePage }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setResponseMessage('Passwords do not match');
//       return;
//     }
    

//     try {
//       const response = await fetch('http://localhost:5000/api/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setResponseMessage(data.message);
//         togglePage();
//       } else {
//         const error = await response.json();
//         setResponseMessage(error.error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setResponseMessage(error.message);
//     }
//   };

//   return (
//     <div className="form-container">
//       {responseMessage && (
//         <p>{responseMessage}</p>
//       )}
//       <form className="reg-form" onSubmit={handleSubmit}>
//         <br />
//         <h2>MindCare</h2>
//         <label>
//           Name:&nbsp;
//           <input
//             type="text"
//             value={name}
//             placeholder='Name'
//             required={true}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <label>
//           Email:&nbsp;
//           <input
//             type="email"
//             value={email}
//             required={true}
//             placeholder='youremail@example.com'
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:&nbsp;
//           <input
//             type="password"
//             placeholder='*********'
//             value={password}
//             required={true}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <PasswordStrengthIndicator password={password} />
//         </label>
//         <label>
//           Confirm Password:&nbsp;
//           <input
//             type="password"
//             placeholder='*********'
//             value={confirmPassword}
//             required={true}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button className="reg" type="submit">Sign Up</button>
//       </form>
//       <button className="tog" onClick={togglePage}>
//         Switch to Login
//       </button>
//     </div>
//   );
  
// };

// export default Register;
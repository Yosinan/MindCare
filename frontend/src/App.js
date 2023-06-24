import React  from 'react';
import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';


const App = () => {

const [currentForm,setCurrentForm]=useState('login');
const toggleform=(formName)=>{
  setCurrentForm(formName);

}

  return (
    <div className='App'>
      <div>
        {
          currentForm==="login"?<Login onFormSwitch={toggleform} />:<Register onFormSwitch={toggleform}/>
        }
      </div>
      
    </div>
  )
}



export default App;

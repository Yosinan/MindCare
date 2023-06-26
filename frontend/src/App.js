import React  from 'react';
import './App.css';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Our_team from './pages/Our_team';

import ExercisesPage from './components/ExercisesPage';


const App = () => {

const [currentForm,setCurrentForm]=useState('login');
const toggleform=(formName)=>{
  setCurrentForm(formName);

}

  return (
    
    <div className="App" >
     <NavBar/>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/our-team' element={<Our_team/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/faq' element={<FAQ/>}/>
      


       
      </Routes>
    </div>

  )}


















// const App = () => {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoginPage, setIsLoginPage] = useState(true);

//   function handleLogin() {
//     setIsLoggedIn(true);
//   }

//   function toggleLoginPage() {
//     setIsLoginPage(!isLoginPage);
//   }

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         <ExercisesPage />
//       ) : isLoginPage ? (
//         <Login onLogin={handleLogin} togglePage={toggleLoginPage} />
//       ) : (
//         <Register togglePage={toggleLoginPage} />
//       )}
//     </div>
//   );

// const [currentForm,setCurrentForm]=useState('login');
// const toggleform=(formName)=>{
//   setCurrentForm(formName);

// }

//   return (
//     <div className='App'>
//       {/* <div>
//         {
//           currentForm==="login"?<Login onFormSwitch={toggleform} />:<Register onFormSwitch={toggleform}/>
//           // <ExercisesPage></ExercisesPage>
//         }
//       </div> */}
      
//     </div>
  




export default App;

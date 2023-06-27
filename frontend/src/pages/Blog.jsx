import React from 'react'
// import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

export default function Blog() {
    
  const user=true;
  return (
    <Router>
      {/* <Topbar /> */}
       <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route  path='/posts' element={<Home />}> </Route>
          
          <Route path="/post/:id" element={<Single />} > </Route>
          <Route path="/write" element={<Write />}> </Route>
          <Route path="/settings" element={<Settings />}> </Route>
       </Routes>
  
    
    </Router>
  )
}

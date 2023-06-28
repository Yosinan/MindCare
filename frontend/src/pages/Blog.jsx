import React from 'react';
import Home from './home/Home';
// import Topbar from '../components/topbar/Topbar';
import Single from './single/Single';
import Write from './write/Write';
import Settings from './settings/Settings';
import './Blog.css';
import {   Routes, Route, Link } from 'react-router-dom';
import { Router } from 'express';

export default function Blog() {
  // const user = true;

  return (
   
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={<Write />} /> 
        <Route path="/settings" element={<Settings />} />
      </Routes>
      
     
  );
}

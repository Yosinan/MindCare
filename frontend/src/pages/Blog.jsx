import React from 'react';
import Home from './home/Home';
import Single from './single/Single';
import Write from './write/Write';
import Settings from './settings/Settings';
import './Blog.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Blog() {
  // const user = true;

  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/posts" element={<Home />} />

        <Route path="/post/:id" element={<Single />} /> */}
        {/* <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
      
  
  );
}

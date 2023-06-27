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
      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/posts" element={<Home />} />

      //   <Route path="/post/:id" element={<Single />} />
      //   <Route path="/write" element={<Write />} />
      //   <Route path="/settings" element={<Settings />} />
      // </Routes>
      
      <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}

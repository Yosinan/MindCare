// import React from 'react';
// import Home from './home/Home';
// // import Topbar from '../components/topbar/Topbar';
// import Single from './single/Single';
// import Write from './write/Write';
// import Settings from './settings/Settings';
// import './Blog.css';
// import {   Routes, Route, Link } from 'react-router-dom';


// export default function Blog() {
//   // const user = true;

//   return (

    
//       <Routes>
//         {/* <Topbar /> */}
//         <Route path="/" element={<Home />} />
//         <Route path="/posts" element={<Home />} />
//         <Route path="/post/:id" element={<Single />} />
//         <Route path="/write" element={<Write />} /> 
//         <Route path="/settings" element={<Settings />} />
//       </Routes>
      
     
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "./cookieUtil";

function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
    const token = getCookie('Token');

      const response = await axios.get("http://localhost:5000/api/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },});
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title: title,
      content: content,
    };

    try {
      const token = getCookie('Token');
      await axios.post("http://localhost:5000/api/posts", postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTitle("");
      setContent("");
      fetchBlogs(); // Refresh blogs after successful post
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <div>
      <div>
        <h2>Post a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="titleInput">Title:</label>
            <input
              id="titleInput"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <label htmlFor="contentInput">Content:</label>
            <textarea
              id="contentInput"
              value={content}
              onChange={handleContentChange}
            />
          </div>
          <button type="submit">Publish</button>
        </form>
      </div>
      <div>
        <h2>Published Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;


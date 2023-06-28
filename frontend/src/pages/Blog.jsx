import React, { useState, useEffect } from "react";
import axios from "axios";
import './Blog.css';
import { getCookie } from "./cookieUtil";

function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const token = getCookie('Token');
      const response = await axios.get("http://localhost:5000/api/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setErrorMessage("Error fetching blogs. Please try again.");
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
      setSuccessMessage("post published successfully.");
    } catch (error) {
      console.error("Error posting blog:", error);
      setErrorMessage("Error posting blog. Please try again.");
    }
  };

  return (
    <div className="blog-container">
      <div className="new-blog-section">
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
      <div className="published-blogs-section">
        <h2>Published Blogs</h2>
        <div className="published-blogs-container">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

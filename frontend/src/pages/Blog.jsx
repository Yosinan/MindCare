import React, { useState, useEffect } from "react";
import axios from "axios";
import './Blog.css';
import { getCookie } from "./cookieUtil";

function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

// ...

useEffect(() => {
  // Fetch the current user information
  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem('Token');
      const response = await axios.get('http://localhost:5000/api/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = response.data;
      setCurrentUser(user);
    } catch (error) {
      console.error('Failed to fetch current user:', error);
    }
  };

  fetchCurrentUser();
}, []);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      // const token = getCookie('Token');
      const token = localStorage.getItem('Token');
      const response = await axios.get("http://localhost:5000/api/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCreatedAt(response.data.createdAt);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    //   setErrorMessage("Error fetching blogs. Please try again.");
      setMessage("Error fetching blogs. Please try again.");
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
      const token = localStorage.getItem('Token');
      // const token = getCookie('Token');
      await axios.post("http://localhost:5000/api/posts", postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTitle("");
      setContent("");
      fetchBlogs(); // Refresh blogs after successful post
    //   setSuccessMessage("post published successfully.");
    setMessage("Post published successfully.");
    } catch (error) {
      console.error("Error posting blog:", error);
    //   setErrorMessage("Error posting blog. Please try again.");
    setMessage("Error posting blog:", error);
    }
  };

  const handleEdit = async (blogId) => {
    try {
      // const token = getCookie('Token');
      const token = localStorage.getItem('Token');
      const response = await fetch(`http:localhost:5000/api/posts/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` // Include the token in the headers 
        },
        body: JSON.stringify({ /* Updated blog data */ })
      });
  
      if (response.ok) {
        // Handle successful edit
        setMessage('Blog post edited successfully!');
        // Fetch and update the blogs data
        fetchBlogs();
      } else {
        console.log('Failed to edit blog post');
      }
    } catch (error) {
      console.error('Error occurred while editing blog post:', error);
    }
  };
  
  const handleDelete = async (blogId) => {
    try {
      const token = getCookie('Token');
      const response = await fetch(`http://localhost:5000/api/posts/${blogId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}` // Include the token in the headers
        }
      });
  
      if (response.ok) {
        // Handle successful deletion
        setMessage('Blog post deleted successfully!');
        // Fetch and update the blogs data
        fetchBlogs();
      } else {
        console.log('Failed to delete blog post');
      }
    } catch (error) {
      console.error('Error occurred while deleting blog post:', error);
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
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>} */}
        {message && <p className="message">{message}</p>}
      </div>
      <div className="published-blogs-section">
        <h2>Published Blogs</h2>
        <div className="published-blogs-container">
          {blogs.map((blog) => (
            <div key={blog._id} className="blog-card">
              <h3>{blog.title}</h3>
              {/* <i className="created-at">Created At: {blog.createdAt}</i> */}
              <i className="created-at">Posted at: {new Date(blog.createdAt).toLocaleString()}</i>
              <p>{blog.content}</p>
              <p>Author: {blog.author}</p>
              <p>ID: {blog._id}</p>
              <div>
               <button onClick={() => handleEdit(blog._id)}>Edit</button>
                <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </div>
            {/* {currentUser === blog.author && (
          <div>
               <button onClick={() => handleEdit(blog.id)}>Edit</button>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
)} */}

              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

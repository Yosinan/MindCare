const Post = require('../models/postModel');

// Get all posts
const getPosts = async (req, res) => {
    try {
        // Get all posts from the MongoDB collection
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// Get a post by ID
const getPostById =  async (req, res) => {
    try {
        // Find a post by ID from the MongoDB collection
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Create a new post
const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({
            title,
            content
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Update a post
const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Delete a post
const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        res.json(deletedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {  getPosts, getPostById, createPost, updatePost, deletePost };
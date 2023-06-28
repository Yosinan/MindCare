const express = require("express");
const router = express.Router();
const {getPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/postController');

router.get('/api/posts',getPosts);
router.get('/api/posts/:id',getPostById);
router.post('/api/posts',createPost);
router.put('/api/posts/:id',updatePost);
router.delete('/api/posts/:id',deletePost);

module.exports = router;
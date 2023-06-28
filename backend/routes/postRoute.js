const express = require("express");
const router = express.Router();
const cors = require("cors");
const auth = require("../middlewares/auth");
const {getPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/postController');

router.get('/api/posts', getPosts);
router.get('/api/posts/:id',auth, getPostById);
router.post('/api/posts',auth, createPost);
router.put('/api/posts/:id',auth, updatePost);
router.delete('/api/posts/:id',auth, deletePost);

module.exports = router;
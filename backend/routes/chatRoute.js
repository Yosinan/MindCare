const express = require("express");
const router = express.Router();
const chatRoutes = require('../controllers/chatController');

app.use('/api/chat', chatRoutes);

module.exports = router;
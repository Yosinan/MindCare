const express = require("express");
const router = express.Router();
const {chatRoutes} = require('../controllers/chatController');

router.get('/api/chat', chatRoutes);

module.exports = router;
const express = require("express");
const router = express.Router();
const {getChatMessages, createChatMessage} = require('../controllers/chatController');

router.get('/api/chat',getChatMessages);
router.post('/api/chat',createChatMessage);

module.exports = router;
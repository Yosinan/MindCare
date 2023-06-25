const ChatMessage = require('../models/chatModel');

// Get all chat messages
const getChatMessages = async (req, res) => {
    try {
      // Get all chat messages from the MongoDB collection
      const chatMessages = await ChatMessage.find();
      res.json(chatMessages);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

// Create a new chat message
const createChatMessage = async (req, res) => {
    const chatMessage = new ChatMessage({
      message: req.body.message
    });
    try {
      // Save the chat message to the MongoDB collection
      const newChatMessage = await chatMessage.save();
      res.status(201).json(newChatMessage);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

module.exports = { getChatMessages, createChatMessage };
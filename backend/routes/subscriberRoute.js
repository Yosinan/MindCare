const { subscribe, unsubscribe } = require('../controllers/subscriberController');
const express = require('express');
const router = express.Router();

// Subscribe to the newsletter
router.post('/api/newsletter', subscribe);

// Unsubscribe from the newsletter
router.post('/api/newsletter', unsubscribe);

module.exports = router;

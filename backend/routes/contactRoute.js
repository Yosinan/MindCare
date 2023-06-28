const express = require("express");
const router = express.Router();

const {createContact} = require('../controllers/contactController');

router.post('/api/contact',createContact);

module.exports = router;
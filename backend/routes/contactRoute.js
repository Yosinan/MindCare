const express = require("express");
const router = express.Router();

const {createContact, getContacts} = require('../controllers/contactController');

router.post('/api/contact',createContact);
router.get('/api/contact',getContacts);

module.exports = router;
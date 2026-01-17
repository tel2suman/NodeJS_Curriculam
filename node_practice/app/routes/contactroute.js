
const express = require('express');

const contactController = require('../controllers/contactController');

const router = express.Router();

router.get('/contact', contactController.contact);

module.exports = router;
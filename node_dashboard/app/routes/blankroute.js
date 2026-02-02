
const express = require('express');

const blankController = require('../controllers/blankController');

const router = express.Router();

router.get('/blank', blankController.blank);

module.exports = router;
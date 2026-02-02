
const express = require('express');

const colorController = require('../controllers/colorController');

const router = express.Router();

router.get('/color', colorController.color);

module.exports = router;
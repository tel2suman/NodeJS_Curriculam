
const express = require('express');

const animationController = require('../controllers/animationController');

const router = express.Router();

router.get('/animation', animationController.animation);

module.exports = router;
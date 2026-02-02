

const express = require('express');

const coursesController = require('../controllers/coursesController');

const router = express.Router();

router.get('/courses', coursesController.courses);

module.exports = router;
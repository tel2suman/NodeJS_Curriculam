
const express = require('express');

const aboutController = require('../controlles/aboutController')

const router = express.Router();

router.get('/about', aboutController.about);

module.exports = router;
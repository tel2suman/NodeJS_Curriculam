
const express = require('express');

const otherController = require('../controllers/otherController');

const router = express.Router();

router.get('/other', otherController.other);

module.exports = router;
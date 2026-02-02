
const express = require('express');

const errorController = require('../controllers/errorController');

const router = express.Router();

router.get('/404', errorController.error);

module.exports = router;

const express = require('express');

const borderController = require('../controllers/borderController');

const router = express.Router();

router.get('/border', borderController.border);

module.exports = router;
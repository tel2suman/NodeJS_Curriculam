
const express = require('express');

const chartsController = require('../controllers/chartsController');

const router = express.Router();

router.get('/charts', chartsController.charts);

module.exports = router;
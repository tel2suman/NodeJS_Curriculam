
const express = require('express');

const buttonsController = require('../controllers/buttonsController');

const router = express.Router();

router.get('/buttons', buttonsController.Buttons);

module.exports = router;
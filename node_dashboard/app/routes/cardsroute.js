
const express = require('express');

const cardsController = require('../controllers/cardsController');

const router = express.Router();

router.get('/cards', cardsController.cards);

module.exports = router;
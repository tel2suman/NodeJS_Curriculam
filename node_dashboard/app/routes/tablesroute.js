
const express = require('express');

const tablesController = require('../controllers/tablesController');

const router = express.Router();

router.get('/tables', tablesController.tables);

module.exports = router;
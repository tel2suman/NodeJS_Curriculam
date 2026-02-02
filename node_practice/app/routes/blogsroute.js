
const express = require('express');

const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/blog', blogController.blogs);

module.exports = router;
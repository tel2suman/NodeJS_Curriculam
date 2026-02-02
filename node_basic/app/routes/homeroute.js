const express = require('express');

const homeController =require('../controlles/userController');

const router = express.Router();

router.get('/', homeController.index);


module.exports = router
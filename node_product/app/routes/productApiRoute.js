
const express = require('express');

const ProductApiController = require('../controllers/ProductApiController');

const router = express.Router();

router.post('/create/product', ProductApiController.createProduct);

router.get('/product', ProductApiController.viewProduct);

router.put('/update/:id', ProductApiController.updateProduct);

router.delete('/delete/:id', ProductApiController.deleteProduct);

router.get('/search', ProductApiController.searchProduct);

router.get('/filter', ProductApiController.filterProduct);

module.exports = router;
const express = require('express');
const path = require('path');
const router = express.Router();

// const rootDir = require('../util/path')


//Controllers
const productsController = require('../controllers/products');



router.get('/add-products', productsController.getAddProducts);

router.post('/add-products', productsController.addNewProduct)



module.exports = router;
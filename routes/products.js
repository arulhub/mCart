const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.controller');

router.get('/', productsController.getAllProducts);

router.get('/tablets', productsController.getAllTablets);

router.get('/mobiles', productsController.getAllMobiles);

router.post('/', productsController.addProduct);

router.put('/:productID', productsController.updateProduct);

router.delete('/:productID', productsController.deleteProduct);

module.exports = router;
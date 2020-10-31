const express = require('express');
const router = express.Router();

const cartsController = require('../controllers/carts.controller');

router.get('/', cartsController.getAllCart);

router.post('/', cartsController.addToCart);

router.get('/:userID', cartsController.getCart);

router.put('/:userID', cartsController.updateCart);

router.delete('/:userID', cartsController.deleteCart);

module.exports = router;

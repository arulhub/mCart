const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const cartsRoute = require('./carts');
const ordersRoute = require('./orders');
const productsRoute = require('../controllers/products.controller');

router.get('/login', authController.login);

router.post('/signup', authController.signup);

router.use('/carts', cartsRoute);

router.use('/orders', ordersRoute);

router.use('/products', productsRoute);

module.exports = router;

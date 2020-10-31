const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/orders.controller');

router.post('/:userID', ordersController.submitOrder);

module.exports = router;
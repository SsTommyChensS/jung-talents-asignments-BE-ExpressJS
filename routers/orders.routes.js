const express = require('express');
const router = express.Router();

const ordersValidator = require('../validators/orders.validator');
const orderController = require('../controllers/order.controller');

router.post('/order', ordersValidator.createOrder, orderController.orderItems);

module.exports = router;

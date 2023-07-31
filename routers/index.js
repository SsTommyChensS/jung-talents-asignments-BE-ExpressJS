const express = require('express');
const router = express.Router();

const orderRoutes = require('./orders.routes');

router.use(orderRoutes);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getPO } = require('../controllers/purchase-order.controller');

router.get('/', getPO);

module.exports = router;
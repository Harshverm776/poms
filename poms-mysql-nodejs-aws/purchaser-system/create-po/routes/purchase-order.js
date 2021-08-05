const express = require('express');
const router = express.Router();
const { createPO } = require('../controllers/purchase-order.controller');
const { poValidation } = require('../validation/create-po/create-po.validation');


router.post('/', poValidation, createPO);

module.exports = router;
const express = require('express');
const router = express.Router();
const {createPO, getPO, updatePoStatus} = require('../controllers/purchase-order.controller');
const { poValidation, updatePoStatusValidation } = require('../validation/purchase-order/purchase-order.validation');

router.post('/', poValidation, createPO);
router.get('/', getPO);
router.patch('/:id', updatePoStatusValidation, updatePoStatus);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getPO, createPO, updatePoStatus } = require('../controllers/purchase-order.controller');
const { poValidation } = require('../validation/create-po/create-po.validation');
const { updatePoStatusValidation } = require('../validation/update-po-status/update-po-status.validation');


router.get('/', getPO);
router.post('/', poValidation, createPO);
router.post('/:id', updatePoStatusValidation, updatePoStatus);

module.exports = router;
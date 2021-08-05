const express = require('express');
const router = express.Router();
const { updatePoStatus } = require('../controllers/purchase-order.controller');
const { updatePoStatusValidation } = require('../validation/update-po-status/update-po-status.validation');

router.post('/:id', updatePoStatusValidation, updatePoStatus);

module.exports = router;
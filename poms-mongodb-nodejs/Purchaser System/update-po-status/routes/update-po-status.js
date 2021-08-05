const express = require('express');
const router = express.Router();
const { updatePoStatus } = require('../controllers/update-po-status.controller');
const { updatePoStatusValidation } = require('../validation/update-po-status.validation');

router.post('/:id', updatePoStatusValidation, updatePoStatus);

module.exports = router;
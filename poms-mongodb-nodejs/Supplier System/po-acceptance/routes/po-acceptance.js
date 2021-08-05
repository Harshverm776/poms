const express = require('express');
const router = express.Router();
const { poAcceptance } = require('../controllers/po-acceptance.controller');
const { poAcceptanceValidation } = require('../validation/po-acceptance.validation');

router.post('/:id', poAcceptanceValidation, poAcceptance);

module.exports = router;
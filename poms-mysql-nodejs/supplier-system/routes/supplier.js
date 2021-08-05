const express = require('express');
const router = express.Router();
const { getPO, createPO, poAcceptance } = require('../controllers/supplier.controller');
const { poAcceptanceValidation } = require('../validation/po-acceptance.validation');

router.get('/', getPO);
router.post('/', createPO);
router.post('/:id', poAcceptanceValidation, poAcceptance);

module.exports = router;
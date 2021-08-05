const express = require('express');
const router = express.Router();
const {getPO, poAcceptance} = require('../controllers/supplier.controller');
const { poAcceptanceValidation } = require('../validation/supplier/supplier.validation');

router.get('/', getPO);
router.patch('/:id', poAcceptanceValidation, poAcceptance);

module.exports = router;
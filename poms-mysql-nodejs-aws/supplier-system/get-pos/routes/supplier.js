const express = require('express');
const router = express.Router();
const { getPO, createPO } = require('../controllers/supplier.controller');

router.get('/', getPO);
router.post('/', createPO);

module.exports = router;
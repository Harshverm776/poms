const express = require('express');
const router = express.Router();
const { createPO } = require('../controllers/create-po.controller');
const { poValidation } = require('../validation/create-po.validation');

router.post('/', poValidation, createPO);

module.exports = router;
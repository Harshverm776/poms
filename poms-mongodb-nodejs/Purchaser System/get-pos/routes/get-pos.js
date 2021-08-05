const express = require('express');
const router = express.Router();
const { getPO } = require('../controllers/get-pos.controller');

router.get('/', getPO);

module.exports = router;
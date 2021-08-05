const express = require('express');
const router = express.Router();
const { getPO, createPO } = require('../controllers/get-pos.controller');

router.get('/', getPO);

//Temporary
router.post('/', createPO);


module.exports = router;
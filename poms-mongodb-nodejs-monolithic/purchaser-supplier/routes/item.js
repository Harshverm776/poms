const express = require('express');
const router = express.Router();
const { createItem, getItems } = require('../controllers/item.controller');
const { itemValidation } = require('../validation/item/item.validation');

router.post('/', itemValidation, createItem);
router.get('/', getItems);

module.exports = router;
const express = require('express');
const router = express.Router();
const { createUser, getUser } = require('../controllers/user.controller');
const { userValidation } = require('../validation/user/user.validation');

router.post('/', userValidation, createUser);

router.get('/', getUser);

module.exports = router;
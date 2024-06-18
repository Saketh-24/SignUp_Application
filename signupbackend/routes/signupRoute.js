const express = require('express');
const { signupUser } = require('../Controllers/signupcontoller');
const router = express.Router();


router.post('/', signupUser);

module.exports = router;

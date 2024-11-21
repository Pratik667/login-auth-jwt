const express = require('express');
const { register, login, protected } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', protected);

module.exports = router;

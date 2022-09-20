const express = require('express');

const controller = require('../controllers/user.js');

const router = express.Router();

/* ========== Routes ========== */

router.post('/signup', controller.signup);

module.exports = router;

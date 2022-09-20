const express = require('express');

const controller = require('../controllers/index.js');

const router = express.Router();

/* ========== Routes ========== */

router.get('/', controller.hello);

module.exports = router;

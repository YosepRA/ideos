const express = require('express');

const controller = require('../controllers/user.js');
const { isLoggedIn, authenticateLogin } = require('../middlewares/index.js');

const router = express.Router();

/* ========== Routes ========== */

router.post('/signup', controller.signup);

router.post('/signin', authenticateLogin, controller.signin);

router.get('/signout', controller.signout);

router.get('/protected', isLoggedIn, controller.protected);

module.exports = router;

const express = require('express');

const controller = require('../controllers/idea.js');
const { isLoggedIn } = require('../middlewares/index.js');

const router = express.Router();

/* ======================= Routes ======================= */

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', isLoggedIn, controller.create);

router.put('/:id', isLoggedIn, controller.update);

router.delete('/:id', isLoggedIn, controller.delete);

module.exports = router;

var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');

/* GET home page. */
router.get('/users/me', userController.getCurruntUserByCookie);
router.get('/users', userController.signIn);

module.exports = router;

var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/users/sign-in', userController.getCurruntUserByCookie);
router.post('/users/sign-up', userController.getCurruntUserByCookie);
router.delete('/users/sign-out', userController.getCurruntUserByCookie);
router.get('/users/me', userController.getCurruntUserByCookie);
router.get('/users', userController.signIn);

module.exports = router;

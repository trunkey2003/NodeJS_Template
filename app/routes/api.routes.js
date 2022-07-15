var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/users/sign-up', userController.signUp);
router.post('/users/sign-in', userController.signIn);
router.delete('/users/sign-out', userController.signOut);
router.get('/users/me', userController.getCurruntUserByCookie);
router.get('/users', userController.index);

module.exports = router;

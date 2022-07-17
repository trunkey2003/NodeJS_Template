var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');
const productController = require('../controllers/product.controller');

router.post('/user/sign-up', userController.signUp);
router.post('/user/sign-in', userController.signIn);
router.delete('/user/sign-out', userController.signOut);
router.get('/user/me', userController.getCurruntUserByCookie);
router.get('/user', userController.index);

router.get('/product', productController.index);

module.exports = router;

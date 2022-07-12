var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');

/* GET home page. */
router.get('/users', userController.index);

module.exports = router;

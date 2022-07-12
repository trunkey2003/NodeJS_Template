var express = require('express');
var router = express.Router();

const exampleController = require('../controllers/example.controller');

/* GET home page. */
router.get('/', exampleController.index);

module.exports = router;

const productModel = require('../models/product.model');
const respond = require('../services/respond.service');

class productController {
    index(req, res, next) {
        productModel.find({})
            .then(function (products) {
                respond(res, 200, products);
            })
            .catch(function (err) {
                console.log(err);
                respond(res, 500, { message: "Internal Server Error" });
            })
    }
};

module.exports = new productController;

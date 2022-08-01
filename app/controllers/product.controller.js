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

    addProduct(req, res, next) {
        const product = new productModel({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            quantity: req.body.quantity
        });
        
        product.save()
            .then(function (product) {
                respond(res, 200, product);
            })
            .catch(function (err) {
                console.log(err);
                respond(res, 500, { message: "Internal Server Error" });
            })
    }
};

module.exports = new productController;

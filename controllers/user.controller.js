const userModel = require('../models/user.model');

class userController {
    index(req, res, next) {
        userModel.find({})
            .then(users => {
                res.status(200).json(users);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Internal server error" });
            })
    }
}

module.exports = new userController;
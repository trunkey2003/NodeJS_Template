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

    getCurruntUserByCookie(req, res, next) {
        res.json(req.headers);
    }
    
    signUp(req, res, next) {
        
    }
    
    signIn(req, res, next) {
        
    }


    signOut(req, res, next) {
    }
}

module.exports = new userController;
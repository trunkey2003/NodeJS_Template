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
    signIn(req, res, next) {
        res.cookie('token', 'hahahaha', {
            sameSite: 'strict',
            secure: (process.env.DEV_URL) ? false : true,
            httpOnly: true,
            maxAge: 3600000 * 24 * 7,
        }).status(200).send([]);
    }
    signUp(req, res, next) {
    }
    signOut(req, res, next) {
    }
}

module.exports = new userController;
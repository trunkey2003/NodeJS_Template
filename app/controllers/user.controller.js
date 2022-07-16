const userModel = require('../models/user.model');
const userService = require('../services/user.service');

const respond = require('../services/respond.service');

const bcrypt = require('bcrypt');
const salt = 13;

class userController {
    index(req, res, next) {
        userModel.find({})
            .then(function (users) {
                respond(res, 200, users);
            })
            .catch(function (err) {
                console.log(err);
                respond(res, 500, { message: "Internal Server Error" });
            })
    }

    getCurruntUserByCookie(req, res, next) {
        respond(res, 200, userService.readCookieToken(req, res));
    }

    async signUp(req, res, next) {
        try {
            const user = req.body;
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            user.password = hashedPassword;
            const newUser = new userModel(user);
            newUser.save()
                .then((user) => {
                    user.password = undefined;
                    respond(res, 200, user)
                })
                .catch((err) => {
                    console.log(err);
                    respond(res, 409, { message: "Username or email already exists" })
                });
        } catch (err) {
            console.log(err);
            respond(res, 500, { message: "Internal Server Error" });
        }

    }

    signIn(req, res, next) {
        try {
            userModel.findOne({ username: req.body.username })
                .then(async (user) => {
                    if (!user) {
                        respond(res, 404, { message: "User not found" });
                        return;
                    } 
                    const valid = await bcrypt.compare(req.body.password, user.password);
                    if (valid) {
                        user.password = undefined;
                        const maxAge = (req.body.rememberMe) ? (1000 * 60 * 60 * 24 * 7) : (1000 * 60 * 60 * 24);
                        userService.respondCookieToken(res, userService.generateToken(user), maxAge);
                        respond(res, 200, user);
                    } else {
                        respond(res, 401, { message: "Invalid username or password" });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    respond(res, 401, { message: "Invalid username or password" });
                });
        } catch (err) {
            console.log(err);
            respond(res, 500, { message: "Internal Server Error" });
        }
    }


    signOut(req, res, next) {
        userService.respondCookieToken(res, "Good Bye", 0);
        respond(res, 205);
    }
}

module.exports = new userController;
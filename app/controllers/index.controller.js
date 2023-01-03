const respond =  require("../services/respond.service");

class indexController {
    index(req, res) {
        respond({res, message: "API is working properly"});
    }
};

module.exports = new indexController;

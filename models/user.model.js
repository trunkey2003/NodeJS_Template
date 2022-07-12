const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    userName : {type: String, required: true, minlength: 3, maxlength: 20},
    password : {type: String, required: true},
    avatar: {type: String, required: true, default: "https://trunkey2003.github.io/general-img/default-profile-pic.jpg"},
    email : {type: String, required: true},
    fullName : {type: String, required: true, default : 'user', minlength: 3, maxlength: 50},
    phone : {type: String},
    address : {type: String},
},
{
    timestamps: true
});

module.exports = mongoose.model('user', user);
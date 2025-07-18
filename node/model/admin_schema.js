
// admin_scema.js

const { default: mongoose } = require("mongoose");

const admin_scema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        required : [true, "Email is reuired..."],
        match :  [ /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'],
    },
    password : {
        type : String,
        required :  [true, "Password is reuired..."],
        minlength: 6,
    }
})

const admin_Schema = mongoose.model('admin_scema', admin_scema);

exports.admin_Schema = admin_Schema;


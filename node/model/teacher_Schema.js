
// user_Scema.js

const { default: mongoose } = require("mongoose");

const teacher_Scema = new mongoose.Schema({
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

const teacher_Schema = mongoose.model('teacher_scema', teacher_Scema);

exports.teacher_Schema = teacher_Schema;


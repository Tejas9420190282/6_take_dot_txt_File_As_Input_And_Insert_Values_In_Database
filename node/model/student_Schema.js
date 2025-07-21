const { default: mongoose } = require("mongoose");


const student_Scema = mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        required : [true, "Email is reuired..."],
        match :  [ /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'],
    },
    class : {
        type : Number,
        required : [true, "Class is reuired..."],
    },
})

const student_Schema = new mongoose.model("student_Scema", student_Scema);

exports.student_Schema = student_Schema;


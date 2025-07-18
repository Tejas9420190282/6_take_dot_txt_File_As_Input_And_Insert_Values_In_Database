
// register_teacher_Controller.js
const bcrypt = require('bcrypt');
const { teacher_Schema } = require("../../model/teacher_Schema");

const register_teacher_Controller = async (req, res) => {
    try {
        
        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            
            console.log(`All the inputs are required...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All the inputs are required...`
            })
        }

        const isTeacherExist = await teacher_Schema.findOne({ email });

        if (isTeacherExist) {
            
            console.log(`Teacher already exist..`.bgRed);
             
            return res.status(500).json({
                success : false,
                message : `Teacher already exist..`,
            })
        }

        const hashPass = await bcrypt.hash(password, 10);

        const newTeacher = await teacher_Schema.create({
            name : name,
            email : email,
            password : hashPass
        });

        console.log(`new Teacher created...`.bgYellow);
        
        res.status(200).json({
            success : true,
            message : `new Teacher created...`,
            newAdmin : newTeacher
        })


    } catch (error) {
        
        console.log(`Error in register_teacher_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in register_teacher_Controller : ${error.message}`
        })
    }
}

exports.register_teacher_Controller = register_teacher_Controller;

// register_Student_Controller.js

const { student_Schema } = require("../../model/student_Schema");

const register_Student_Controller = async (req, res) => {
    try {
        
        const {name, email, std} = req.body;

        if (!name || !email || !std) {
            
            console.log(`All the inputs are required...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All the inputs are required...`
            })
        }

        const isStudentExist = await student_Schema.findOne({email});

        if (isStudentExist) {
            
            console.log(`Admin already exist..`.bgRed);
             
            return res.status(500).json({
                success : false,
                message : `Admin already exist..`,
            })
        };

        const newStudent = await student_Schema.create({
            name : name,
            email : email,
            std : std
        })

        console.log(`New Student craeted`.bgYellow);
        
        res.status(200).json({
            
            success : true,
            message : `New Student craeted`,
            newStudent : newStudent
        })

    } catch (error) {
        
        console.log(`Error in register_Student_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in register_Student_Controller : ${error.message}`
        })
    }
}

exports.register_Student_Controller = register_Student_Controller;
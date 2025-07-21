
// show_All_Student_Controller.js

const { student_Schema } = require("../../model/student_Schema");

const show_All_Student_Controller = async (req, res) => {
    try {
        
        const studentData = await student_Schema.find();

        console.log(`all StudentData featch successfully...`.bgYellow);
        
        res.status(200).json({
            success : true,
            message : `all StudentData featch successfully...`,
            studentData : studentData
        })

    } catch (error) {
        
        console.log(`Error in show_All_Student_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({

            success : false,
            message : `Error in show_All_Student_Controller : ${error.message}`
        })
    }
}

exports.show_All_Student_Controller = show_All_Student_Controller;


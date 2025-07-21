
// show_All_Teacher_Controller.js

const { teacher_Schema } = require("../../model/teacher_Schema");

const show_All_Teacher_Controller = async (req, res) => {
    try {

        const allTeachers = await teacher_Schema.find();

        const teachersData = allTeachers.map((teacher, index) => ({ "Name" : teacher.name, "Email" : teacher.email }))

        console.log(`All Teachers data featch...`.bgYellow);
        
        res.status(200).json({
            
            success : true,
            message : `All Teachers data featch...`,
            allTeacher : teachersData
        })

        
    } catch (error) {

        console.log(`Error in show_All_Teacher_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            
            success : false,
            message : `Error in show_All_Teacher_Controller : ${error.message}`,
        })
    }
}

exports.show_All_Teacher_Controller = show_All_Teacher_Controller;


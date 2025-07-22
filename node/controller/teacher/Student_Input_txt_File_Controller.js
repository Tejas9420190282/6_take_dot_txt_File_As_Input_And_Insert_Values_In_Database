
// Student_Input_txt_File_Controller.js

const fs = require('fs');
const path = require('path');
const { student_Schema } = require('../../model/student_Schema');


const Student_Input_txt_File_Controller = async (req, res) => {
    try {
        
        const filePath = req.file.path;

        const fileContent = fs.readFileSync(filePath, "utf8");

        // Assuming each line contains: name,email,std
        const line = fileContent.split("\n").filter(line => line.trim() !== "");

        const students = line.map(line => {
            const [name, email, std] = line.trim().split(",");

            return {
                name : name.trim(),
                email : email.trim(),
                std : parseInt(std.trim())
            };
        });

        await student_Schema.insertMany(students, {ordered : false});

        console.log(`Students inserted: ${students.length}`);
        
        res.status(200).json({
            success: true,
            message: `${students.length} students inserted successfully.`
        });

    } catch (error) {
        
        console.log(`Error in Student_Input_txt_File_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in Student_Input_txt_File_Controller : ${error.message}`,
        })
    }
}

exports.Student_Input_txt_File_Controller = Student_Input_txt_File_Controller;




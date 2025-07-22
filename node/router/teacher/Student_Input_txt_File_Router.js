
// Student_Input_txt_File_Router.js

const express = require('express');
const { Student_Input_txt_File_Controller } = require('../../controller/teacher/Student_Input_txt_File_Controller');
const { multer_Middleware } = require('../../uploads/multer_Middleware');


const Student_Input_txt_File_Router = express.Router();

Student_Input_txt_File_Router.post("/insert-student-txt-file", multer_Middleware.single("file"), Student_Input_txt_File_Controller);

exports.Student_Input_txt_File_Router = Student_Input_txt_File_Router;


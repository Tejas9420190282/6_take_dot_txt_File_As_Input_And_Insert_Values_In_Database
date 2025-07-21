
// register_Student_Router.js

const express = require('express');
const { register_Student_Controller } = require('../../controller/teacher/register_Student_Controller');

const register_Student_Router = express.Router();

register_Student_Router.post("/register-student", register_Student_Controller);

exports.register_Student_Router = register_Student_Router;


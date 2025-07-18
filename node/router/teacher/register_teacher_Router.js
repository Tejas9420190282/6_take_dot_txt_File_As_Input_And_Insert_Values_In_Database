
// register_teacher_Router.js

const express = require('express');
const { register_teacher_Controller } = require('../../controller/teacher/register_Teacher_Controller');

const register_teacher_Router = express.Router();

register_teacher_Router.post(`/register-teacher`, register_teacher_Controller);

exports.register_teacher_Router = register_teacher_Router;



// show_All_Student_Router.js

const express = require('express');
const { show_All_Student_Controller } = require('../../controller/admin/show_All_Student_Controller');

const show_All_Student_Router = express.Router();

show_All_Student_Router.get('/get-all-teachers', show_All_Student_Controller);

exports.show_All_Student_Router = show_All_Student_Router;



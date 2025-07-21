
// show_All_Teacher_Router.js

const express = require('express');
const { show_All_Teacher_Controller } = require('../../controller/admin/show_All_Teacher_Controller');

const show_All_Teacher_Router = express.Router();

show_All_Teacher_Router.get("/show-all-teacher", show_All_Teacher_Controller);

exports.show_All_Teacher_Router = show_All_Teacher_Router;


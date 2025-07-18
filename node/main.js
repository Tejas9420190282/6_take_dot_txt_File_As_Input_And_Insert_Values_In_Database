
const express = require('express');
const colors = require('colors');
const { connectDB } = require('./config/db');
const { register_Admin_Router } = require('./router/admin/register_Admin_Router');
const { register_teacher_Router } = require('./router/teacher/register_teacher_Router');
const { login_Router } = require('./router/login_Router');
;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(login_Router);

// admin
app.use(register_Admin_Router);

// teacher
app.use(register_teacher_Router);

const PORT = 7878;

const startServer = async () => {
    try {

        await connectDB();

        app.listen(PORT, () => {

            console.log(`Serer running on http://localhost:${PORT}`.bgGreen);
        })
    } catch (error) {
        
        console.log(`Error in start server : ${error.message}`.bgRed); 
    }
}

startServer();






const express = require('express');
const colors = require('colors');
const { connectDB } = require('./config/db');

const app = express();

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





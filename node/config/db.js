
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        
        mongoose.connect('mongodb://127.0.0.1:27017/insert_values_of_file')
  
        console.log(`Database connected successfully`.bgGreen);

    } catch (error) {
        
        console.log(`Error in DB Connection..`.bgRed);
    }
}

exports.connectDB = connectDB;
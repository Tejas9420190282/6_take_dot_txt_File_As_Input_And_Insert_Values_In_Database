
// login_Controller.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { admin_Schema } = require("../model/admin_schema");
const { teacher_Schema } = require('../model/teacher_Schema');

const login_Controller = async (req, res) => {

    const SECRET_KEY = 'secret-key';

    try {

        const { email, password} = req.body;

        if (!email || !password) {
            
            console.log(`All the inputs are required...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All the inputs are required...`
            })
        }

        const isAdminExist = await admin_Schema.findOne({ email });

        if (isAdminExist) {
            
            const isMatch = await bcrypt.compare(password, isAdminExist.password);

            if (!isMatch) {
                
                console.log(`Incorrect password...`.bgRed);
                
                return res.status(500).json({
                    success : false,
                    message : `Incorrect password...`
                });
            }

            const token = await jwt.sign({email : email}, SECRET_KEY, {expiresIn: "1h"});

            console.log('Admin signin Succesfully....'.bgYellow);

            return res.status(200).json({
                success : true,
                message : 'Admin signin Succesfully....',
                token : token,
                redirect : "/admin/home"
            });
        }


        const isTeacherExist = await teacher_Schema.findOne({ email });

        if (teacher_Schema) {
            
            const isMatch = await bcrypt.compare(password, isTeacherExist.password);

            if (!isMatch) {
                
                console.log(`Incorrect password...`.bgRed);
                
                return res.status(500).json({
                    success : false,
                    message : `Incorrect password...`
                });
            }

            const token = await jwt.sign({email : email}, SECRET_KEY, {expiresIn: "1h"});

            console.log('Teacher signin Succesfully....'.bgYellow);

            return res.status(200).json({
                success : true,
                message : 'Teacher signin Succesfully....',
                token : token,
                redirect : "/teacher/home"
            });
        }

        console.log(`Username not found`);
        
        res.status(500).json({
            success : false,
            message : 'Username not found'
        });

        
    } catch (error) {
        
        console.log(`Error in login_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            
            success : false,
            message : `Error in login_Controller : ${error.message}`,
        })
    }
}

exports.login_Controller = login_Controller;
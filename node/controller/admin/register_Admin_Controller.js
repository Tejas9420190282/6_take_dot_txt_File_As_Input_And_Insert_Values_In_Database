
// register_Admin_Controller.js

const { admin_Schema } = require("../../model/admin_schema");
const bcrypt = require('bcrypt');

const register_Admin_Controller = async (req, res) => {
    try {
        
        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            
            console.log(`All the inputs are required...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All the inputs are required...`
            })
        }

        const isAdminExist = await admin_Schema.findOne({ email });

        if (isAdminExist) {
            
            console.log(`Admin already exist..`.bgRed);
             
            return res.status(500).json({
                success : false,
                message : `Admin already exist..`,
            })
        }

        const hashPass = await bcrypt.hash(password, 10);

        const newAdmin = await admin_Schema.create({
            name : name,
            email : email,
            password : hashPass
        })

        console.log(`admin created...`.bgYellow);
        
        res.status(200).json({
            success : true,
            message : `admin created...`,
            newAdmin : newAdmin,
            redirect : "/login",
        })

    } catch (error) {
        
        console.log(`Error in register_Admin_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            
            success : false,
            message : `Error in register_Admin_Controller : ${error.message}`,
        })
    }
}

exports.register_Admin_Controller = register_Admin_Controller;


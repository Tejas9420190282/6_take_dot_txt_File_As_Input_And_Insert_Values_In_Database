
import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Admin_Add_Teacher() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [msg, setMsg] = useState("");

    console.log("msg : ", msg);
    

    const navigate = useNavigate(); 

    const handleRegisterSubmit = async (e) => {
        
        e.preventDefault();

        const responce = await axios.post("http://localhost:7878/register-teacher", {
            name, email, password
        });

        if (responce.data.message) {
            
            setMsg(responce.data.message);
        }
            
        if (responce.data.message) {
                
            setMsg(responce.data.message);
        }
    };
    
    return (
        <>
            <form
                onSubmit={handleRegisterSubmit}
                className="flex justify-center items-center flex-col gap-3"
            >
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-black px-3 py-2 text-white "
                    placeholder="Enter your Name"
                />

                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black px-3 py-2 text-white "
                    placeholder="Enter your Email"
                />

                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-black px-3 py-2 text-white "
                    placeholder="Enter your Password"
                />

                <button
                    type="submit"
                    className="bg-blue-500 px-2 py-1.5 rounded text-black font-bold text-center my-auto cursor-pointer"
                >
                    Register Teacher
                </button>
            </form>

            <p className="bg-red-500 text-2xl mt-10 ">{msg}</p>
        </>
    )
}

export default Admin_Add_Teacher;



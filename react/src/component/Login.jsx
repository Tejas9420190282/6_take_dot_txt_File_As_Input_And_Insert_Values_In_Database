
// Login.jsx

import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Login() {
    
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    
    const [msg, setMsg] = useState("");

    const navigate = useNavigate(); 

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const responce = await axios.post("http://localhost:7878/login", {
            email, password
        });

        if (responce.data.success) {

            if (responce.data.redirect) {
                
                navigate(responce.data.redirect);
            }
            
            if (responce.data.message) {
                
                setMsg(responce.data.message);
            }
        }
    };

    return (
        <>
            <form
                onSubmit={handleLoginSubmit}
                className="flex justify-center items-center flex-col gap-3"
            >
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

                <p className="text-red-500 text-3xl">{msg}</p>
            </form>
        </>
    )
}

export default Login;



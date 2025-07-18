// Login.jsx

import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        
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
                    onChange={(e) => setEmail(e.target)}
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
                    Login
                </button>
            </form>
        </>
    );
}

export default Login;

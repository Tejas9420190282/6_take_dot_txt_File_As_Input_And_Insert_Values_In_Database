// Teacher_Register_Student.jsx
import axios from "axios";
import React, { useState } from "react";
import Teacher_Navbar from "./Teacher_Navbar";

function Teacher_Register_Student() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [std, setStd] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:7878/register-student",
                {
                    name,
                    email,
                    std,
                }
            );

            if (response.data.message) {
                setMsg(response.data.message);
                setName("");
                setEmail("");
                setStd("1");
            }
        } catch (error) {
            console.log("Registration error:", error.message);
            setMsg("Something went wrong!");
        }
    };

    return (
        <>
            <Teacher_Navbar />
            <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Register Student
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Class
                        </label>
                        <select
                            value={std}
                            onChange={(e) => setStd(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
                    >
                        Register Student
                    </button>
                </form>

                {msg && (
                    <p className="mt-4 text-center text-lg text-green-600 font-medium">
                        {msg}
                    </p>
                )}
            </div>
        </>
    );
}

export default Teacher_Register_Student;


// Teacher_Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

function Teacher_Navbar() {
    return (
        <>
            <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo or Title */}
                    <h1 className="text-xl font-bold">Teacher Dashboard</h1>

                    {/* Navigation Links */}
                    <ul className="flex gap-6">
                        <li>
                            <Link  
                                to="/teacher/home"
                                className="hover:text-yellow-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/teacher/register-student"
                                className="hover:text-yellow-300"
                            >
                                Register Student
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/teacher/student-form"
                                className="hover:text-yellow-300"
                            >
                                Students form
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-yellow-300">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Teacher_Navbar;







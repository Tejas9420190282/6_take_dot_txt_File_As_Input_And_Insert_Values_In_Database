import React from "react";
import { Link } from "react-router-dom";

function Admin_Navbar() {
    return (
        <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or Title */}
                <h1 className="text-xl font-bold">Admin Dashboard</h1>

                {/* Navigation Links */}
                <ul className="flex gap-6">
                    <li>
                        <Link to="/admin/home" className="hover:text-yellow-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin/add-teacher" className="hover:text-yellow-300">Add Teacher</Link>
                    </li>
                    <li>
                        <Link to="/admin/show-all-teachers" className="hover:text-yellow-300">show All Teachers</Link>
                    </li>
                    <li>
                        <Link to="/admin/show-all-students" className="hover:text-yellow-300">show All Students</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-yellow-300">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Admin_Navbar;

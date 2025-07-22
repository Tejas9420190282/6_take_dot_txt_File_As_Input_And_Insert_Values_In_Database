// UploadStudentFile.jsx

// UploadStudentFile.jsx

import React, { useState } from "react";
import axios from "axios";
import Admin_Navbar from "../admin/Admin_Navbar";

function UploadStudentFile() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setMessage("Please select a .txt file");
            return;
        }

        const formData = new FormData();
        formData.append("file", file); // 👈 "file" must match the multer field name

        try {
            const res = await axios.post(
                "http://localhost:7878/insert-student-txt-file",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setMessage(res.data.message);
        } catch (error) {
            setMessage(
                error.response?.data?.message ||
                    "Upload failed. Please try again."
            );
        }
    };

    return (
        <>
            <Admin_Navbar />
            <div className="p-6 max-w-md mx-auto bg-gray-900 rounded-lg shadow-md text-white mt-20">
                <h2 className="text-xl font-bold mb-4">
                    Upload Student .txt File
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="file"
                        accept=".txt"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-300
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-500 file:text-white
                    hover:file:bg-blue-600"
                    />

                    <button
                        type="submit"
                        className="bg-green-500 px-4 py-2 rounded text-black font-semibold hover:bg-green-600"
                    >
                        Upload
                    </button>
                </form>

                {message && <p className="mt-4 text-yellow-300">{message}</p>}
            </div>
        </>
    );
}

export default UploadStudentFile;

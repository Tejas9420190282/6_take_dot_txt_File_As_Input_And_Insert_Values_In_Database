
// Show_All_Student.jsx

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Admin_Navbar from './Admin_Navbar';

function Show_All_Student() {
    
    const [students, setStudent] = useState([]);

    useEffect(() => {

        const featchStudent = async () => {
            try {
                
                const responce = await axios.get(`http://localhost:7878/get-all-teachers`);

                if (responce.data.success) {
                    
                    if (responce.data.studentData) {
                        setStudent(responce.data.studentData);
                    }
                }

            } catch (error) {
                
                console.log(`Error in featchStudent : ${error.message}`);
            }
        }

        featchStudent();

    }, [])

    return (
        <>
            <Admin_Navbar />
            <div className='mt-15'>
                <ul> 
                    { 
                        students.map((s, index)=> (
                            <li><strong>Name : </strong>{s.name}
                            <p><strong>Email : </strong>{s.email}</p>
                            <p><strong>Class : </strong>{s.std}</p></li>
                        ) ) 
                    }

                    <p className='m-5'>---------------</p>
                </ul>
            </div>
        </>
    )
}

export default Show_All_Student

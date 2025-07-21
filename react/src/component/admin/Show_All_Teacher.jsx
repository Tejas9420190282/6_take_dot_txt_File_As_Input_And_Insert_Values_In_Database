
// Show_All_Teacher.jsx

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Admin_Navbar from './Admin_Navbar';

function Show_All_Teacher() {

    const [teacher, setTeacher] = useState([]);

    useEffect(() => {
      
        const featchAllTeachersData = async () => {
            try {
                
                const responce = await axios.get(`http://localhost:7878/show-all-teacher`);

                if (responce.data.success) {
                    
                    if (responce.data.allTeacher) {

                        setTeacher(responce.data.allTeacher);
                    }
                }

            } catch (error) {
                
                console.log(`Error in featchAllTeachersData : ${error.message}`);            
            }
        }

        featchAllTeachersData();

    }, [])


    return (
        <>
            <Admin_Navbar />
            <ul className='mt-12'>
                {teacher.map((t,index) => (
                    <ul className='flex gap-10 text-center mt-3'>
                        <li>{index})</li>
                        <li><strong>Name : </strong>{t.Name}</li>

                        <li><strong>Email : </strong>{t.Email}</li>
                    </ul>
                ))}
            </ul>
        </>
    )
}

export default Show_All_Teacher

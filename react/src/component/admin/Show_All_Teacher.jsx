
// Show_All_Teacher.jsx

import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
            <ul>
                {teacher.map((t,index) => (
                    <ul>
                        <li><strong>Name : </strong>{t.Name}</li>

                        <li><strong>Email : </strong>{t.Email}</li>

                        <p className='m-4'>----------</p>
                    </ul>
                ))}
            </ul>
        </>
    )
}

export default Show_All_Teacher

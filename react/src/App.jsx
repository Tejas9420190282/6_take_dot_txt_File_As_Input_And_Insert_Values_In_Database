// App.jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Teacher_Home from "./component/teacher/Teacher_Home";
import Admin_Home from "./component/admin/Admin_Home";
import Admin_Add_Teacher from "./component/admin/Admin_Add_Teacher";
import Show_All_Teacher from "./component/admin/Show_All_Teacher";
import Show_All_Student from "./component/admin/Show_All_Student";
import Teacher_Register_Student from "./component/teacher/Teacher_Register_Student";
import UploadStudentFile from "./component/teacher/UploadStudentFile";


function App() {
     const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/admin/home",
            element: (
                <>
                    <Admin_Home />
                </>
            ),
        },
        {
            path: "/admin/add-teacher",
            element: (
                <>
                    <Admin_Add_Teacher />
                </>
            ),
        },
        {
            path: "/admin/show-all-teachers",
            element: (
                <>
                    <Show_All_Teacher />
                </>
            ),
        },
        {
            path: "/admin/show-all-students",
            element: (
                <>
                    <Show_All_Student />
                </>
            ),
        },

        {
            path: "/teacher/home",
            element: <Teacher_Home />,
        },  
        {
            path: "/teacher/register-student",
            element: <Teacher_Register_Student />,
        },
        {
            path: "/teacher/student-form",
            element: <UploadStudentFile />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} /> 

        </>
    );
}

export default App;




// App.jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Teacher_Home from "./component/teacher/Teacher_Home";
import Admin_Home from "./component/admin/Admin_Home";
import Admin_Add_Teacher from "./component/admin/Admin_Add_Teacher";
import Show_All_Teacher from "./component/admin/Show_All_Teacher";


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
            path: "/teacher/home",
            element: <Teacher_Home />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} /> 

        </>
    );
}

export default App;




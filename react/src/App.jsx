// App.jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Teacher_Home from "./component/teacher/Teacher_Home";
import Admin_Home from "./component/admin/Admin_Home";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
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




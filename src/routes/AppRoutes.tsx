import { useState } from "react";
import { getRoutes } from "./routes";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
const AppRoutes = () => {
    const [user, setUser] = useState<Boolean>(false);
    const router = createBrowserRouter(getRoutes(user));
    return (
        <RouterProvider router={router}/>
    );
};

export default AppRoutes;
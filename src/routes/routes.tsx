import AuthLayout from "@/pages/auth/Layout";
import LoginPage from "@/pages/auth/Login";
import SignUpPage from "@/pages/auth/SignUp";
import { Navigate } from "react-router-dom";

export const getRoutes = (user:Boolean)=>[
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to={user ? "/dashboard" : "/auth/login"} />,
  },
];
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "@/pages/auth/Layout";
import LoginPage from "@/pages/auth/Login";
import SignUpPage from "@/pages/auth/SignUp";
import { useState } from "react";
const AppRoutes = () => {
    const [user, setUser] = useState<Boolean>(false);
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth Layout */}
                <Route path="/auth" element={<AuthLayout/>}>
                  <Route path="login" element={<LoginPage />} />
                  <Route path="signup" element={<SignUpPage />} />
                  
                </Route>

                {/* Redirect Root */}
                <Route path="/" element={<Navigate to={user ? "/dashboard" : "/auth/login"} />} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/authProvider";

export default function ProtectedRoute() {
    const auth = useAuth();
    
    if (auth.isAuthenticated === false) {
        return <Navigate to="/SignIn" />;
    }
    
    return (
        <>
        <Outlet />
        </>
    );
}


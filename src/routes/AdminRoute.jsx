import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const AdminRoute = ({children}) => {
    const {user, role, loading} = useAuth();
    
     if (loading) return <LoadingSpinner />
    
    // if(role !== "admin"){
    //     return <Navigate to="/" />
    // }
  return children ;
};

export default AdminRoute;

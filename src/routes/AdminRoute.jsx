import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";

const AdminRoute = ({children}) => {
    const {loading} = useAuth();
    const {role} = useRole()
    
     if (loading) return <LoadingSpinner />
    
    if(role !== "admin"){
        return <Navigate to="/" />
    }
  return children ;
};

export default AdminRoute;

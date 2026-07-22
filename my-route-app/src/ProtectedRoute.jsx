import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const isLoggedin = localStorage.getItem("usr"); 

  return isLoggedin == 'admin' || isLoggedin  == 'user' ? children : <Navigate to='/login'/>
}

export default ProtectedRoute

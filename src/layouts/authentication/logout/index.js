import React from 'react'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate();

    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate('authentication/sign-in')
  return (
    <div></div>
  )
}

export default Logout
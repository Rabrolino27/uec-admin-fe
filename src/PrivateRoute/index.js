import React, {useState} from "react";
import { Navigate } from "react-router-dom";
// import { useLocalState } from "../util/useLocalStorage";


const PrivateRoute = ({ children }) => {
 
    var datakey = 0;
    if(document.cookie != null && document.cookie != undefined && document.cookie.includes('auth')){
    // if(document.cookie.includes('auth')){
    //     console.log('abcd')
    console.log('abcdd')

       datakey = 'authenticated'
     }

    // console.log(datakey.length)
    return datakey == 'authenticated' ? children : <Navigate to ="/authentication/sign-in" />;
   
    
}
export default PrivateRoute;
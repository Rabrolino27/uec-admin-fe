import axios from "axios"
import {url} from "../api"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export const signUp = (user) => {
    return (dispatch) => {
        axios
        .post(`${url}/me`, user, {
            headers: {
              'Content-Type': 'application/json'
            } })
        .then(token => {

            localStorage.setItem("token", token.data.token)
            localStorage.setItem("name", token.data.user['first_name'])
            dispatch({
                type: "SIGN_UP",
                token : token.data.token,
                first_name : token.data.user['first_name']
            })
        }).catch(error => {
            console.log(error.message)

            toast.error(error.response?.data, {
                position : toast.POSITION.BOTTOM_RIGHT
            }) 
        })
    }
};
export const signIn = (creds) => {
    return (dispatch) => {
        axios
        .post(`${url}/tokens`, creds, {
            headers: {
              'Content-Type': 'application/json'
            } })
        .then(token => {

            localStorage.setItem("token", token.data.token)
            localStorage.setItem("name", token.data.user['first_name'])
            dispatch({
                type: "SIGN_IN",
                token : token.data.token,
                first_name : token.data.user['first_name']
            })
        }).catch(error => {
            console.log(error.message)

            toast.error(error.response?.data, {
                position : toast.POSITION.BOTTOM_RIGHT
            }) 
        })
    }
};

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token
        const first_name = localStorage.getItem("name")
        if(token){
            dispatch({
                type : "USER_LOADED",
                token,
                first_name
            })
            
        }else return null
    }
}
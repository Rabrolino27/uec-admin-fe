/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React,{ useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import {useDispatch, useSelector} from 'react-redux' 
import {Navigate} from "react-router-dom"

import {userName, userPass, userEmail} from '../../../reducers/authReducer';

//axios
// import axios from 'axios';


//import api
import {url} from '../../../api/index'
// import {signUp} from 'actions/authActions'

const SignUp = () => {


    const email = useSelector((state) => state.auth.user.email)
    const name = useSelector((state) => state.auth.user.name)
    const password = useSelector((state) => state.auth.user.password)
    const user = useSelector((state) => state.auth.user)

    // console.log(auth)
        const dispatch = useDispatch();

       

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        // setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const handleChange = (prop) => (e) => {
        // dispatch(inputUser({type : [prop], value : e.target.value}))
      }
      
      const handlePasswordChange = (prop) => (e) => {
      //  setUser({...user,  [prop]: e.target.value})
      }

       const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user)
        // const jUser = JSON.stringify(user);
        await axios.post(`${url}/register`, user).then((response) => {
          // console.log(response.data.user)
          localStorage.setItem('user', response.data.user.email)
        }).catch((err) => {console.log(err);})
        
       } 
      
      //  if(auth.token) return <Navigate to="/dashboard" />
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout
      title="Welcome!"
      description=""
      image={curved6}
    >
      <Card>
        <SuiBox p={3} mb={1} textAlign="center">
          <SuiTypography variant="h5" fontWeight="medium">
            Register Your Account
          </SuiTypography>
        </SuiBox>
        <form>
                <SuiBox pt={2} pb={3} px={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput placeholder="Name" value={name} onChange={(e) => dispatch(userName({name: e.target.value}))}  />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="email" placeholder="Email" value={email} onChange={(e) => dispatch(userEmail({email: e.target.value}))} />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="password" placeholder="Password" onChange={(e) => dispatch(userPass({password: e.target.value}))}
        value={password}/>
            </SuiBox>
            <SuiBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SuiTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SuiTypography>
              <SuiTypography component="a" href="#" variant="button" fontWeight="bold" textGradient>
                Terms and Conditions
              </SuiTypography>
            </SuiBox>
            <SuiBox mt={4} mb={1}>
              <SuiButton variant="gradient" color="dark" fullWidth  onClick={handleSubmit}>
                sign up
              </SuiButton>
              
            </SuiBox>
            
            <SuiBox mt={3} textAlign="center">
              <SuiTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SuiTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SuiTypography>
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </SuiBox>
        </form>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;

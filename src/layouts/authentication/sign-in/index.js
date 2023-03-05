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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import { rawUrl } from "api"
import axios from "axios"


function SignIn() {
  const navigate = useNavigate();

  const [user, SetUser] = useState({
    email : '',
    password : ''
})
  const [rememberMe, setRememberMe] = useState(true);
  

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user)
    await axios.post(`${rawUrl}/auth/login`, user).then((response) => {
      if(response.data.status == 200){
        const d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        const cvalue = response.data.message;
        let expires = "expires="+ d.toUTCString();
        document.cookie = "auth=" + cvalue + ";" + expires + ";path=/";
        navigate("/dashboard")
      }
    }).catch((err) => {console.log(err);})
   
  }
  
  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SuiBox component="form" role="form">
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption"  fontWeight="bold">
              Email
            </SuiTypography>
          </SuiBox>
          <SuiInput type="email" value={user.email} placeholder="Email" onChange={(e) => {SetUser({...user, email : e.target.value})}} />
        </SuiBox>
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SuiTypography>
          </SuiBox>
          <SuiInput type="password"  value={user.password} placeholder="Password" onChange={(e) => {SetUser({...user, password : e.target.value})}} />
        </SuiBox>
        <SuiBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SuiTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SuiTypography>
        </SuiBox>
        <SuiBox mt={4} mb={1}>
          <SuiButton onClick={handleSubmit} variant="gradient" color="info" fullWidth>
            sign in
          </SuiButton>
        </SuiBox>
        {/* <SuiBox mt={3} textAlign="center">
          <SuiTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SuiTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SuiTypography>
          </SuiTypography>
        </SuiBox> */}
      </SuiBox>
    </CoverLayout>
  );
}

export default SignIn;

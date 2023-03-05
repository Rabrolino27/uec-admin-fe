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
//header imports
import { useState, useEffect, createContext } from "react";

// @mui material components
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

// Soft UI Dashboard React components
import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard React examples
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard React icons
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";

// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
// import burceMars from "assets/images/bruce-mars.jpg";
import curved0 from "assets/images/curved-images/curved0.jpg";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Profile from './Profile';
import Maintenance from './Maintenance';
import Movement from './Movement';


// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "components/Assetdetail/components/Header";
import PlatformSettings from "components/Assetdetail/components/PlatformSettings";

// Data
import profilesListData from "components/Assetdetail/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
// import React,{useContext} from 'react'


//css
import './index.css'
import { TextField } from "@mui/material";
//tab value
// import {tabValue} from "./components/Header";


function OverviewT() {

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
   useEffect(() => {
     // A function that sets the orientation state of the tabs.
     function handleTabsOrientation() {
       return window.innerWidth < breakpoints.values.sm
         ? setTabsOrientation("vertical")
         : setTabsOrientation("horizontal");
     }
 
     
    
 
 
   
 
     /** 
      The event listener that's calling the handleTabsOrientation function when resizing the window.
     */
     window.addEventListener("resize", handleTabsOrientation);
 
     // Call the handleTabsOrientation function to set the state with the initial value.
     handleTabsOrientation();
 
     // Remove event listener on cleanup
     return () => window.removeEventListener("resize", handleTabsOrientation);
   }, [tabsOrientation]);
 
   const handleSetTabValue = (event, newValue) => setTabValue(newValue);
   console.log(tabValue)

  
  return (
    <DashboardLayout>
     
     <SuiBox position="relative">
      <DashboardNavbar absolute light />
      <SuiBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="150px"
        // marginTop="300px"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.9),
              rgba(gradients.info.state, 0.9)
            )}, url(${curved0})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
          marginTop:"-4px",
        }}
      >
       <Grid container spacing={3} alignItems="center">
          
          <Grid item>
            <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                ASSET NAME
              </SuiTypography>
              <SuiTypography variant="button" color="text" fontWeight="medium">
              ASSET ID
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: "transparent" }}
              >
                <Tab label="Details" icon={<Cube />} />
                <Tab label="Maintenance" icon={<Settings />} />
                <Tab label="Movement" icon={<AirportShuttleIcon />} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </SuiBox>
      <SuiBox mt={5} mb={3}>
        <Grid container spacing={3}>
        { tabValue == 0 ? <Profile aid=""  /> : tabValue == 1 ? <Maintenance /> : tabValue == 2 ? <Movement /> : '' }
         {/* <Profile />

         <Maintenance />

         <Movement />
          */}
        </Grid>
      </SuiBox>
   

     
    </DashboardLayout>
  );
}

export default OverviewT;

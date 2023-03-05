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

// @mui material components
import React, {useLayoutEffect, useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Button, Card, TextField } from "@mui/material";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

import { url } from 'api';
import axios from 'axios';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components

import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

function Dashboard() {

  const [events, SetEvents] = useState([
  ]);
  const [testimony, SetTestimony] = useState([]);

  const [data, SetData] = useState(false);


  useEffect(async(e) => {
    await axios.get(`${url}/dashboard`).then((response) => {
     SetEvents(response.data.events);
    
            setDatatable({columns: [
              {
                label: 'Event Name',
                field: 'name',
                width: 150,
                attributes: {
                  'aria-controls': 'DataTable',
                  'aria-label': 'name',
                },
              },
              {
                label: 'Event Date',
                field: 'date',
                width: 100,
              },
             
              {
                label: 'Event Details',
                field: 'details',
                width: 140,
              }
            ],
        
            rows:response.data.events})
           SetTestimony(response.data.testimonies);
           SetData(true);
    }).catch((err) => {console.log(err);})
  }, []);

  const [datatable, setDatatable] = React.useState({});
 
  
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "Total  Testimonies" }}
                count={testimony.length}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "Total Events" }}
                count={events.length}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
        <Grid container spacing={5}>
            <Grid item xs={12} lg={12}>
            <Card>
             <SuiTypography component="div" variant="h6" py={1} px={0.5} fontWeight="medium" textTransform="capitalize" color="blue"> Upcoming Events</SuiTypography>
             {events.length > 0 ?   <table id="example" class="table table-hover">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Event Details</th>
            </tr>
          </thead>
          <tbody>
          {events.map((result) => {
            return (
             
                 <tr>
                  <td>{result.name}</td>
                  <td>{result.date}</td>
                  <td>{result.details}</td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table> : '' }
        
          
          </Card>
            </Grid>
           
          </Grid>
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
           
          </Grid>
         
        </Grid>
      </SuiBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;

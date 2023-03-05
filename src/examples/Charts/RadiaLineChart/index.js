import React from 'react'
import {
    // main component
    Chart,
    // graphs
    Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
    // wrappers
    Layer, Animate, Transform, Handlers,
    // helpers
    DropShadow, Gradient
  } from 'rumble-charts';

import Card from "@mui/material/Card";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

  const series = [{
    data: [1, 3, 2, 5, 7]
}, {
    data: [5, 11, 7, 13, 19]
}, {
    data: [13, 19, 17, 23, 29]
},

{
  data: [31, 35, 33, 39, 45]
},

{
  data: [40, 45, 43, 49, 55]
},


];

const RadiaLineChart = ({title, description}) => {
  return (
    <Card>
      <SuiBox mt={2} ml={3}>
      <SuiTypography variant="h6">{title}</SuiTypography>
      <SuiTypography variant="h6">{description}</SuiTypography>

      </SuiBox>
    <SuiBox mb={2}>
    <Chart width={400} height={400} series={series} minY={0}>
    <RadialLines />
    </Chart>
    </SuiBox>
  </Card>

   
  )
}

export default RadiaLineChart
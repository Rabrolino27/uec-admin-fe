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
  data: [1, 2, 4]
}];

const PieChart = ({title, description}) => {
  return (
    <Card>
      <SuiBox mt={2} ml={3}>
      <SuiTypography variant="h6">{title}</SuiTypography>
      <SuiTypography variant="h6">{description}</SuiTypography>

      </SuiBox>
    <SuiBox mb={2} ml={5}>
    <Chart width={400} height={400} series={series}>
      <Transform method={['transpose', 'stack']}>
        <Pies combined={true} innerRadius={100}/>
      </Transform>
  </Chart>
    </SuiBox>
  </Card>

   
  )
}

export default PieChart
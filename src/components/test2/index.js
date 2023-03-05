import React, {useState} from 'react'
import { configureStore } from '@reduxjs/toolkit'
import SuiBox from 'components/SuiBox'
import { Card, Grid } from '@mui/material'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
// import { createSlice, configureStore } from '@reduxjs/toolkit'

const OverviewT = () => {

const [durationError, setDE] = useState(false)
const [data, setData] = useState({
    name : '',
    ratings : 0,
    duration : ''
})
const [allData, setAll] = useState([]);
const myMovie = [];
const handleChange = (prop) => (e) => {
  setData({...data, 
  [prop] : e.target.value})
}
    const Submit = (e) => {
      e.preventDefault();
      const pfx = data.duration;
      if(pfx.slice(-1) != 'h' && 'm'){
        setDE(true)
      }else if(pfx.slice(-1) == 'h'){
        const newDuration = data.duration + 'rs'
        data.duration = newDuration
      }
      if(pfx.slice(-1) == 'm'){
        const newDuration = data.duration.slice(0, -1);
        const nvduration = newDuration / 60;
        data.duration = nvduration + 'hrs'    
      } 
      console.log(data);
      // myMovie.push(data)
      const updatedList = [...allData, data];
      // updatedList.push(value);
      setAll(updatedList);
    }
    console.log(allData);
  return (
    <DashboardLayout>
     
    <SuiBox position="relative">
     <DashboardNavbar  />
   <SuiBox>
     
     <Card>
  
      <form onSubmit={Submit}>
      
      <input type="text" name="name"   value={data.name} onChange={handleChange('name')} />
      <br/>
            <input type="" name="duration"  value={data.duration} onChange={handleChange('duration')} />
<br/>
            <input type="number" min="0" max="100" name="ratings"  value={data.ratings} onChange={handleChange('ratings')} />
            <br/>
      <button type="submit"> Submit </button>
      
      
      </form> 
      </Card>


</SuiBox>    
</SuiBox>
</DashboardLayout>

  )
}

export default OverviewT
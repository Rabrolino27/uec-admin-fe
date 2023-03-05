
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {MDBDataTableV5} from 'mdbreact';
import SuiBox from 'components/SuiBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Modal from '@mui/material/Modal';
import { Button, Card, Input, TextareaAutosize } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import axios from 'axios';
import { url } from 'api';
import Textarea from '@mui/joy/Textarea';
import ReactDOM from 'react-dom';
import './index.css'
import { useLayoutEffect } from 'react';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';


const LivesStreaming = () => {
    const [streamings, SetStreaming] = useState([]);
    const [formSubmit, ChangeForm] = useState(false);
    const [NewStreaming, AddStreaming] = useState({
        id : '',
        title : '',
        information: '',
        active: ''
      });
    useEffect((e) => {
      async function fetchData(){
      await axios.get(`${url}/streaming`).then((response) => {
        SetStreaming(response.data.data);
      }).catch((err) => {console.log(err);})
    }
      fetchData();
      
  
    }, [formSubmit]);    
    
      $(document).ready(function () {
        setTimeout(function(){
        $('#example').DataTable();
         } ,1000);
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 900,
      bgcolor: 'background.paper',
      border: '2px solid white',
      boxShadow: 24,
      p: 4,
    };

    const printPage = () => {
      var getFullContent = document.body.innerHTML;
      var printsection = document.getElementById('hello').innerHTML;
      document.body.innerHTML = printsection;
      window.print();
      document.body.innerHTML = getFullContent;
    }
    const handleEdit = value => async() => {
        await AddStreaming({...NewStreaming,
          id: value.id, title : value.title,
          information: value.information, active: value.active});
          console.log(NewStreaming)
          handleOpen();
      }


    const handleDelete = value => async() => {
      console.log(value)
    if (confirm("Delete Streaming " + value) == true){
      await axios.get(`${url}/streaming/delete/${value}`).then((response) => {
        if(response.data.status == 200){
          alert('Streaming Deleted successfully')
          ChangeForm(!formSubmit);
          window.location.reload(false)
        }
      }).catch((err) => {console.log(err);})
    }
 }
   const handleSubmit = async(e) => {
    await axios.post(`${url}/streaming/create`, NewStreaming).then((response) => {
      if(response.data.status == 200){
        alert('Streaming Saved successfully')
        ChangeForm(!formSubmit);
        window.location.reload(false)
      }
    }).catch((err) => {console.log(err);})

   }
  return (
    <DashboardLayout>
     
    <SuiBox position="relative">
     <DashboardNavbar  />
   <SuiBox>
     
     <Card>
   
   <Grid item xs={12} md={12} xl={12}>
   <div className="table-top">
        <div className="mg-1 pd-1" onClick={printPage}> <i className="fa fa-print" > </i> </div> 
        <div className="mg-1 border pd-1" onClick={handleOpen}>  <span className=""><i className="fa fa-plus-circle" > </i> <span className="promaro">Add Streaming </span> </span></div>
</div>
        <Card id="hello" >
 {streamings.length > 0 ? <table id="example" class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>INFORMATION</th>

              <th>ACTIVE</th>
              <th>ACTION</th>
            
            </tr>
          </thead>
          <tbody>
          {streamings.map((result) => {
            return (
            
                <tr>
                  <td>{result.id}</td>
                  <td>{result.title}</td>
                  <td>{result.information}</td>
                  <td>{result.active}</td>
                  <td><><Button  onClick={handleEdit(result)} sx={{backgroundColor: '#5cb85c', color : '#FFFFFF', height: '40px', marginLeft: '20px'}}> Edit</Button> <Button  onClick={handleDelete(result.id)} sx={{backgroundColor: '#000000', color : '#ff0000', height: '40px', marginLeft: '20px'}}> Delete</Button> </> </td>
                </tr>
            
            )
          })}
          
            
          </tbody>
        </table> : ''}
        
    </Card>
    </Grid>
    </Card>


</SuiBox>    
</SuiBox>

<Modal open={open}  onClose={handleClose} aria-labelledby="modal-modal-title"  aria-describedby="modal-modal-description" >
    <Box sx={modalStyle} >
       <label style={{fontSize: "10px"}}> Streaming Title</label>
       <Input sx={{minWidth:'800px'}}  helperText = "Streaming Title" value={NewStreaming.title} onChange={(e) => {AddStreaming({...NewStreaming, title : e.target.value})}} /> 
       <label style={{fontSize: "10px"}}> Streaming Information</label>
        <TextareaAutosize cols="80"  helperText = "Streaming Information" value={NewStreaming.information} onChange={(e) => {AddStreaming({...NewStreaming, information : e.target.value})}} > </TextareaAutosize>
        
       
        <label style={{fontSize: "10px"}}> Active</label>
        <Input sx={{minWidth:'800px', marginBottom: '30px'}} type="number"  helperText = "Active" value={NewStreaming.active} onChange={(e) => {AddStreaming({...NewStreaming, active : e.target.value})}} /> 
        
        <Button sx={{backgroundColor: '#42ba96', color : '#FFFFFF', height: '40px', marginLeft: '20px', width: '250px' }} onClick = {(e) => { handleSubmit(e); handleClose();}}>  Submit</Button>
    </Box>
</Modal>
</DashboardLayout>
  )
}

export default LivesStreaming
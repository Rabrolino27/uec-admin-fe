
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


const Contact = () => {
    const [Contacts, SetContact] = useState([]);
    const [formSubmit, ChangeForm] = useState(false);
    const [NewContact, AddContact] = useState({
        id : '',
        contact1_title : '',
        contact1_information: '',
        contact2_title : '',
        contact2_information: '',
        contact3_title : '',
        contact3_information: '',
        contact4_title : '',
        contact4_information: '',
        active: ''
      });
    useEffect((e) => {
      async function fetchData(){
      await axios.get(`${url}/contact`).then((response) => {
        SetContact(response.data.data);
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
        await AddContact({...NewContact,
          id: value.id, contact1_title : value.contact1_title,
          contact1_information: value.contact1_information,
          contact2_title : value.contact2_title,
          contact2_information: value.contact2_information,
          contact3_title : value.contact3_title,
          contact3_information: value.contact3_information,
          contact4_title : value.contact4_title,
          contact4_information: value.contact4_information,
          active: value.active});
          console.log(NewContact)
          handleOpen();
      }


    const handleDelete = value => async() => {
      console.log(value)
    if (confirm("Delete Contact " + value) == true){
      await axios.get(`${url}/contact/delete/${value}`).then((response) => {
        if(response.data.status == 200){
          alert('Contact Deleted successfully')
          ChangeForm(!formSubmit);
          window.location.reload(false)
        }
      }).catch((err) => {console.log(err);})
    }
 }
   const handleSubmit = async(e) => {
    await axios.post(`${url}/contact/create`, NewContact).then((response) => {
      if(response.data.status == 200){
        alert('Contact Saved successfully')
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
        <div className="mg-1 border pd-1" onClick={handleOpen}>  <span className=""><i className="fa fa-plus-circle" > </i> <span className="promaro">Add Contact </span> </span></div>
</div>
        <Card id="hello" >
 {Contacts.length > 0 ? <table id="example" class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Contact1 TITLE </th>
              <th>Contact1 INFORMATION</th>

              <th>ACTIVE</th>
              <th>ACTION</th>
            
            </tr>
          </thead>
          <tbody>
          {Contacts.map((result) => {
            return (
            
                <tr>
                  <td>{result.id}</td>
                  <td>{result.contact1_title}</td>
                  <td>{result.contact1_information}</td>
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
       <label style={{fontSize: "10px"}}> Contact  Title1</label>
       <Input sx={{minWidth:'800px'}}  helperText = "Contact Title" value={NewContact.contact1_title} onChange={(e) => {AddContact({...NewContact, contact1_title : e.target.value})}} /> 
       <label style={{fontSize: "10px"}}> Contact Information 1</label>
        <TextareaAutosize cols="80"  helperText = "Contact Information" value={NewContact.contact1_information} onChange={(e) => {AddContact({...NewContact, contact1_information : e.target.value})}} > </TextareaAutosize>
        
        <label style={{fontSize: "10px"}}> Contact  Title2</label>
       <Input sx={{minWidth:'800px'}}  helperText = "Contact Title" value={NewContact.contact2_title} onChange={(e) => {AddContact({...NewContact, contact2_title : e.target.value})}} /> 
       <label style={{fontSize: "10px"}}> Contact Information 2</label>
        <TextareaAutosize cols="80"  helperText = "Contact Information" value={NewContact.contact2_information} onChange={(e) => {AddContact({...NewContact, contact2_information : e.target.value})}} > </TextareaAutosize>
      

        <label style={{fontSize: "10px"}}> Contact  Title3</label>
       <Input sx={{minWidth:'800px'}}  helperText = "Contact Title" value={NewContact.contact3_title} onChange={(e) => {AddContact({...NewContact, contact3_title : e.target.value})}} /> 
       <label style={{fontSize: "10px"}}> Contact Information 3</label>
        <TextareaAutosize cols="80"  helperText = "Contact Information" value={NewContact.contact3_information} onChange={(e) => {AddContact({...NewContact, contact3_information : e.target.value})}} > </TextareaAutosize>
        


        <label style={{fontSize: "10px"}}> Contact  Title4</label>
       <Input sx={{minWidth:'800px'}}  helperText = "Contact Title" value={NewContact.contact4_title} onChange={(e) => {AddContact({...NewContact, contact4_title : e.target.value})}} /> 
       <label style={{fontSize: "10px"}}> Contact Information 4</label>
        <TextareaAutosize cols="80"  helperText = "Contact Information" value={NewContact.contact4_information} onChange={(e) => {AddContact({...NewContact, contact4_information : e.target.value})}} > </TextareaAutosize>
        
        {/* <label style={{fontSize: "10px"}}> Contact  Title5</label>
       <Input sx={{minWidth:'800px'}}  helperText = "Contact Title" value={NewContact.contact5_title} onChange={(e) => {AddContact({...NewContact, contact5_title : e.target.value})}} /> 
       <label style={{fontSize: "10px"}}> Contact Information 5</label>
        <TextareaAutosize cols="80"  helperText = "Contact Information" value={NewContact.contact5_information} onChange={(e) => {AddContact({...NewContact, contact5_information : e.target.value})}} > </TextareaAutosize>
         */}

        <label style={{fontSize: "10px"}}> Active</label>
        <Input sx={{minWidth:'800px', marginBottom: '30px'}} type="number"  helperText = "Active" value={NewContact.active} onChange={(e) => {AddContact({...NewContact, active : e.target.value})}} /> 
        
        <Button sx={{backgroundColor: '#42ba96', color : '#FFFFFF', height: '40px', marginLeft: '20px', width: '250px' }} onClick = {(e) => { handleSubmit(e); handleClose();}}>  Submit</Button>
    </Box>
</Modal>
</DashboardLayout>
  )
}

export default Contact
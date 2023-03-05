
import React, {useState, useEffect, useCallback, useMemo} from 'react';
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

const LiveStreaming = () => {
  

  const [events, SetEvents] = useState([]);
  const [datatable, setDatatable] = React.useState({});
  const [data, SetData] = useState(false);
  const [NewEvent, AddEvent] = useState({
    name : '',
    details: '',
    date: '',
    image: ''
    });
 

  const [formSubmit, ChangeForm] = useState(false);
 
    useEffect((e) => {
        async function fetchData(){
        await axios.get(`${url}/events`).then((response) => {
          SetEvents(response.data.data);
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

    const handleImgChange = (e) => {
      const imageArray = [];
      const resizedimage = [];
    
      let isValid = "";
    
    
      for (let i = 0; i < e.target.files.length; i++) {      
        imageArray.push(e.target.files[i]);
        try {
          Resizer.imageFileResizer(
            e.target.files[i],
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
              console.log(uri);
              resizedimage.push(uri);
              // this.setState({ newImage: uri });
            },
            "base64",
            200,
            200
          );
        } catch (err) {
          console.log(err);
        }
      
        console.log(resizedimage)
    
      AddEvent({...NewEvent, 
      image : imageArray});
      console.log(NewEvent);
    
    }
    
     }
    const handleEdit = value => async() => {
        await AddEvent({...NewEvent,
          id: value.id, name: value.name, details : value.details, date: value.date});
          console.log(NewEvent)
          handleOpen();
      }

      const handleCreate = async() => {
        await AddEvent({...NewEvent,
          id: '', name: '', details : '', date: '', image: ''});
          console.log(NewEvent)
          handleOpen();
      }


    const handleDelete = value => async() => {
      console.log(value)
    if (confirm("Delete Event " + value) == true){
      await axios.get(`${url}/events/delete/${value}`).then((response) => {
        if(response.data.status == 200){
          alert('Event Deleted successfully')
          ChangeForm(!formSubmit);
          window.location.reload(false)
        }
      }).catch((err) => {console.log(err);})
    }
 }
   const handleSubmit = async(e) => {
    e.preventDefault();

    const data = new FormData(); 
    data.append('id', NewEvent.id);
    data.append('name', NewEvent.name);
    data.append('details', NewEvent.details);
    data.append('date', NewEvent.date);
    for (let i = 0; i < NewEvent.image.length; i++) {
      data.append('image', NewEvent.image[i]);
      console.log(NewEvent.image[i].name);
    }
    await axios.post(`${url}/events/create`, NewEvent).then((response) => {
      if(response.data.status == 200){
        alert('Event Saved successfully')
        ChangeForm(!formSubmit);
        window.location.reload(false)
      }
    }).catch((err) => {console.log(err);})

   }
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
              const editorStyle = {
                bgcolor: 'background.paper',
                border: '0.5px solid gray',
                boxShadow: 24,
                margin: '10px 0 10px 0',
                borderRadius: '5px'
              };
             
  const printPage = () => {
      var getFullContent = document.body.innerHTML;
      var printsection = document.getElementById('hello').innerHTML;
      document.body.innerHTML = printsection;
      window.print();
      document.body.innerHTML = getFullContent;
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
            <div className="mg-1 border pd-1" onClick={handleCreate}>  <span className=""><i className="fa fa-plus-circle" > </i> <span className="promaro">Add to Eventss </span> </span></div>
   </div>
            <Card id="hello" >
     
            <table id="example" class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
          {events.map((result) => {
            return (
             
                 <tr>
                  <td>{result.name}</td>
                  <td>{result.date}</td>
                  <td>{result.details}</td>
                  <td><><Button  onClick={handleEdit(result)} sx={{backgroundColor: '#5cb85c', color : '#000000', height: '40px', marginLeft: '20px'}}> Edit</Button> <Button  onClick={handleDelete(result.id)} sx={{backgroundColor: '#000000', color : '#ff0000', height: '40px', marginLeft: '20px'}}> Delete</Button> </> </td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>
        </Card>
        </Grid>
        </Card>


</SuiBox>    
</SuiBox>

    <Modal open={open}  onClose={handleClose} aria-labelledby="modal-modal-title"  aria-describedby="modal-modal-description" >
        <Box sx={modalStyle} >
         <label style={{fontSize: "10px"}}> Event Title</label>
            <Input sx={{minWidth:'400px'}}  helperText = "Event Name" value={NewEvent.name} onChange={(e) => {AddEvent({...NewEvent, name : e.target.value})}} />
            <label style={{fontSize: "10px"}}> Details</label>
          <TextareaAutosize cols="80"  sx={{height:'400px'}}  helperText = "Event Details" value={NewEvent.details} onChange={(e) => {AddEvent({...NewEvent, details : e.target.value})}}> </TextareaAutosize>
          <label style={{fontSize: "10px"}}> Event Date</label>
            <Input sx={{minWidth:'400px'}} type="date"  helperText = "Event Date" value={NewEvent.date} onChange={(e) => {AddEvent({...NewEvent, date : e.target.value})}} />
            <label style={{fontSize: "10px"}}> Event Image if applicable</label>
            <Input type="file" sx={{minWidth:'400px'}}  helperText = "Event Image" onChange={handleImgChange}  />
            <Button sx={{backgroundColor: '#42ba96', color : '#FFFFFF', height: '40px', marginLeft: '20px', marginTop: '25px', width: '250px' }} onClick = {(e) => { handleSubmit(e); handleClose();}}> Submit</Button>
        </Box>
    </Modal>
</DashboardLayout>
      )
    }

export default LiveStreaming

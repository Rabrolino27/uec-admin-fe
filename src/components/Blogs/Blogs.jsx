
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
import ReactDOM from 'react-dom';
import './index.css'
import { useLayoutEffect } from 'react';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import { VisibilityRounded } from '@mui/icons-material';

const Blogs = () => {
  

  const [blogs, SetBlogs] = useState([]);
  const [datatable, setDatatable] = React.useState({});
  const [data, SetData] = useState(false);
  const [NewBlog, AddBlog] = useState({
    title : '',
    main_image: '',
    paragraph_one: '',
    paragraph_two: '',
    mid_image: '',
    paragraph_three: '',
    paragraph_four: '',
    closing_image: '',
    });
 

  const [formSubmit, ChangeForm] = useState(false);
 
    useEffect((e) => {
        async function fetchData(){
        await axios.get(`${url}/blogs`).then((response) => {
          console.log(response.data.data);
          SetBlogs(response.data.data);
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

    const handleImgChange = (prop) => (e) => {  
    //   for (let i = 0; i < e.target.files.length; i++) {      
    //     imageArray.push(e.target.files[i]);
    //     try {
    //       Resizer.imageFileResizer(
    //         e.target.files[i],
    //         300,
    //         300,
    //         "JPEG",
    //         100,
    //         0,
    //         (uri) => {
    //           console.log(uri);
    //           resizedimage.push(uri);
    //           // this.setState({ newImage: uri });
    //         },
    //         "base64",
    //         200,
    //         200
    //       );
    //     } catch (err) {
    //       console.log(err);
    //     }
      
    //     console.log(resizedimage)
    
     
    
    // }

    AddBlog({...NewBlog, 
      [prop] : e.target.file});
      console.log(NewBlog);
    
     }
    const handleEdit = value => async() => {
        await AddBlog({...NewBlog,
          title: value.title, paragraph_one : value.paragraph_one, paragraph_two: value.paragraph_two,
          paragraph_three: value.paragraph_three, paragraph_four : value.paragraph_four });
          console.log(NewBlog)
          handleOpen();
      }

      const handleView = value => async() => {
        await AddBlog({...NewBlog,
          title: value.title, paragraph_one : value.paragraph_one, paragraph_two: value.paragraph_two,
          paragraph_three: value.paragraph_three, paragraph_four : value.paragraph_four });
          console.log(NewBlog)
          handleOpen();
      }

      const handleCreate = async() => {
        await AddBlog({...NewBlog,
          title: '', paragraph_one : '', paragraph_two: '', paragraph_three: '', paragraph_four : ''});
          console.log(NewBlog)
          handleOpen();
      }


    const handleDelete = value => async() => {
      console.log(value)
    if (confirm("Delete Blog " + value) == true){
      await axios.get(`${url}/blogs/delete/${value}`).then((response) => {
        if(response.data.status == 200){
          alert('Blog Deleted  successfully')
          ChangeForm(!formSubmit);
          window.location.reload(false)
        }
      }).catch((err) => {console.log(err);})
    }
 }
   const handleSubmit = async(e) => {
    e.preventDefault();
    const data = new FormData(); 
    data.append('title', NewBlog.title);
    data.append('paragraph_one', NewBlog.paragraph_one);
    data.append('paragraph_two', NewBlog.paragraph_two);
    data.append('paragraph_three', NewBlog.paragraph_three);
    data.append('paragraph_four', NewBlog.paragraph_four);
    

    // for (let i = 0; i < NewBlog.main_image.length; i++) {
      data.append('main_image', NewBlog.main_image);
    // }

    // for (let i = 0; i < NewBlog.mid_image.length; i++) {
      data.append('mid_image', NewBlog.mid_image);
    // }

    // for (let i = 0; i < NewBlog.closing_image.length; i++) {
      data.append('closing_image', NewBlog.closing_image);
    // }

    

    await axios.post(`${url}/blogs/create`, NewBlog).then((response) => {
      if(response.data.status == 200){
        alert('Blog Saved successfully')
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
            <div className="mg-1 border pd-1" onClick={handleCreate}>  <span className=""><i className="fa fa-plus-circle" > </i> <span className="promaro">Add to Blogs </span> </span></div>
   </div>
            <Card id="hello" >
            <div class="card table-responsive">
          <table id="example" class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>PARAGRAPH_ONE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
          {blogs.map((result) => {
            return (
             
                 <tr>
                  <td>{result.id}</td>
                  <td>{result.title}</td>
                  <td>{result.paragraph_one}</td>
                  <td><><Button  onClick={handleEdit(result)} sx={{backgroundColor: '#5cb85c', color : '#FFFFFF', height: '40px', marginLeft: '20px'}}> Edit</Button> <Button  onClick={handleView(result)} sx={{backgroundColor: '#89CFF0', color : '#FFFFFF', height: '40px', marginLeft: '20px'}}> View</Button> <Button  onClick={handleDelete(result.id)} sx={{backgroundColor: '#000000', color : '#ff0000', height: '40px', marginLeft: '20px'}}> Delete</Button> </> </td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>
        </div>
        </Card>
        
        </Grid>
        </Card>


</SuiBox>    
</SuiBox>

    {/* <Modal open={open}  onClose={handleClose} aria-labelledby="modal-modal-title"  aria-describedby="modal-modal-description" >
    
        <Box sx={modalStyle} >
         <label style={{fontSize: "10px"}}> Blog Title</label>
            <Input sx={{minWidth:'400px'}}  helperText = "Blog Name" value={NewBlog.title} onChange={(e) => {AddBlog({...NewBlog, title : e.target.value})}} />
                <label style={{fontSize: "10px"}}> Paragraph One</label>
          <TextareaAutosize cols="80"  sx={{height:'400px'}}  helperText = "Paragraph One" value={NewBlog.paragraph_one} onChange={(e) => {AddBlog({...NewBlog, paragraph_one : e.target.value})}}> </TextareaAutosize>
              <label style={{fontSize: "10px"}}> Paragraph Two</label>
          <TextareaAutosize cols="80"  sx={{height:'400px'}}  helperText = "Paragraph Two" value={NewBlog.paragraph_two} onChange={(e) => {AddBlog({...NewBlog, paragraph_two : e.target.value})}}> </TextareaAutosize>
             <label style={{fontSize: "10px"}}> Paragraph Three</label>
          <TextareaAutosize cols="80"  sx={{height:'400px'}}  helperText = "Paragraph Three" value={NewBlog.paragraph_three} onChange={(e) => {AddBlog({...NewBlog, paragraph_three : e.target.value})}}> </TextareaAutosize>
          <label style={{fontSize: "10px"}}> Paragraph Four</label>
          <TextareaAutosize cols="80"  sx={{height:'400px'}}  helperText = "Paragraph Four" value={NewBlog.paragraph_four} onChange={(e) => {AddBlog({...NewBlog, paragraph_four : e.target.value})}}> </TextareaAutosize>
          <label style={{fontSize: "10px"}}> Main Image</label>
            <Input type="file" sx={{minWidth:'400px'}}  helperText = "Main Image" onChange={handleImgChange('main_image')}  />

            <label style={{fontSize: "10px"}}> MID Image</label>
            <Input type="file" sx={{minWidth:'400px'}}  helperText = "Main Image" onChange={handleImgChange('mid_image')}  />

            <label style={{fontSize: "10px"}}> Closing Image</label>
            <Input type="file" sx={{minWidth:'400px'}}  helperText = "Closing Image" onChange={handleImgChange('closing_image')}  />

          <Button sx={{backgroundColor: '#42ba96', color : '#FFFFFF', height: '40px', marginLeft: '20px', marginTop: '25px', width: '250px' }} onClick = {(e) => { handleSubmit(e); handleClose();}}> Submit</Button>

        </Box>
    </Modal> */}
</DashboardLayout>
      )
    }

export default Blogs

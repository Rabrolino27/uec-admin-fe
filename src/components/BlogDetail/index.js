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
import React,{ useState, useEffect, createContext } from "react";

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
import Blogs from './Blogs';



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
import Header from "components/BlogDetail/components/Header";
import PlatformSettings from "components/BlogDetail/components/PlatformSettings";

// Data
import profilesListData from "components/BlogDetail/data/profilesListData";
import { Button, Input, TextareaAutosize } from "@mui/material";
import axios from 'axios';
import { url } from 'api';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
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


function OverviewT({result}) {
  
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
          id: value.id,
          title: value.title, paragraph_one : value.paragraph_one, paragraph_two: value.paragraph_two,
          paragraph_three: value.paragraph_three, paragraph_four : value.paragraph_four,  main_image : value.main_image, mid_image : value.mid_image, closing_image : value.closing_image });
          console.log(NewBlog)
          setTabValue(1)
      }

      const handleCreate = async() => {
        await AddBlog({...NewBlog,
        id: null,  title: '', paragraph_one : '', paragraph_two: '', paragraph_three: '', paragraph_four : '', main_image : '', mid_image: '', closing_image: ''});
          console.log(NewBlog)
          setTabValue(1)
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
          marginTop:"-25px",
        }}
      >
       <Grid container spacing={3} alignItems="center">
          
          <Grid item>
            <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                BLOG DETAIL
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
                <Tab label="AddOrEdit" icon={<Settings />}  onClick={handleCreate}/>
                {/* <Tab label="Movement" icon={<AirportShuttleIcon />} /> */}
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </SuiBox>
      <SuiBox mt={5} mb={3}>
        <Grid container spacing={3}>
        { tabValue == 0 ?<Grid item xs={12} md={12} xl={12}>
       <div className="table-top mt--50" >
            <div className="mg-1 pd-1" onClick={printPage}> <i className="fa fa-print" > </i> </div> 
            {/* <div className="mg-1 border pd-1" onClick={handleCreate}>  <span className=""><i className="fa fa-plus-circle" > </i> <span className="promaro">Add to Blogs </span> </span></div> */}
   </div>
            <Card id="hello" >
            <div class="card table-responsive">
       {blogs.length > 0 ?   <table id="example" className="table table-striped padding-20">
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
                  <td><><Button  onClick={handleEdit(result)} sx={{backgroundColor: '#5cb85c', color : '#FFFFFF', height: '40px', marginLeft: '20px'}}> Edit</Button> <Button  onClick={handleDelete(result.id)} sx={{backgroundColor: '#000000', color : '#ff0000', height: '40px', marginLeft: '20px'}}> Delete</Button> </> </td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table> : ''}
        
        </div>
        </Card>
        
        </Grid> : tabValue == 1 ? <Profile data={NewBlog} /> : tabValue == 2 ? <Movement /> : '' }
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

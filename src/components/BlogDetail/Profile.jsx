import React, {useState} from 'react'
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import SuiBox from "components/SuiBox";
import {Box, Card, Button, Input, TextareaAutosize } from "@mui/material";
import axios from 'axios';
import { url } from 'api';
import { img } from 'api';


const Profile = ({data}) => {
 
  const [NewBlog, AddBlog] = useState({
    id : data.id,
    title : data.title,
    main_image: data.main_image,
    paragraph_one: data.paragraph_one,
    paragraph_two: data.paragraph_two,
    mid_image: data.mid_image,
    paragraph_three: data.paragraph_three,
    paragraph_four: data.paragraph_four,
    closing_image: data.closing_image,
    });


    const handleImgChange = (prop) => (e) => {  
      // console.log(e.target.files)
      AddBlog({...NewBlog, 
        [prop] : e.target.files});
        console.log(NewBlog);
      
       }


    const handleSubmit = async() => {
      // e.preventDefault();
      const data = new FormData(); 
      if(NewBlog.id != null){
        data.append('id', NewBlog.id);
      }
      
      data.append('title', NewBlog.title);
      data.append('paragraph_one', NewBlog.paragraph_one);
      data.append('paragraph_two', NewBlog.paragraph_two);
      data.append('paragraph_three', NewBlog.paragraph_three);
      data.append('paragraph_four', NewBlog.paragraph_four);
      
  
      if(NewBlog.main_image != null  && typeof NewBlog.main_image != 'string'){
          data.append('main_image', NewBlog.main_image[0]);
      }
  
        if(NewBlog.mid_image != null && typeof NewBlog.mid_image != 'string'){
          data.append('mid_image', NewBlog.mid_image[0]);
        }
  
        if(NewBlog.closing_image != null && typeof NewBlog.closing_image != 'string'){
          data.append('closing_image', NewBlog.closing_image[0]);
        }  
      
      console.log(NewBlog)
  
      await axios.post(`${url}/blogs/create`, data).then((response) => {
        if(response.data.status == 200){
          alert('Blog Saved successfully')
          window.location.reload()
        }
      }).catch((err) => {console.log(err);})
  
     }
    const codespeedy = () => {
        var getFullContent = document.body.innerHTML;
        var printsection = document.getElementById('hello').innerHTML;
        document.body.innerHTML = printsection;
        window.print();
        document.body.innerHTML = getFullContent;
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
  return (
      <>
      <Grid item xs={12} md={12} xl={6}>
    <SuiBox>
      
      <Card id="hello">
        {/* <div className="assetdetail"> */}
        <div className="adhead"> 
      <div className ="adleft">
  
       </div> 

       <div className ="adright"><i className="fa fa-print" onClick={codespeedy}> </i></div> 
      </div> 
      <h3 className="title">Edit Blog Information </h3> 

 
        {/* <div class="card table-responsive"> */}
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
          
           

          <Button sx={{backgroundColor: '#42ba96', color : '#FFFFFF', height: '40px', marginLeft: '20px', marginTop: '25px', width: '250px' }} onClick = {handleSubmit}> Submit</Button>
          {/* </div>     */}

     
       {/* </div> */}
      </Card>
    </SuiBox>
  </Grid>
  <Grid item xs={12} md={12} xl={6}>
<SuiBox>

 

<div className="editasset">
<h3 className="title">Blog Gallery </h3>
<h6 className="title">Main Image</h6>

{NewBlog.main_image != null &&  NewBlog.main_image != ''? <>
      <img src={`${img}/uploads/${NewBlog.main_image}`}  width="300"/> </>: '' } 

            <Input type="file" sx={{minWidth:'400px'}}  helperText = "Main Image" onChange={handleImgChange('main_image')}  />

            <h6 className="title">MID Image</h6>
      {NewBlog.mid_image != null &&  NewBlog.mid_image != '' ? <> 
      <img src={`${img}/uploads/${NewBlog.mid_image}`}  width="300"/> </>: '' }
           
            <Input type="file" sx={{minWidth:'400px'}}  helperText = "Mid Image" onChange={handleImgChange('mid_image')}  />     
           
            <h6 className="title">Closing Image</h6>
            {NewBlog.closing_image != null &&  NewBlog.closing_image != ''? <>
      <img src={`${img}/uploads/${NewBlog.closing_image}`}  width="300"/> </>: '' }     


            <Input type="file" sx={{minWidth:'400px'}}  helperText = "Closing Image" onChange={handleImgChange('closing_image')}  />            

      
 </div>
 

 </SuiBox> 
  </Grid>
  </>
  )
}

export default Profile
import React from 'react'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { TextField } from "@mui/material";
import SuiBox from "components/SuiBox";


const Profile = () => {
    const codespeedy = () => {
        var getFullContent = document.body.innerHTML;
        var printsection = document.getElementById('hello').innerHTML;
        document.body.innerHTML = printsection;
        window.print();
        document.body.innerHTML = getFullContent;
            }
  return (
      <>
      <Grid item xs={12} md={12} xl={6}>
    <SuiBox>
      
      <Card id="hello">
        {/* <div className="assetdetail"> */}
        <div className="adhead"> 
      <div className ="adleft">
  
      <h3 className="title">Asset Information </h3> </div> 

       <div className ="adright"><i className="fa fa-print" onClick={codespeedy}> </i></div> 
      </div> 
       <p > <span className="detailtitle"> Asset Name</span> : <span className="detailinfo"> Swivel Chair </span></p>
       <p > <span className="detailtitle"> Asset ID</span> : <span className="detailinfo">A1/JI/2992</span></p>
       <p > <span className="detailtitle"> Asset Category</span> : <span className="detailinfo">Housing</span></p>
       <p > <span className="detailtitle"> Current User/Location</span> : <span className="detailinfo">MCFAD</span></p>
       <p > <span className="detailtitle">Method of Acquisition</span> : <span className="detailinfo"> Lease</span></p>
       <p > <span className="detailtitle">Current Asset Condition</span> : <span className="detailinfo"> Good</span></p>
       <p > <span className="detailtitle"> Reference Number</span> :  <span className="detailinfo">A09MMK</span></p>
       <p > <span className="detailtitle"> Cost of Asset</span> : <span className="detailinfo"> N100000</span></p>
       <p > <span className="detailtitle">Waranty Period</span> : <span className="detailinfo"> 2 years</span></p>
       <p > <span className="detailtitle">Expiry date of warranty</span> : <span className="detailinfo"> 10th December, 2022</span></p>


       {/* </div> */}
      </Card>
    </SuiBox>
  </Grid>
  <Grid item xs={12} md={12} xl={6}>
<SuiBox>

 

<div className="editasset">
<h3 className="title">Edit Asset Information </h3> 

 <TextField id="standard-basic"  label="Asset Name" helperText = "Asset Name" value="Swivel Chair" variant="standard" sx={{minWidth: '475px', margin: '25px', marginBottom: '20px'}}/>

 <TextField id="standard-basic"  label="Asset ID" value="A1/JI/2992" helperText ="Asset ID" variant="standard" sx={{minWidth: '475px', marginLeft: '25px', marginBottom: '20px'}}/>

 <TextField id="standard-basic"  label="Asset Category" helperText ="Asset Category" value="Housing" variant="standard" sx={{minWidth: '475px', marginLeft: '25px', marginBottom: '20px'}}/>

 <TextField id="standard-basic"  label="Current User/Location" helperText ="Current User/Location" value="MCFAD" variant="standard" sx={{minWidth: '475px', marginLeft: '25px', marginBottom: '20px'}}/>

 <TextField id="standard-basic"  label="Method of Acquisition" helperText ="Method of Acquisition" value="Lease" variant="standard" sx={{minWidth: '475px', marginLeft: '25px', marginBottom: '20px'}}/>

 <TextField id="standard-basic"  label="Current Asset Condition" helperText ="Current Asset Condition" value="Good" variant="standard" sx={{minWidth: '475px', marginLeft: '25px', marginBottom: '20px'}}/>

 <TextField id="standard-basic"  label="Reference Number" helperText ="Reference Number"  value="A09MMK" variant="standard" sx={{minWidth: '475px', marginLeft: '25px', marginBottom: '20px'}}/>


 <TextField id="standard-basic"  label="Cost of Asset" helperText ="Cost of Asset" value="N100000" variant="standard" sx={{minWidth: '475px', marginLeft: '25px', marginBottom: '20px'}}/>


 <TextField id="standard-basic" className="standard-basic" label="Expiry date of Warranty" helperText ="Expiry date of Warranty" value="10th December, 2022" variant="standard" sx={{minWidth: '475px', marginLeft: '25px', marginBottom: '20px'}}/>

 </div>
 

 </SuiBox> 
  </Grid>
  </>
  )
}

export default Profile
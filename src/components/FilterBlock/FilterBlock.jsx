import React,{useState} from 'react';
import './FilterBlock.css'
import { TextField, Button } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Dropdown from "components/Dropdown/index"

const FilterBlock = () => {
  const [selected, setSelected] = useState("Select Report")
    const codespeedy = () => {
        var getFullContent = document.body.innerHTML;
        var printsection = document.getElementById('hello').innerHTML;
        document.body.innerHTML = printsection;
        window.print();
        document.body.innerHTML = getFullContent;
            }
            const style = {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 600,
              bgcolor: 'background.paper',
              border: '2px solid white',
              boxShadow: 24,
              p: 4,
            };
           
              const [open, setOpen] = React.useState(false);
              const handleOpen = () => setOpen(true);
              const handleClose = () => setOpen(false);

              const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
            
  return (
    <div className="FilterBlock" >
              
    <div className="filterCategory2"> 
<TextField id="date"    type="date"
    defaultValue="2017-05-24"
    sx={{ width: 220 }}
    InputLabelProps={{
      shrink: true,}} helperText ="Select Date Range" />

<TextField id="date"    type="date"
    defaultValue="2017-05-24"
    sx={{ width: 220 }}
    InputLabelProps={{
      shrink: true,}}/>


</div>

             

             <div className="FilterCategory3">

             <Button sx={{backgroundColor:'#f2f2f2', width: 220,  height:'40px'}} className="ml-3" onClick={handleOpen}> {selected == 'Select Report' ? 'Generate Report' : selected + ' ' + 'Report'}</Button>


          <i className="fa fa-print ml-1" onClick={codespeedy}> </i>
          
             </div>


             <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
      <Dropdown selected = {selected} setSelected = {setSelected} setOpen ={setOpen} />
    </Box>
      </Modal>
          </div>
  )
}

export default FilterBlock
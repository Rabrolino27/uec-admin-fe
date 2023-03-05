import { Card } from "@mui/material";
import SuiBox from "components/SuiBox";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MaterialTable from 'material-table';
// import axios from 'axios';
// import AddBox from '@mui/icons-material/AddBox';
// import ArrowDownward from '@mui/icons-material/ArrowDownward';
// import Check from '@mui/icons-material/Check';
// import ChevronLeft from '@mui/icons-material/ChevronLeft';
// import ChevronRight from '@mui/icons-material/ChevronRight';
// import Clear from '@mui/icons-material/Clear';
// import DeleteOutline from '@mui/icons-material/DeleteOutline';
// import Edit from '@mui/icons-material/Edit';
// import FilterList from '@mui/icons-material/FilterList';
// import FirstPage from '@mui/icons-material/FirstPage';
// import LastPage from '@mui/icons-material/LastPage';
// import Remove from '@mui/icons-material/Remove';
// import SaveAlt from '@mui/icons-material/SaveAlt';
// import Search from '@mui/icons-material/Search';
// import ViewColumn from '@mui/icons-material/ViewColumn';
// import { alpha } from '@material-ui/core/styles';
import React,{ useState, forwardRef, useEffect } from 'react';
// import MaterialTable from 'material-table'

function Categories() {
    const [data, setData] = useState([]);


  return (
<div className="Categories">
<DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
      <SuiBox mb={3}>
          <Card>

     good

        </Card>
    </SuiBox>

    </SuiBox>
      <Footer />
    </DashboardLayout>
</div>
)
}

export default Categories;
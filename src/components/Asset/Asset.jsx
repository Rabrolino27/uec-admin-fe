
import React from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Button, Card } from "@mui/material";
import SuiBox from "components/SuiBox";
import './Asset.css'
import { Link } from 'react-router-dom'
import FilterBlock from "components/FilterBlock/FilterBlock"



const Test = () => {
  




        const [datatable, setDatatable] = React.useState({
          columns: [
            {
              label: 'Asset ID',
              field: 'asset_id',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'asset_id',
              },
            },
            {
              label: 'Asset Name',
              field: 'Asset_Name',
              width: 100,
            },
            {
              label: 'Asset Category',
              field: 'Asset_Category',
              width: 100,
            },
            {
              label: 'Full Asset Information',
              field: 'Full_info',
              sort: 'disabled',
              width: 100,
            },
          ],
          rows: [
            {
              asset_id: 'Tiger Nixon',
              Asset_Name: 'System Architect',
              Asset_Category: 'Edinburgh',
             
              Full_info: <center> <Link to ="/view-asset"><i class="fa fa-eye"> </i> </Link> </center>,
              salary: '',
            },
            {
              asset_id: 'Garrett Winters',
              Asset_Name: 'Accountant',
              Asset_Category: 'Tokyo',
              asset_model: '63',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$170',
            },
            {
              asset_id: 'Ashton Cox',
              Asset_Name: 'Junior Technical Author',
              Asset_Category: 'San Francisco',
              
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$86',
            },
            {
              asset_id: 'Cedric Kelly',
              Asset_Name: 'Senior Javascript Developer',
              Asset_Category: 'Edinburgh',
             
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$433',
            },
            {
              asset_id: 'Airi Satou',
              Asset_Name: 'Accountant',
              Asset_Category: 'Tokyo',
              
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$162',
            },
            {
              asset_id: 'Brielle Williamson',
              Asset_Name: 'Integration Specialist',
              Asset_Category: 'New York',
             
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$372',
            },
            {
              asset_id: 'Herrod Chandler',
              Asset_Name: 'Sales Assistant',
              Asset_Category: 'San Francisco',
              
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$137',
            },
            {
              asset_id: 'Rhona Davidson',
              Asset_Name: 'Integration Specialist',
              Asset_Category: 'Tokyo',
             
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$327',
            },
            {
              asset_id: 'Colleen Hurst',
              Asset_Name: 'Javascript Developer',
              Asset_Category: 'San Francisco',
              
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$205',
            },
            {
              asset_id: 'Sonya Frost',
              Asset_Name: 'Software Engineer',
              Asset_Category: 'Edinburgh',
              
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$103',
            },
            {
              asset_id: 'Jena Gaines',
              Asset_Name: 'Office Manager',
              Asset_Category: 'London',
              asset_model: '30',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$90',
            },
            {
              asset_id: 'Quinn Flynn',
              Asset_Name: 'Support Lead',
              Asset_Category: 'Edinburgh',
             
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$342',
            },
            {
              asset_id: 'Charde Marshall',
              Asset_Name: 'Regional Director',
              Asset_Category: 'San Francisco',
              asset_model: '36',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$470',
            },
            {
              asset_id: 'Haley Kennedy',
              Asset_Name: 'Senior Marketing Designer',
              Asset_Category: 'London',
              asset_model: '43',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$313',
            },
            {
              asset_id: 'Tatyana Fitzpatrick',
              Asset_Name: 'Regional Director',
              Asset_Category: 'London',
              asset_model: '19',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$385',
            },
            {
              asset_id: 'Michael Silva',
              Asset_Name: 'Marketing Designer',
              Asset_Category: 'London',
              
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$198',
            },
            {
              asset_id: 'Paul Byrd',
              Asset_Name: 'Chief Financial Officer (CFO)',
              Asset_Category: 'New York',
              asset_model: '64',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$725',
            },
            {
              asset_id: 'Gloria Little',
              Asset_Name: 'Systems Administrator',
              Asset_Category: 'New York',
              
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$237',
            },
            {
              asset_id: 'Bradley Greer',
              Asset_Name: 'Software Engineer',
              Asset_Category: 'London',
              asset_model: '41',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$132',
            },
            {
              asset_id: 'Dai Rios',
              Asset_Name: 'Personnel Lead',
              Asset_Category: 'Edinburgh',
              asset_model: '35',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$217',
            },
            {
              asset_id: 'Jenette Caldwell',
              Asset_Name: 'Development Lead',
              Asset_Category: 'New York',
              asset_model: '30',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$345',
            },
            {
              asset_id: 'Yuri Berry',
              Asset_Name: 'Chief Marketing Officer (CMO)',
              Asset_Category: 'New York',
              asset_model: '40',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$675',
            },
            {
              asset_id: 'Caesar Vance',
              Asset_Name: 'Pre-Sales Support',
              Asset_Category: 'New York',
              asset_model: '21',
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$106',
            },
            {
              asset_id: 'Doris Wilder',
              Asset_Name: 'Sales Assistant',
              Asset_Category: 'Sidney',
              
              Full_info: <center> <i class="fa fa-eye"> </i> </center>,
              salary: '$85',
            },
            {
              asset_id: 'Angelica Ramos',
              Asset_Name: 'Chief Executive Officer (CEO)',
              Asset_Category: 'London',
              asset_model: '47',
              Full_info: '2009/10/09',
              salary: '$1',
            },
            {
              asset_id: 'Gavin Joyce',
              Asset_Name: 'Developer',
              Asset_Category: 'Edinburgh',
              asset_model: '42',
              Full_info: '2010/12/22',
              salary: '$92',
            },
            {
              asset_id: 'Jennifer Chang',
              Asset_Name: 'Regional Director',
              Asset_Category: 'Singapore',
              asset_model: '28',
              Full_info: '2010/11/14',
              salary: '$357',
            },
            {
              asset_id: 'Brenden Wagner',
              Asset_Name: 'Software Engineer',
              Asset_Category: 'San Francisco',
              asset_model: '28',
              Full_info: '2011/06/07',
              salary: '$206',
            },
            {
              asset_id: 'Fiona Green',
              Asset_Name: 'Chief Operating Officer (COO)',
              Asset_Category: 'San Francisco',
              asset_model: '48',
              Full_info: '2010/03/11',
              salary: '$850',
            },
            {
              asset_id: 'Shou Itou',
              Asset_Name: 'Regional Marketing',
              Asset_Category: 'Tokyo',
              asset_model: '20',
              Full_info: '2011/08/14',
              salary: '$163',
            },
            {
              asset_id: 'Michelle House',
              Asset_Name: 'Integration Specialist',
              Asset_Category: 'Sidney',
              asset_model: '37',
              Full_info: '2011/06/02',
              salary: '$95',
            },
            {
              asset_id: 'Suki Burks',
              Asset_Name: 'Developer',
              Asset_Category: 'London',
              asset_model: '53',
              Full_info: '2009/10/22',
              salary: '$114',
            },
            {
              asset_id: 'Prescott Bartlett',
              Asset_Name: 'Technical Author',
              Asset_Category: 'London',
              asset_model: '27',
              Full_info: '2011/05/07',
              salary: '$145',
            },
            {
              asset_id: 'Gavin Cortez',
              Asset_Name: 'Team Leader',
              Asset_Category: 'San Francisco',
             
              Full_info: '2008/10/26',
              salary: '$235',
            },
            {
              asset_id: 'Martena Mccray',
              Asset_Name: 'Post-Sales support',
              Asset_Category: 'Edinburgh',
              asset_model: '46',
              Full_info: '2011/03/09',
              salary: '$324',
            },
            {
              asset_id: 'Unity Butler',
              Asset_Name: 'Marketing Designer',
              Asset_Category: 'San Francisco',
              asset_model: '47',
              Full_info: '2009/12/09',
              salary: '$85',
            },
            {
              asset_id: 'Howard Hatfield',
              Asset_Name: 'Office Manager',
              Asset_Category: 'San Francisco',
              asset_model: '51',
              Full_info: '2008/12/16',
              salary: '$164',
            },
            {
              asset_id: 'Hope Fuentes',
              Asset_Name: 'Secretary',
              Asset_Category: 'San Francisco',
              asset_model: '41',
              Full_info: '2010/02/12',
              salary: '$109',
            },
            {
              asset_id: 'Vivian Harrell',
              Asset_Name: 'Financial Controller',
              Asset_Category: 'San Francisco',
              asset_model: '62',
              Full_info: '2009/02/14',
              salary: '$452',
            },
            {
              asset_id: 'Timothy Mooney',
              Asset_Name: 'Office Manager',
              Asset_Category: 'London',
              asset_model: '37',
              Full_info: '2008/12/11',
              salary: '$136',
            },
            {
              asset_id: 'Jackson Bradshaw',
              Asset_Name: 'Director',
              Asset_Category: 'New York',
              asset_model: '65',
              Full_info: '2008/09/26',
              salary: '$645',
            },
            {
              asset_id: 'Olivia Liang',
              Asset_Name: 'Support Engineer',
              Asset_Category: 'Singapore',
              asset_model: '64',
              Full_info: '2011/02/03',
              salary: '$234',
            },
            {
              asset_id: 'Bruno Nash',
              Asset_Name: 'Software Engineer',
              Asset_Category: 'London',
              asset_model: '38',
              Full_info: '2011/05/03',
              salary: '$163',
            },
            {
              asset_id: 'Sakura Yamamoto',
              Asset_Name: 'Support Engineer',
              Asset_Category: 'Tokyo',
              asset_model: '37',
              Full_info: '2009/08/19',
              salary: '$139',
            },
            {
              asset_id: 'Thor Walton',
              Asset_Name: 'Developer',
              Asset_Category: 'New York',
             
              Full_info: '2013/08/11',
              salary: '$98',
            },
            {
              asset_id: 'Finn Camacho',
              Asset_Name: 'Support Engineer',
              Asset_Category: 'San Francisco',
              asset_model: '47',
              Full_info: '2009/07/07',
              salary: '$87',
            },
            {
              asset_id: 'Serge Baldwin',
              Asset_Name: 'Data Coordinator',
              Asset_Category: 'Singapore',
              asset_model: '64',
              Full_info: '2012/04/09',
              salary: '$138',
            },
            {
              asset_id: 'Zenaida Frank',
              Asset_Name: 'Software Engineer',
              Asset_Category: 'New York',
              asset_model: '63',
              Full_info: '2010/01/04',
              salary: '$125',
            },
            {
              asset_id: 'Zorita Serrano',
              Asset_Name: 'Software Engineer',
              Asset_Category: 'San Francisco',
              asset_model: '56',
              Full_info: '2012/06/01',
              salary: '$115',
            },
            {
              asset_id: 'Jennifer Acosta',
              Asset_Name: 'Junior Javascript Developer',
              Asset_Category: 'Edinburgh',
              asset_model: '43',
              Full_info: '2013/02/01',
              salary: '$75',
            },
            {
              asset_id: 'Cara Stevens',
              Asset_Name: 'Sales Assistant',
              Asset_Category: 'New York',
              asset_model: '46',
              Full_info: '2011/12/06',
              salary: '$145',
            },
            {
              asset_id: 'Hermione Butler',
              Asset_Name: 'Regional Director',
              Asset_Category: 'London',
              asset_model: '47',
              Full_info: '2011/03/21',
              salary: '$356',
            },
            {
              asset_id: 'Lael Greer',
              Asset_Name: 'Systems Administrator',
              Asset_Category: 'London',
              asset_model: '21',
              Full_info: '2009/02/27',
              salary: '$103',
            },
            {
              asset_id: 'Jonas Alexander',
              Asset_Name: 'Developer',
              Asset_Category: 'San Francisco',
              asset_model: '30',
              Full_info: '2010/07/14',
              salary: '$86',
            },
            {
              asset_id: 'Shad Decker',
              Asset_Name: 'Regional Director',
              Asset_Category: 'Edinburgh',
              asset_model: '51',
              Full_info: '2008/11/13',
              salary: '$183',
            },
            {
              asset_id: 'Michael Bruce',
              Asset_Name: 'Javascript Developer',
              Asset_Category: 'Singapore',
              asset_model: '29',
              Full_info: '2011/06/27',
              salary: '$183',
            },
            {
              asset_id: 'Donna Snider',
              Asset_Name: 'Customer Support',
              Asset_Category: 'New York',
              asset_model: '27',
              Full_info: '2011/01/25',
              salary: '$112',
            },
          ],
        });
      
      return (
          <div >
          
        {/* <DashboardLayout >
        <DashboardNavbar />
        
        <SuiBox py={3}>
        <SuiBox mb={3}>

      <FilterBlock />
       
      
            <Card id="hello">
            
      <MDBDataTableV5 striped entriesOptions={[10, 20, 50]}
           headerTitle = {'Asset Lists'}
        entries={10}
      pagesAmount={4}
      data={datatable}
      pagingBottom
      searchTop
      searchBottom={false}
      checkbox
      headCheckboxID='id6'
      bodyCheckboxID='checkboxes6'
      getValueCheckBox={(e) => {
        showLogs2(e);
      }}
      getValueAllCheckBoxes={(e) => {
        showLogs2(e);
      }}
      multipleCheckboxes/>
          
        </Card>
    </SuiBox>

    </SuiBox>
         </DashboardLayout> */}
    </div>
      )
    }

export default Test

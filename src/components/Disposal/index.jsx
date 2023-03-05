
import React from 'react';
import SuiBox from 'components/SuiBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import { Button, Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import './index'
import FilterBlock from 'components/FilterBlock/FilterBlock';




const Disposal = () => {
  

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
              label: 'Date',
              field: 'Date',
              width: 270,
            },
            {
              label: 'Channel',
              field: 'Channel',
              width: 200,
            },
            {
              label: 'Cost (+)',
              field: 'Cost',
              sort: 'asc',
              width: 100,
            },
            {
              label: 'Action',
              field: 'Action',
              width: 200,
            }
          ],
          rows: [
            { 
              asset_id: 'A1XO009JS',
              Date: '03/07/2022',
              Channel: 'Asecom',
              Cost: '1000',
              Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
            },
            { 
                asset_id: 'A1XO009JS',
                Date: '03/07/2022',
                Channel: 'Asecom',
                Cost: '1000',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                Date: '03/07/2022',
                Channel: 'Asecom',
                Cost: '1000',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                Date: '03/07/2022',
                Channel: 'Asecom',
                Cost: '1000',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                Date: '03/07/2022',
                Channel: 'Asecom',
                Cost: '1000',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                Date: '03/07/2022',
                Channel: 'Asecom',
                Cost: '1000',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                Date: '03/07/2022',
                Channel: 'Asecom',
                Cost: '1000',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                Date: '03/07/2022',
                Channel: 'Asecom',
                Cost: '1000',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                Date: '03/07/2022',
                Channel: 'Asecom',
                Cost: '1000',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                Date: '03/07/2022',
                Channel: 'Asecom',
                Cost: '1000',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                Date: '03/07/2022',
                Channel: 'Asecom',
                Cost: '1000',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
              asset_id: 'A1XO009JS',
              Date: '03/07/2022',
              Channel: 'Asecom',
              Cost: '1000',
              Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
            },


          ],
        });
      
      return (
        <DashboardLayout>
     
        <SuiBox position="relative">
         <DashboardNavbar  />
       <SuiBox>
       <FilterBlock />

         <Card>

       <Grid item xs={12} md={12} xl={12}>
      
            {/* <Card id="hello" >
            <div className="pull-right ">  <span className="border"><i className="fa fa-plus-circle" > </i> <span className="promaro">Add to Disposals </span> </span></div>
      <MDBDataTableV5 striped entries      Options={[10, 20, 50]}
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
          
        </Card> */}
        </Grid>
        </Card>


</SuiBox>    
</SuiBox>
</DashboardLayout>
      )
    }

export default Disposal

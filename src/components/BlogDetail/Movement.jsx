
import React from 'react';
import {MDBDataTableV5} from 'mdbreact';
import { Button, Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import './index'




const Movement = () => {
  

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
              label: 'From',
              field: 'From',
              width: 270,
            },
            {
              label: 'To',
              field: 'To',
              width: 200,
            },
            {
              label: 'Date',
              field: 'Date',
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
              From: 'IT LO',
              To: 'AKURE STATION',
              Date: '03/07/2022',
              Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
            },
            { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },
              { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              }, { 
                asset_id: 'A1XO009JS',
                From: 'IT LO',
                To: 'AKURE STATION',
                Date: '03/07/2022',
                Action: <> <i className="fa fa-pen"> </i> | <i className="fa fa-trash"> </i> </>
              },

          ],
        });
      
      return (
          <>
       
       <Grid item xs={12} md={12} xl={12}>
      
            <Card id="hello" >
            <div className="pull-right ">  <span className="border"><i className="fa fa-plus-circle" > </i> <span className="promaro">Add new Movement </span> </span></div>
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
          
        </Card>
        </Grid>
 </>
      )
    }

export default Movement

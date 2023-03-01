import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Invoice No', width: 100 },
  { field: 'name', headerName: 'Patient Name', width: 200 },
  { field: 'service', headerName: 'Med service', width: 120 },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
  },
  {
    field: 'cost',
    headerName: 'Cost',
    width: 100,
  },
  {
    field:'paid',
    headerName:'Paid Amout',
    width:100
  },
  {
    field: 'balance',
    headerName: 'Balance',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 150,
    renderCell: (params) =>{
        return(
            <>
            <button className='status-btn bg-emerald-500 py-2 px-6 rounded-md text-white'>Pending</button>
            </>
        )
    }
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 100,
    renderCell: (params) =>{
        return(
            <>
            <button className='delete-btn bg-emerald-500 py-2 px-6 rounded-md text-white'>More</button>
            </>
        )
    }
  },
];

const rows = [
  { id: 47857, name: 'Snow', service: 'Jon', date: '01/23/2023' , cost: 3456, paid:1225, balance:1500 },
  { id: 38475, name: 'Lannister', service: 'Cersei', date: '01/23/2023' , cost: 3356, paid:1225, balance:1500 },
  { id: 67845, name: 'Lannister', service: 'Jaime', date: '01/23/2023' , cost: 3756, paid:1225, balance:1500 },
  { id: 98590, name: 'Stark', service: 'Arya', date: '01/23/2023' , cost: 3456, paid:1225, balance:1500 },
  { id: 57849, name: 'Targaryen', service: 'Daenerys', date: '01/23/2023' , cost: 3456, paid:1225, balance:1500 },
  { id: 27485, name: 'Melisandre', service: null, date: '01/23/2023' , cost: 3456, paid:1225, balance:1500 },
  { id: 75893, name: 'Clifford', service: 'Ferrara', date: '01/23/2023' , cost: 3456, paid:1225, balance:1500 },
  { id: 60489, name: 'Frances', service: 'Rossini', date: '01/23/2023' , cost: 3456, paid:1225, balance:1500 },
  { id: 58479, name: 'Roxie', service: 'Harvey', date: '01/23/2023' , cost: 3456, paid:1225, balance:1500 },
];

export default function BillingData() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

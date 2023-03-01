import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Patient Name', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120,
  },
   {
    field: 'reason',
    headerName: 'Reason',
    type: 'number',
    width: 150,
  },
  {
    field: 'date',
    headerName: 'Admission',
    type: 'number',
    width: 150,
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 230,
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
  { id: 1, name: 'Snow', phone: '0786798576', age: 35, reason:'Optical test', date:'12-02-2023' },
  { id: 2, name: 'Lannister', phone: '0786798576', age: 42, reason:'Optical test', date:'12-02-2023' },
  { id: 3, name: 'Lannister', phone: '0786798576', age: 45, reason:'Optical test', date:'12-02-2023' },
  { id: 4, name: 'Stark', phone: '0786798576', age: 16, reason:'Optical test', date:'12-02-2023' },
  { id: 5, name: 'Targaryen', phone: '0786798576', age: null, reason:'Optical test', date:'12-02-2023' },
  { id: 6, name: 'Melisandre', phone: '0786798576', age: 150, reason:'Optical test', date:'12-02-2023' },
  { id: 7, name: 'Clifford', phone: '0786798576', age: 44, reason:'Optical test', date:'12-02-2023' },
  { id: 8, name: 'Frances', phone: '0786798576', age: 36, reason:'Optical test', date:'12-02-2023' },
  { id: 9, name: 'Roxie', phone: '0786798576', age: 65, reason:'Optical test', date:'12-02-2023' },
];

export default function PortalData() {
  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
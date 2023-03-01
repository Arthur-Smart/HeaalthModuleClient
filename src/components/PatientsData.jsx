import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Patient Name', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
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
  { id: 1, name: 'Snow', phone: 'Jon', age: 35, date:'12-02-2023' },
  { id: 2, name: 'Lannister', phone: 'Cersei', age: 42, date:'12-02-2023' },
  { id: 3, name: 'Lannister', phone: 'Jaime', age: 45, date:'12-02-2023' },
  { id: 4, name: 'Stark', phone: 'Arya', age: 16, date:'12-02-2023' },
  { id: 5, name: 'Targaryen', phone: 'Daenerys', age: null, date:'12-02-2023' },
  { id: 6, name: 'Melisandre', phone: null, age: 150, date:'12-02-2023' },
  { id: 7, name: 'Clifford', phone: 'Ferrara', age: 44, date:'12-02-2023' },
  { id: 8, name: 'Frances', phone: 'Rossini', age: 36, date:'12-02-2023' },
  { id: 9, name: 'Roxie', phone: 'Harvey', age: 65, date:'12-02-2023' },
];

export default function PatientsData() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
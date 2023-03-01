import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Patient Name', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
   {
    field: 'date',
    headerName: 'Admission',
    type: 'number',
    width: 150,
  },
  {
    field: 'charges',
    headerName: 'Charges',
    type: 'number',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 180,
    renderCell: (params) =>{
        return(
            <>
            <button className='state-btn bg-emerald-500 py-2 px-6 rounded-md text-white'>More</button>
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
            <p className='cursor-pointer ml-2 text-red-500'><i class="fa-solid fa-trash"></i></p>
            </>
        )
    }
  },
];

const rows = [
  { id: 1, name: 'Snow', phone: 'Jon', age: 35, date:'12-02-2023', charges:2300 },
  { id: 2, name: 'Lannister', phone: 'Cersei', age: 42, date:'12-02-2023', charges:2300 },
  { id: 3, name: 'Lannister', phone: 'Jaime', age: 45, date:'12-02-2023', charges:2300 },
  { id: 4, name: 'Stark', phone: 'Arya', age: 16, date:'12-02-2023', charges:2300 },
  { id: 5, name: 'Targaryen', phone: 'Daenerys', age: null, date:'12-02-2023', charges:2300 },
  { id: 6, name: 'Melisandre', phone: null, age: 150, date:'12-02-2023', charges:2300 },
  { id: 7, name: 'Clifford', phone: 'Ferrara', age: 44, date:'12-02-2023', charges:2300 },
  { id: 8, name: 'Frances', phone: 'Rossini', age: 36, date:'12-02-2023', charges:2300 },
  { id: 9, name: 'Roxie', phone: 'Harvey', age: 65, date:'12-02-2023', charges:2300 },
];

export default function AppointmentData() {
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
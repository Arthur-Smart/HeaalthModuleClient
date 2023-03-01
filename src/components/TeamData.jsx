import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Worker ID', width: 150 },
  {field:'avarta', headerName:'Order image', width:150,
  renderCell:(params) => {
    return (
        <div className='worker-avatar'>
          <img src={require('../assets/pic.jpg')} alt='img'/>
        </div>
    )
  }
  },
  { field: 'name', headerName: 'Full Name', width: 200 },
  { field: 'email', headerName: 'Full Email', width: 200 },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 200,
  },
  {
    field: 'position',
    headerName: 'Position',
    width: 150,
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 160,
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
  { id: 2343, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 5847, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 5604, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 6859, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 5635, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 5836, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 1283, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 7846, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 4587, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 4587, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 4587, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 4587, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 4587, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
  { id: 4587, name: 'James Witney', email: 'Jon@gmail.com', phone: "0757838474", position:'doctor' },
];

export default function TeamData() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
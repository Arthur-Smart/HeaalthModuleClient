import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {field:'avarta', headerName:'Product image', width:150,
  renderCell:(params) => {
    return (
        <div className='worker-avatar'>
          <img src={require('../assets/pic.jpg')} alt='img'/>
        </div>
    )
  }
  },
  { field: 'name', headerName: 'Product name', width: 200 },
  { field: 'category', headerName: 'Category', width: 150 },
  {
    field: 'price',
    headerName: 'Product price',
    type: 'number',
    width: 120,
  },
   {
    field: 'description',
    headerName: 'Product description',
    type: 'number',
    width: 350,
  },
  
  {
    field: 'action',
    headerName: 'Delete',
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
  { id: 1, name: 'Snow', category:"Dental", price: 3755, description:"This product id is to be used on doctors prescription. Exessive usage of it may lead to alot of harm", date:'12-02-2023' },
  { id: 2, name: 'Lannister', category:"Dental", price: 4264, description:"This product id is to be used on doctors prescription. Exessive usage of it may lead to alot of harm", date:'12-02-2023' },
  { id: 3, name: 'Lannister', category:"Dental", price: 4235, description:"This product id is to be used on doctors prescription. Exessive usage of it may lead to alot of harm", date:'12-02-2023' },
  { id: 4, name: 'Stark', category:"Dental", price: 1246, description:"This product id is to be used on doctors prescription. Exessive usage of it may lead to alot of harm", date:'12-02-2023' },
  { id: 5, name: 'Targaryen', category:"Dental", price: 3456, description:"This product id is to be used on doctors prescription. Exessive usage of it may lead to alot of harm", date:'12-02-2023' },
  { id: 6, name: 'Melisandre', category:"Dental", price: 1250, description:"This product id is to be used on doctors prescription. Exessive usage of it may lead to alot of harm", date:'12-02-2023' },
  { id: 7, name: 'Clifford', category:"Dental", price: 4244, description:"This product id is to be used on doctors prescription. Exessive usage of it may lead to alot of harm", date:'12-02-2023' },
  { id: 8, name: 'Frances', category:"Dental", price: 3656, description:"This product id is to be used on doctors prescription. Exessive usage of it may lead to alot of harm", date:'12-02-2023' },
  { id: 9, name: 'Roxie', category:"Dental", price: 6765, description:"This product id is to be used on doctors prescription. Exessive usage of it may lead to alot of harm", date:'12-02-2023' },
];

export default function PharmacyData() {
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
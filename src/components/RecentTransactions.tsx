import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import ComponentHeader from './ComponentHeader';

const rows = [
  { id: uuidv4(), type: 'Expense', description: 'Groceries', amount: 50.75, date: '2023-10-01' },
  { id: uuidv4(), type: 'Income', description: 'Salary', amount: 1500.00, date: '2023-10-05' },
  { id: uuidv4(), type: 'Expense', description: 'Rent', amount: 700.00, date: '2023-10-03' },
  { id: uuidv4(), type: 'Income', description: 'Freelance Project', amount: 300.00, date: '2023-10-10' },
  { id: uuidv4(), type: 'Expense', description: 'Utilities', amount: 120.00, date: '2023-10-07' },
  { id: uuidv4(), type: 'Expense', description: 'Dining Out', amount: 60.00, date: '2023-10-08' },
  { id: uuidv4(), type: 'Income', description: 'Investment Return', amount: 200.00, date: '2023-10-12' },
  { id: uuidv4(), type: 'Expense', description: 'Transportation', amount: 30.00, date: '2023-10-09' },
  { id: uuidv4(), type: 'Expense', description: 'Entertainment', amount: 80.00, date: '2023-10-11' },
];

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'type',
    headerName: 'Type',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 300,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 150,
    editable: true,
    valueParser: (value) => {return Number(value).toFixed(2);}
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 150,
    editable: true,
    valueGetter: (value) => {return new Date(value);}
  },
];


const RecentTransactions: React.FC = () => {
  return (
    <><ComponentHeader title="Transações Recentes" /><Box sx={{ height: '500px', width: '100%', backgroundColor: 'background.paper', borderRadius: 1 }}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick />
      </div>
    </Box></>
  );
};

export default RecentTransactions;
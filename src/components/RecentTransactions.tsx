import React from 'react';
import { Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'amount', headerName: 'Amount', width: 150 },
];

const rows = [
  { id: 1, date: '2025-01-01', description: 'Salary', amount: '$3000' },
  { id: 2, date: '2025-01-05', description: 'Groceries', amount: '$200' },
  { id: 3, date: '2025-01-10', description: 'Rent', amount: '$1000' },
];

const RecentTransactions: React.FC = () => {
  return (
    <Paper sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h6" gutterBottom>
        Recent Transactions
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pagination pageSizeOptions={[5]} />
      </div>
    </Paper>
  );
};

export default RecentTransactions;
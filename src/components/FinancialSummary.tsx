import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const FinancialSummary: React.FC = () => {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="h6" gutterBottom>
        Financial Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">Total Income</Typography>
          <Typography variant="h6">$5000</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">Total Expenses</Typography>
          <Typography variant="h6">$3000</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">Savings</Typography>
          <Typography variant="h6">$2000</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FinancialSummary;
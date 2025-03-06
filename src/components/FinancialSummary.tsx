import * as React from 'react';
import { Box, Grid2 as Grid, Card, CardContent, Typography } from '@mui/material';
import ComponentHeader from './ComponentHeader';

const FinancialSummary: React.FC = () => {
  const income = 2000.01; // Exemplo de valor de entrada
  const expenses = 1500.00; // Exemplo de valor de saída
  const transactions = 10; // Exemplo de número de transações

  return (
    <>
      <ComponentHeader title="Relatório Financeiro" />
      <Box sx={{ flexGrow: 1, backgroundColor: 'background.paper', p: 2, borderRadius: 1 }}>
        <Grid container spacing={2} minHeight={160}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Receita mensal
                </Typography>
                <Typography variant="h4" component="div" color="primary">
                  ${income.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Despesa mensal
                </Typography>
                <Typography variant="h4" component="div" color="error">
                  ${expenses.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Total em transações
                </Typography>
                <Typography variant="h4" component="div">
                ${transactions.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FinancialSummary;
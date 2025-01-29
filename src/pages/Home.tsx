import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from '../components/Header';
import FinancialSummary from '../components/FinancialSummary';
import RecentTransactions from '../components/RecentTransactions';
import Chart from '../components/Chart';
import AppTheme from '../shared-theme/AppTheme';

const Home: React.FC = () => {
  return (
    <>
      <AppTheme>
        <CssBaseline />
        <Header />
        <Container sx={{ padding: 4 }}>
          <FinancialSummary />
          <RecentTransactions />
          <Chart />
        </Container>
      </AppTheme>
    </>
  );
};

export default Home;
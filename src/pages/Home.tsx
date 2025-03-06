import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from '../components/Header';
import FinancialSummary from '../components/FinancialSummary';
import RecentTransactions from '../components/RecentTransactions';
import AppTheme from '../components/shared-theme/AppTheme';
import PieChartRelatory from '../components/PieChartRelatory';

const Home: React.FC = () => {
  return (
    <>
      <AppTheme>
        <CssBaseline />
        <Header />
        <Container sx={{ padding: 4 }}>
          <FinancialSummary />
          <RecentTransactions />
          <PieChartRelatory />
        </Container>
      </AppTheme>
    </>
  );
};

export default Home;
import React from 'react';
import { CssBaseline, Paper, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import AppTheme from './shared-theme/AppTheme';
import ColorModeSelect from './shared-theme/ColorModeSelect';

// Registre os componentes necessários do Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Income',
            data: [3000, 2500, 3200, 2800, 3500, 4000],
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
        },
        {
            label: 'Expenses',
            data: [2000, 1800, 2200, 2100, 2300, 2500],
            fill: false,
            backgroundColor: 'red',
            borderColor: 'red',
        },
    ],
};

const Chart: React.FC = () => {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
            <Paper sx={{ padding: 2, marginTop: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Financial Overview
                </Typography>
                <Line data={data} />
            </Paper>
        </AppTheme>
    );
};

export default Chart;
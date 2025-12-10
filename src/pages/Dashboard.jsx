import React from 'react';
import { Typography, Grid } from '@mui/material';
import { stats } from '../data/dashboardData';
import StatCard from '../components/StatCard';

const Dashboard = () => {
    return (
        <>
            <Typography
                sx={{
                    fontWeight: 500,
                    color: '#1a1a2e',
                    mb: 1,
                    fontSize: 'clamp(22px, 2.2vw, 28px)',
                }}
            >
                Welcome back, John! 👋
            </Typography>

            <Typography variant='body1' sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                Here's what's happening with your job search today.
            </Typography>

            {/* ACCOUNT SUMMARY */}
            <Grid container spacing={3}>
                {stats.map((stat, index) => {
                    const IconComponent = stat.icon;

                    return (
                        <StatCard stat={stat} IconComponent={IconComponent} key={index} />
                    );
                })}
            </Grid>

        </>
    );
};

export default Dashboard;

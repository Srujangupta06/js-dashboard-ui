/**
 * Example Component showing how to use custom hooks
 * This demonstrates the modular architecture for easy API integration
 */

import React from 'react';
import { Grid, Box, CircularProgress, Alert } from '@mui/material';
import StatCard from '../components/StatCard';
import { useStats } from '../hooks/useStats';

const DashboardStats = () => {
    // Use custom hook to fetch stats
    const { stats, loading, error, refetch } = useStats();

    // Loading state
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    // Error state
    if (error) {
        return (
            <Alert 
                severity="error" 
                sx={{ mb: 3 }}
                action={
                    <button onClick={refetch}>Retry</button>
                }
            >
                {error}
            </Alert>
        );
    }

    // Success state - render stats
    return (
        <Grid container spacing={3}>
            {stats.map((stat) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={stat.title}>
                    <StatCard {...stat} />
                </Grid>
            ))}
        </Grid>
    );
};

export default DashboardStats;

/**
 * USAGE IN PARENT COMPONENT:
 * 
 * import DashboardStats from './examples/DashboardStats';
 * 
 * function App() {
 *     return (
 *         <div>
 *             <DashboardStats />
 *         </div>
 *     );
 * }
 * 
 * 
 * WHEN YOU HAVE A REAL API:
 * 
 * 1. Update .env file:
 *    VITE_API_BASE_URL=https://your-api.com/api
 * 
 * 2. Update services/statsService.js:
 *    export const fetchStats = async () => {
 *        const data = await get(API_ENDPOINTS.STATS);
 *        return data;
 *    };
 * 
 * 3. That's it! The component will automatically use real data
 */

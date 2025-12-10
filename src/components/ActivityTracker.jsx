import React, { useState } from 'react';
import { Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

// Dummy data for different time periods
const dailyData = [
    { name: 'Mon', applications: 4 },
    { name: 'Tue', applications: 6 },
    { name: 'Wed', applications: 3 },
    { name: 'Thu', applications: 8 },
    { name: 'Fri', applications: 5 },
    { name: 'Sat', applications: 2 },
    { name: 'Sun', applications: 1 },
];

const weeklyData = [
    { name: 'Week 1', applications: 18 },
    { name: 'Week 2', applications: 25 },
    { name: 'Week 3', applications: 22 },
    { name: 'Week 4', applications: 30 },
];

const monthlyData = [
    { name: 'Aug', applications: 45 },
    { name: 'Sep', applications: 62 },
    { name: 'Oct', applications: 58 },
    { name: 'Nov', applications: 75 },
    { name: 'Dec', applications: 95 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <Box
                sx={{
                    background: '#ffffff',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    p: 1.5,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#1e293b', mb: 0.5 }}>
                    {payload[0].payload.name}
                </Typography>
                <Typography sx={{ fontSize: '13px', color: '#ea590c', fontWeight: 700 }}>
                    {payload[0].value} applications
                </Typography>
            </Box>
        );
    }
    return null;
};

const ActivityTracker = () => {
    const [timeRange, setTimeRange] = useState('weekly');

    const handleTimeRangeChange = (event, newRange) => {
        if (newRange !== null) {
            setTimeRange(newRange);
        }
    };

    const getData = () => {
        switch (timeRange) {
            case 'daily':
                return dailyData;
            case 'weekly':
                return weeklyData;
            case 'monthly':
                return monthlyData;
            default:
                return weeklyData;
        }
    };

    const getTotalApplications = () => {
        const data = getData();
        return data.reduce((sum, item) => sum + item.applications, 0);
    };

    const getAverageApplications = () => {
        const data = getData();
        return Math.round(data.reduce((sum, item) => sum + item.applications, 0) / data.length);
    };

    return (
        <Box
            sx={{
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e9ecef',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'flex-start' },
                    gap: { xs: 2, sm: 0 },
                    mb: 3
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontSize: { xs: '16px', sm: '18px' },
                            fontWeight: 600,
                            color: '#1e293b',
                            mb: 0.5,
                        }}
                    >
                        Application Activity
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '13px' },
                            color: '#64748b',
                        }}
                    >
                        Track your job search consistency
                    </Typography>
                </Box>

                {/* Time Range Toggle */}
                <ToggleButtonGroup
                    value={timeRange}
                    exclusive
                    onChange={handleTimeRangeChange}
                    size="small"
                    sx={{
                        '& .MuiToggleButton-root': {
                            px: { xs: 1.5, sm: 2 },
                            py: 0.5,
                            fontSize: { xs: '11px', sm: '12px' },
                            fontWeight: 600,
                            textTransform: 'none',
                            border: '1px solid #e9ecef',
                            color: '#64748b',
                            '&.Mui-selected': {
                                background: '#ea590c',
                                color: '#ffffff',
                                '&:hover': {
                                    background: '#ea590c',
                                },
                            },
                        },
                    }}
                >
                    <ToggleButton value="daily">Daily</ToggleButton>
                    <ToggleButton value="weekly">Weekly</ToggleButton>
                    <ToggleButton value="monthly">Monthly</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Stats Cards */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 2,
                    mb: 3
                }}
            >
                <Box
                    sx={{
                        p: 2,
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #ea590c25 0%, #ea590c15 100%)',
                        border: '1px solid #ea590c30',
                    }}
                >
                    <Typography sx={{ fontSize: '12px', color: '#64748b', mb: 0.5 }}>
                        Total Applications
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '20px', sm: '24px' }, fontWeight: 700, color: '#ea590c' }}>
                        {getTotalApplications()}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        p: 2,
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #10b98125 0%, #10b98115 100%)',
                        border: '1px solid #10b98130',
                    }}
                >
                    <Typography sx={{ fontSize: '12px', color: '#64748b', mb: 0.5 }}>
                        Average per {timeRange === 'daily' ? 'Day' : timeRange === 'weekly' ? 'Week' : 'Month'}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography sx={{ fontSize: { xs: '20px', sm: '24px' }, fontWeight: 700, color: '#10b981' }}>
                            {getAverageApplications()}
                        </Typography>
                        <TrendingUp size={20} color="#10b981" />
                    </Box>
                </Box>
            </Box>

            {/* Chart */}
            <Box sx={{ width: '100%', height: { xs: '220px', sm: '280px' } }}>
                <ResponsiveContainer width="100%" height="100%">
                    {timeRange === 'daily' ? (
                        <BarChart data={getData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                axisLine={{ stroke: '#e9ecef' }}
                            />
                            <YAxis
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                axisLine={{ stroke: '#e9ecef' }}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8f9fa' }} />
                            <Bar
                                dataKey="applications"
                                fill="#ce4a03ff" // mui primary bleu color
                                radius={[8, 8, 0, 0]}
                                maxBarSize={40}
                            />
                        </BarChart>
                    ) : (
                        <LineChart data={getData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                axisLine={{ stroke: '#e9ecef' }}
                            />
                            <YAxis
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                axisLine={{ stroke: '#e9ecef' }}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="applications"
                                stroke="#4f46e5"
                                strokeWidth={3}
                                dot={{ fill: '#4f46e5', r: 5 }}
                                activeDot={{ r: 7 }}
                            />
                        </LineChart>
                    )}
                </ResponsiveContainer>
            </Box>
        </Box>
    );
};

export default ActivityTracker;

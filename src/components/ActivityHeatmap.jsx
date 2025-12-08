import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';
import { Activity } from 'lucide-react';

const ActivityHeatmap = () => {
    const [timeRange, setTimeRange] = useState('year');

    // Generate dummy activity data for the past year
    const generateActivityData = () => {
        const data = [];
        const today = new Date();
        const daysToShow = timeRange === 'year' ? 365 : timeRange === 'month' ? 30 : timeRange === 'week' ? 7 : 365;

        for (let i = daysToShow - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);

            // Random activity level (0-4)
            const level = Math.floor(Math.random() * 5);

            data.push({
                date: date.toISOString().split('T')[0],
                count: level === 0 ? 0 : level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 5 : 8,
                level: level,
                day: date.getDay(),
                week: Math.floor(i / 7),
            });
        }
        return data;
    };

    const activityData = generateActivityData();

    // Get color based on activity level
    const getColor = (level) => {
        const colors = {
            0: '#ebedf0',
            1: '#9be9a8',
            2: '#40c463',
            3: '#30a14e',
            4: '#216e39',
        };
        return colors[level] || colors[0];
    };

    // Group data by weeks
    const groupByWeeks = () => {
        const weeks = [];
        let currentWeek = [];

        activityData.forEach((day, index) => {
            currentWeek.push(day);
            if (day.day === 6 || index === activityData.length - 1) {
                weeks.push([...currentWeek]);
                currentWeek = [];
            }
        });

        return weeks;
    };

    const weeks = groupByWeeks();
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const handleTimeRangeChange = (event, newRange) => {
        if (newRange !== null) {
            setTimeRange(newRange);
        }
    };

    return (
        <Card
            sx={{
                background: '#ffffff',
                border: '1px solid #e9ecef',
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Activity size={24} color="#667eea" />
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a2e' }}>
                            Application Activity
                        </Typography>
                    </Box>
                    <ToggleButtonGroup
                        value={timeRange}
                        exclusive
                        onChange={handleTimeRangeChange}
                        size="small"
                        sx={{
                            '& .MuiToggleButton-root': {
                                textTransform: 'none',
                                fontWeight: 500,
                                fontSize: '13px',
                                px: 2,
                                py: 0.5,
                                border: '1px solid #e9ecef',
                                color: '#6c757d',
                                '&.Mui-selected': {
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    },
                                },
                            },
                        }}
                    >
                        <ToggleButton value="week">Week</ToggleButton>
                        <ToggleButton value="month">Month</ToggleButton>
                        <ToggleButton value="year">Year</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                <Box sx={{ overflowX: 'auto', pb: 2 }}>
                    <Box sx={{ display: 'flex', gap: 0.5, minWidth: 'fit-content' }}>
                        {/* Day labels */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mr: 1 }}>
                            <Box sx={{ height: 12 }} />
                            {dayLabels.map((day, index) => (
                                <Box
                                    key={day}
                                    sx={{
                                        height: 12,
                                        display: index % 2 === 1 ? 'flex' : 'none',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography variant="caption" sx={{ fontSize: '10px', color: '#6c757d', fontWeight: 500 }}>
                                        {day}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Heatmap grid */}
                        <Box>
                            {/* Month labels */}
                            <Box sx={{ display: 'flex', gap: 0.5, mb: 0.5, height: 12 }}>
                                {weeks.map((week, weekIndex) => {
                                    const firstDay = week[0];
                                    if (firstDay) {
                                        const date = new Date(firstDay.date);
                                        const isFirstWeekOfMonth = date.getDate() <= 7;
                                        if (isFirstWeekOfMonth) {
                                            return (
                                                <Typography
                                                    key={weekIndex}
                                                    variant="caption"
                                                    sx={{
                                                        fontSize: '10px',
                                                        color: '#6c757d',
                                                        fontWeight: 500,
                                                        minWidth: 12,
                                                    }}
                                                >
                                                    {monthLabels[date.getMonth()]}
                                                </Typography>
                                            );
                                        }
                                    }
                                    return <Box key={weekIndex} sx={{ minWidth: 12 }} />;
                                })}
                            </Box>

                            {/* Grid of boxes */}
                            <Box sx={{ display: 'flex', gap: 0.5 }}>
                                {weeks.map((week, weekIndex) => (
                                    <Box key={weekIndex} sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                        {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
                                            const dayData = week.find((d) => d.day === dayIndex);
                                            if (dayData) {
                                                const date = new Date(dayData.date);
                                                const formattedDate = date.toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                });
                                                return (
                                                    <Tooltip
                                                        key={dayIndex}
                                                        title={`${dayData.count} applications on ${formattedDate}`}
                                                        arrow
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: 12,
                                                                height: 12,
                                                                borderRadius: '2px',
                                                                backgroundColor: getColor(dayData.level),
                                                                border: '1px solid rgba(27, 31, 35, 0.06)',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s ease',
                                                                '&:hover': {
                                                                    transform: 'scale(1.3)',
                                                                    border: '1px solid rgba(27, 31, 35, 0.3)',
                                                                    zIndex: 1,
                                                                },
                                                            }}
                                                        />
                                                    </Tooltip>
                                                );
                                            }
                                            return (
                                                <Box
                                                    key={dayIndex}
                                                    sx={{
                                                        width: 12,
                                                        height: 12,
                                                        borderRadius: '2px',
                                                        backgroundColor: '#ebedf0',
                                                        border: '1px solid rgba(27, 31, 35, 0.06)',
                                                    }}
                                                />
                                            );
                                        })}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Legend */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
                    <Typography variant="caption" sx={{ fontSize: '11px', color: '#6c757d', fontWeight: 500 }}>
                        Less
                    </Typography>
                    {[0, 1, 2, 3, 4].map((level) => (
                        <Box
                            key={level}
                            sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '2px',
                                backgroundColor: getColor(level),
                                border: '1px solid rgba(27, 31, 35, 0.06)',
                            }}
                        />
                    ))}
                    <Typography variant="caption" sx={{ fontSize: '11px', color: '#6c757d', fontWeight: 500 }}>
                        More
                    </Typography>
                </Box>

                {/* Summary Stats */}
                <Box
                    sx={{
                        mt: 3,
                        pt: 3,
                        borderTop: '1px solid #e9ecef',
                        display: 'flex',
                        gap: 3,
                        flexWrap: 'wrap',
                    }}
                >
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#667eea', mb: 0.5 }}>
                            {activityData.reduce((sum, day) => sum + day.count, 0)}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#6c757d', fontWeight: 500 }}>
                            Total Applications
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#40c463', mb: 0.5 }}>
                            {activityData.filter((day) => day.count > 0).length}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#6c757d', fontWeight: 500 }}>
                            Active Days
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#f093fb', mb: 0.5 }}>
                            {Math.max(...activityData.map((day) => day.count))}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#6c757d', fontWeight: 500 }}>
                            Best Day
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#ffa726', mb: 0.5 }}>
                            {(activityData.reduce((sum, day) => sum + day.count, 0) / activityData.length).toFixed(1)}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#6c757d', fontWeight: 500 }}>
                            Daily Average
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ActivityHeatmap;

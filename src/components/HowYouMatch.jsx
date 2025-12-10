import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const matchData = [
    { name: 'MERN Stack', value: 15, color: '#06b6d4' },
    { name: 'Frontend', value: 20, color: '#3b82f6' },
    { name: 'Backend', value: 25, color: '#a855f7' },
    { name: 'UI Developer', value: 10, color: '#8b5cf6' },
    { name: 'Full Stack Developer', value: 30, color: '#4f46e5' },
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
                <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#1e293b', mb: 0.5 }}>
                    {payload[0].name}
                </Typography>
                <Typography sx={{ fontSize: '12px', color: '#64748b' }}>
                    {payload[0].value}% match
                </Typography>
            </Box>
        );
    }
    return null;
};

const HowYouMatch = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(null);
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
            <Box sx={{ mb: 3 }}>
                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#1e293b',
                        mb: 0.5,
                    }}
                >
                    How You Match
                </Typography>
                <Typography
                    sx={{
                        fontSize: '13px',
                        color: '#64748b',
                    }}
                >
                    Your profile matches these job categories
                </Typography>
            </Box>

            {/* Chart Container */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* Donut Chart */}
                <Box sx={{ width: '100%', height: 240, position: 'relative', mb: 3 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={matchData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={3}
                                dataKey="value"
                                onMouseEnter={onPieEnter}
                                onMouseLeave={onPieLeave}
                            >
                                {matchData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        stroke={activeIndex === index ? '#ffffff' : 'none'}
                                        strokeWidth={activeIndex === index ? 3 : 0}
                                        style={{
                                            filter: activeIndex === index ? 'brightness(1.1)' : 'brightness(1)',
                                            transition: 'all 0.3s ease',
                                        }}
                                    />
                                ))}
                            </Pie>
                            {/* <Tooltip content={<CustomTooltip />} /> */}
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Text */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                            pointerEvents: 'none',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '32px',
                                fontWeight: 700,
                                color: '#1e293b',
                                lineHeight: 1,
                            }}
                        >
                            100%
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '12px',
                                color: '#94a3b8',
                                fontWeight: 500,
                                mt: 0.5,
                            }}
                        >
                            Total Match
                        </Typography>
                    </Box>
                </Box>

                {/* Legend - Modern Cards */}
                <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                    {matchData.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                p: 1.5,
                                borderRadius: '8px',
                                background: activeIndex === index ? `${item.color}10` : '#f8f9fa',
                                border: `1px solid ${activeIndex === index ? item.color + '30' : '#e9ecef'}`,
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    background: `${item.color}10`,
                                    border: `1px solid ${item.color}30`,
                                    transform: 'translateY(-2px)',
                                },
                            }}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            {/* Color Indicator */}
                            <Box
                                sx={{
                                    width: 12,
                                    height: 12,
                                    background: item.color,
                                    borderRadius: '50%',
                                    flexShrink: 0,
                                    boxShadow: `0 0 0 3px ${item.color}20`,
                                }}
                            />

                            {/* Title & Value */}
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        color: '#64748b',
                                        fontWeight: 500,
                                        lineHeight: 1.2,
                                        mb: 0.25,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '16px',
                                        color: item.color,
                                        fontWeight: 700,
                                        lineHeight: 1,
                                    }}
                                >
                                    {item.value}%
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default HowYouMatch;

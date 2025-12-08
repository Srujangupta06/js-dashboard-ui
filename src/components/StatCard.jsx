import React from 'react';
import { Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { TrendingUp } from 'lucide-react';

const StatCard = ({ stat }) => {
    return (
        <Card
            sx={{
                background: '#ffffff',
                border: '1px solid #e9ecef',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                height: '100%',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                    border: `1px solid ${stat.color}`,
                },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100px',
                    height: '100px',
                    background: stat.gradient,
                    opacity: 0.08,
                    borderRadius: '0 0 0 100%',
                }}
            />
            <CardContent sx={{ position: 'relative', zIndex: 1, p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: '14px',
                            background: stat.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 4px 12px ${stat.color}40`,
                        }}
                    >
                        <stat.icon size={28} color="white" />
                    </Box>
                    <Chip
                        label={stat.change}
                        size="small"
                        sx={{
                            background: 'rgba(56, 239, 125, 0.1)',
                            color: '#11998e',
                            fontWeight: 600,
                            border: '1px solid rgba(56, 239, 125, 0.2)',
                            height: '28px',
                        }}
                        icon={<TrendingUp size={14} />}
                    />
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5, color: '#1a1a2e' }}>
                    {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: '#6c757d', fontWeight: 500 }}>
                    {stat.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default StatCard;

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const StatCard = ({ stat, IconComponent }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}
            sx={{
                background: `linear-gradient(135deg, ${stat.color}25 0%, ${stat.color}15 100%)`,
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                border: `1px solid ${stat.color}30`,
                height: '100%',
                width: { xs: '100%', sm: '30%', md: '30%', lg: '18%', xl: '15%' },
                '&:hover': {
                    cursor:'pointer',
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 24px ${stat.color}30`,
                    background: `linear-gradient(135deg, ${stat.color}35 0%, ${stat.color}20 100%)`,
                    '& .stat-value': {
                        color: stat.color,
                    },
                },
            }}
        >
            <Box
                sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    minHeight: '80px',
                }}
            >
                {/* Icon - Compact */}
                <Box
                    sx={{
                        width: 44,
                        height: 44,
                        minWidth: 44,
                        borderRadius: '10px',
                        background: `${stat.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <IconComponent
                        size={22}
                        style={{
                            color: stat.color,
                            strokeWidth: 2.5,
                        }}
                    />
                </Box>

                {/* Stats Content */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    {/* Value - Prominent */}
                    <Typography
                        className="stat-value"
                        sx={{
                            fontSize: 'clamp(24px, 3vw, 32px)',
                            fontWeight: 600,
                            color: '#1e293b',
                            lineHeight: 1.2,
                            mb: 0.25,
                            letterSpacing: '-0.5px',
                            transition: 'color 0.3s ease',
                        }}
                    >
                        {stat.value}
                    </Typography>

                    {/* Title */}
                    <Typography
                        sx={{
                            fontSize: '13px',
                            color: '#64748b',
                            fontWeight: 500,
                            lineHeight: 1.3,
                        }}
                    >
                        {stat.title}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default StatCard;

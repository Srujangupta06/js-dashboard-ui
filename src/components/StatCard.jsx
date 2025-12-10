import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const StatCard = ({ stat, IconComponent }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}
            sx={{
                background: '#ffffffff',
                border: 'none',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                height: '100%',
                width: { xs: '100%', sm: '30%', md: '30%', lg: '18%', xl: '15%' },
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    borderColor: '#dee2e6',
                },
            }}
        >
            <Box
                sx={{
                    p: 3,
                    '&:last-child': {
                        pb: 3,
                    }
                }}
            >
                {/* Icon and Content Container */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    {/* Icon */}
                    <Box
                        sx={{
                            width: 40,
                            height: 40,
                            minWidth: 40,
                            borderRadius: '10px',
                            background: stat.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <IconComponent
                            size={20}
                            style={{
                                color: '#ffffff',
                                strokeWidth: 2.5,
                            }}
                        />
                    </Box>

                    {/* Stats Content */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        {/* Value */}
                        <Typography
                            sx={{
                                fontSize: 'clamp(24px, 3vw, 32px)',
                                fontWeight: 400,
                                color: '#1a1a2e',
                                lineHeight: 1.2,
                                mb: 0.5,
                                letterSpacing: '-0.5px',
                            }}
                        >
                            {stat.value}
                        </Typography>

                        {/* Title */}
                        <Typography
                            sx={{
                                fontSize: '13px',
                                color: '#6c757d',
                                fontWeight: 500,
                                lineHeight: 1.4,
                            }}
                        >
                            {stat.title}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default StatCard;

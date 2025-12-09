import React from 'react';
import { Box, Card, CardContent, Typography, Paper, Grid } from '@mui/material';
import { PieChart } from 'lucide-react';

const ApplicationStatus = ({ applicationStatus }) => {
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <PieChart size={24} color="#ea590c" />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a2e' }}>
                        Application Status
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                    {applicationStatus.map((item, index) => (
                        <Grid item xs={6} sm={3} key={index}>
                            <Paper
                                sx={{
                                    p: 2.5,
                                    background: `${item.color}15`,
                                    border: `1px solid ${item.color}30`,
                                    borderRadius: '14px',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: `0 4px 12px ${item.color}40`,
                                    },
                                }}
                            >
                                <item.icon size={36} color={item.color} style={{ marginBottom: '12px' }} />
                                <Typography variant="h4" sx={{ fontWeight: 700, color: item.color, mb: 0.5 }}>
                                    {item.count}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#6c757d', fontWeight: 500 }}>
                                    {item.status}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ApplicationStatus;

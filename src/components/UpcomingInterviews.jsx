import React from 'react';
import { Box, Card, CardContent, Typography, Paper, Chip } from '@mui/material';
import { Calendar, Clock } from 'lucide-react';

const UpcomingInterviews = ({ interviews }) => {
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
                    <Calendar size={24} color="#ea590c" />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a2e' }}>
                        Upcoming Interviews
                    </Typography>
                </Box>
                {interviews.map((interview, index) => (
                    <Paper
                        key={index}
                        sx={{
                            p: 2.5,
                            mb: 2.5,
                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                            border: '1px solid rgba(102, 126, 234, 0.15)',
                            borderRadius: '14px',
                            transition: 'all 0.3s ease',
                            boxShadow: 'none',
                            '&:hover': {
                                transform: 'scale(1.02)',
                                border: '1px solid rgba(102, 126, 234, 0.4)',
                                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.15)',
                            },
                        }}
                    >
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1a2e', mb: 0.75 }}>
                            {interview.company}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#6c757d', display: 'block', mb: 1.5, fontWeight: 500 }}>
                            {interview.position}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                            <Chip
                                label={interview.date}
                                size="small"
                                icon={<Calendar size={12} />}
                                sx={{
                                    background: 'rgba(66, 165, 245, 0.1)',
                                    color: '#42a5f5',
                                    fontSize: '11px',
                                    height: '26px',
                                    fontWeight: 500,
                                }}
                            />
                            <Chip
                                label={interview.time}
                                size="small"
                                icon={<Clock size={12} />}
                                sx={{
                                    background: 'rgba(255, 167, 38, 0.1)',
                                    color: '#ffa726',
                                    fontSize: '11px',
                                    height: '26px',
                                    fontWeight: 500,
                                }}
                            />
                        </Box>
                    </Paper>
                ))}
            </CardContent>
        </Card>
    );
};

export default UpcomingInterviews;

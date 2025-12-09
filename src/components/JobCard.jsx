import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Chip } from '@mui/material';
import { MapPin, DollarSign, Briefcase, Clock } from 'lucide-react';

const JobCard = ({ job }) => {
    return (
        <Card
            sx={{
                background: '#ffffff',
                border: '1px solid #e9ecef',
                borderRadius: '14px',
                mb: 2.5,
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                '&:hover': {
                    transform: 'translateX(8px)',
                    border: '1px solid rgba(102, 126, 234, 0.5)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                },
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', gap: 2.5 }}>
                    <Avatar
                        sx={{
                            width: 64,
                            height: 64,
                            fontSize: '32px',
                            background: 'linear-gradient(135deg, #ea590c 0%, #f97316 100%)',
                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                        }}
                    >
                        {job.logo}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a2e', mb: 0.5 }}>
                                    {job.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#6c757d', mb: 1.5, fontWeight: 500 }}>
                                    {job.company}
                                </Typography>
                            </Box>
                            <Chip
                                label={job.status}
                                size="small"
                                sx={{
                                    background:
                                        job.status === 'Applied'
                                            ? 'rgba(66, 165, 245, 0.1)'
                                            : job.status === 'Interview'
                                                ? 'rgba(102, 187, 106, 0.1)'
                                                : 'rgba(255, 167, 38, 0.1)',
                                    color:
                                        job.status === 'Applied'
                                            ? '#42a5f5'
                                            : job.status === 'Interview'
                                                ? '#66bb6a'
                                                : '#ffa726',
                                    fontWeight: 600,
                                    height: '28px',
                                    border:
                                        job.status === 'Applied'
                                            ? '1px solid rgba(66, 165, 245, 0.3)'
                                            : job.status === 'Interview'
                                                ? '1px solid rgba(102, 187, 106, 0.3)'
                                                : '1px solid rgba(255, 167, 38, 0.3)',
                                }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                                <MapPin size={16} color="#6c757d" />
                                <Typography variant="body2" sx={{ color: '#6c757d', fontWeight: 500 }}>
                                    {job.location}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                                <DollarSign size={16} color="#6c757d" />
                                <Typography variant="body2" sx={{ color: '#6c757d', fontWeight: 500 }}>
                                    {job.salary}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                                <Briefcase size={16} color="#6c757d" />
                                <Typography variant="body2" sx={{ color: '#6c757d', fontWeight: 500 }}>
                                    {job.type}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                                <Clock size={16} color="#6c757d" />
                                <Typography variant="body2" sx={{ color: '#6c757d', fontWeight: 500 }}>
                                    {job.posted}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default JobCard;

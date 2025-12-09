import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import JobCard from './JobCard';

const RecommendedJobs = ({ userRole = 'Product Manager' }) => {
    // Recommended jobs based on user role
    const recommendedJobs = [
        {
            id: 1,
            title: 'Senior Product Manager',
            company: 'Google',
            location: 'Mountain View, CA',
            salary: '$180k - $220k',
            type: 'Full-Time',
            posted: '1 hour ago',
            status: 'New',
            logo: '🔍',
        },
        {
            id: 2,
            title: 'Product Manager - AI/ML',
            company: 'Microsoft',
            location: 'Seattle, WA',
            salary: '$160k - $200k',
            type: 'Full-Time',
            posted: '3 hours ago',
            status: 'New',
            logo: '💻',
        },
        {
            id: 3,
            title: 'Lead Product Manager',
            company: 'Amazon',
            location: 'Remote',
            salary: '$170k - $210k',
            type: 'Full-Time',
            posted: '5 hours ago',
            status: 'New',
            logo: '📦',
        },
        {
            id: 4,
            title: 'Product Manager - Platform',
            company: 'Meta',
            location: 'Menlo Park, CA',
            salary: '$175k - $215k',
            type: 'Full-Time',
            posted: '1 day ago',
            status: 'New',
            logo: '👥',
        },
        {
            id: 5,
            title: 'Senior Product Manager - Growth',
            company: 'Netflix',
            location: 'Los Gatos, CA',
            salary: '$190k - $230k',
            type: 'Full-Time',
            posted: '2 days ago',
            status: 'New',
            logo: '🎬',
        },
    ];

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
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                            <Briefcase size={24} color="#ea590c" />
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a2e' }}>
                                Recommended for You
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#6c757d', fontWeight: 500 }}>
                            Based on your role: <strong>{userRole}</strong>
                        </Typography>
                    </Box>
                    <Button
                        endIcon={<ArrowUpRight size={16} />}
                        sx={{
                            color: '#ea590c',
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': { background: 'rgba(102, 126, 234, 0.08)' },
                        }}
                    >
                        View All
                    </Button>
                </Box>

                <Grid container spacing={2.5}>
                    {recommendedJobs.map((job) => (
                        <Grid item xs={12} key={job.id}>
                            <JobCard job={job} />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default RecommendedJobs;

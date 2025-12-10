import { Typography, Grid, Box, Button } from '@mui/material';
import { Map, Calendar } from 'lucide-react';
import { stats } from '../data/dashboardData';
import StatCard from '../components/StatCard';
import RecommendedJobs from '../components/RecommendedJobs';
import AppliedJobs from '../components/AppliedJobs';
import HowYouMatch from '../components/HowYouMatch';
import UpcomingInterviews from '../components/UpcomingInterviews';
import ActivityTracker from '../components/ActivityTracker';

const Dashboard = () => {
    return (
        <>
            <Typography
                sx={{
                    fontWeight: 400,
                    color: '#1a1a2e',
                    mb: 1,
                    fontSize: 'clamp(22px, 2.2vw, 28px)',
                }}
            >
                Welcome back, <Box component={'span'} sx={{ fontWeight: 600, color: '#ea590c' }}>John!</Box> 👋
            </Typography>

            <Typography variant='body1' sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                Here's what's happening with your job search today.
            </Typography>

           
                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#1e293b',
                    }}
                >
                    Overview
                </Typography>

            {/*  Stats */}
            <Grid container spacing={3} mb={3} mt={2}>
                {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                        <StatCard stat={stat} IconComponent={IconComponent} key={index} />
                    );
                })}
            </Grid>

            {/* Activity Tracker - Job Seeker Activity Chart */}
            <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', lg: 'row' }, mb: {xs:3,md:2,lg:3} }}>
                <Box
                    sx={{
                        flex: 1,
                        height: { xs: 'auto', lg: '600px' }
                    }}
                >
                    <ActivityTracker />
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box
                    sx={{
                        width: { xs: '100%',md:'50%', lg: '380px' },
                        height: { xs: 'auto',md:'600px', lg: '600px' },
                        flexShrink: 0,
                        overflow: 'scroll'
                    }}
                >
                    <HowYouMatch />
                </Box>
                <Box
                    sx={{
                        width: { xs: '100%',md:'50%', lg: '380px' },
                        height: { xs: '600px',md:'600px', lg: '600px' },
                        flexShrink: 0
                    }}
                >
                    <RecommendedJobs />
                </Box>
                </Box>
            </Box>

            {/* Recommended Jobs, Maps & How You Match Section */}
            <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', lg: 'row' } }}>
                {/* Maps Placeholder */}
                <Box
                    sx={{
                        width: '400px',
                        height: { xs: '400px', lg: '600px' },
                        background: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e9ecef',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Map size={48} color="#94a3b8" />
                    <Typography
                        sx={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#64748b',
                        }}
                    >
                        Maps
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            color: '#94a3b8',
                        }}
                    >
                        Interactive map view coming soon
                    </Typography>
                </Box>

                {/* Applied Jobs Section */}
                <Box>
                    <AppliedJobs />
                </Box>
            </Box>


        </>
    );
};

export default Dashboard;

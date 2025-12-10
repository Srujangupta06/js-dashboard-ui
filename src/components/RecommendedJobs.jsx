import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { MapPin, Building2, Code, Database, Cpu, Palette, Film, Music, Brain, ArrowUpRight } from 'lucide-react';

const recommendedJobsData = [
    {
        title: 'Full Stack Developer',
        company: 'HOLTEC INTERNATIONAL',
        location: 'Camden, NJ',
        postedTime: '2 hours ago',
        icon: Building2,
        logoColor: '#94a3b8',
    },
    {
        title: 'Jr. Full Stack Developer CMP',
        company: 'SAIC',
        location: 'Ashburn, VA',
        postedTime: '2 hours ago',
        icon: Building2,
        logoColor: '#94a3b8',
    },
    {
        title: 'Full Stack Developer CMPRS',
        company: 'SAIC',
        location: 'Ashburn, VA',
        postedTime: '2 hours ago',
        icon: Building2,
        logoColor: '#94a3b8',
    },
    {
        title: 'Backend Engineer',
        company: 'Shipt',
        location: 'Greater Birmingham',
        postedTime: '2 hours ago',
        icon: Building2,
        logoColor: '#94a3b8',
    },
    {
        title: 'Senior Staff, Backend Engine',
        company: 'Coupang',
        location: 'Seattle, WA',
        postedTime: '3 hours ago',
        icon: Building2,
        logoColor: '#94a3b8',
    },
    {
        title: 'Staff Software Engineer',
        company: 'Intuit',
        location: 'New York City, NY',
        postedTime: '4 hours ago',
        icon: Building2,
        logoColor: '#94a3b8',
    },
    {
        title: 'Senior Customer Facing Backend',
        company: 'Adobe',
        location: 'San Jose, CA',
        postedTime: '5 hours ago',
        icon: Building2,
        logoColor: '#94a3b8',
    },
    {
        title: 'Frontend Developer',
        company: 'Netflix',
        location: 'Los Angeles, CA',
        postedTime: '6 hours ago',
        icon: Building2,
        logoColor: '#94a3b8',
    },
    {
        title: 'DevOps Engineer',
        company: 'Spotify',
        location: 'Remote',
        postedTime: '8 hours ago',
        icon: Building2,
        logoColor: '#94a3b8',
    },
    {
        title: 'Machine Learning Engineer',
        company: 'Tesla',
        location: 'Palo Alto, CA',
        postedTime: '1 day ago',
        icon: Building2,
        logoColor: '#94a3b8',
    },
];

const JobItem = ({ job }) => {
    const IconComponent = job.icon;

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1.5,
                p: 2,
                borderBottom: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                '&:hover': {
                    background: 'linear-gradient(90deg, #fff7ed 0%, #ffffff 100%)',
                    borderLeft: '3px solid #ea590c',
                    paddingLeft: '13px',
                    '& .job-title': {
                        color: '#ea590c',
                    },
                    '& .arrow-icon': {
                        opacity: 1,
                        background: '#ea590c',
                    },
                },
                '&:last-child': {
                    borderBottom: 'none',
                },
            }}
        >
            {/* Company Logo */}
            <Avatar
                sx={{
                    width: 40,
                    height: 40,
                    background: job.logoColor || '#94a3b8',
                    flexShrink: 0,
                }}
            >
                <IconComponent size={20} color="#ffffff" />
            </Avatar>

            {/* Job Details */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
                {/* Title & Posted Time */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5, gap: 1 }}>
                    <Typography
                        className="job-title"
                        sx={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#1e293b',
                            lineHeight: 1.4,
                            flex: 1,
                            transition: 'color 0.3s ease',
                        }}
                    >
                        {job.title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '11px',
                            fontWeight: 500,
                            color: '#94a3b8',
                            flexShrink: 0,
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {job.postedTime}
                    </Typography>
                </Box>

                {/* Company */}
                <Typography
                    sx={{
                        fontSize: '12px',
                        color: '#64748b',
                        mb: 0.75,
                        fontWeight: 500,
                    }}
                >
                    {job.company}
                </Typography>

                {/* Location */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <MapPin size={12} style={{ color: '#94a3b8' }} />
                    <Typography sx={{ fontSize: '11px', color: '#64748b' }}>
                        {job.location}
                    </Typography>
                </Box>
            </Box>

            {/* Arrow Icon - Diagonal */}
            <Box
                className="arrow-icon"
                sx={{
                    position: 'absolute',
                    right: 8,
                    bottom:8,
                    width: 24,
                    height: 24,
                    borderRadius: '6px',
                    background: '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'all 0.3s ease',
                }}
            >
                <ArrowUpRight size={14} color="#ffffff" />
            </Box>
        </Box>
    );
};

const RecommendedJobs = () => {
    return (
        <Box
            sx={{
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e9ecef',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}
        >
            {/* Header */}
            <Box sx={{ p: 1.5, borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography
                        sx={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#1e293b',
                        }}
                    >
                        Recommended Jobs
                    </Typography>
                </Box>

                {/* View All Button */}
                <Box
                    component="button"
                    sx={{
                        background: 'transparent',
                        border: 'none',
                        color: '#ea590c',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        py: '4px',
                        px: 1.5,
                        borderRadius: '6px',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            background: '#fff7ed',
                        },
                    }}
                    onClick={() => console.log('View all jobs')}
                >
                    View All
                </Box>
            </Box>

            {/* Jobs List - Scrollable */}
            <Box
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#cbd5e1',
                        borderRadius: '10px',
                        '&:hover': {
                            background: '#94a3b8',
                        },
                    },
                }}
            >
                {recommendedJobsData.map((job, index) => (
                    <JobItem key={index} job={job} />
                ))}
            </Box>
        </Box>
    );
};

export default RecommendedJobs;

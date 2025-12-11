import { Box, Typography, LinearProgress, IconButton, Button } from '@mui/material';
import { Eye, CheckCircle, XCircle, AlertCircle, Briefcase, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const appliedJobsData = [
    {
        title: 'Senior Frontend Developer',
        company: 'Google Inc.',
        status: 'Approved',
        statusType: 'success',
        progress: 85,
        date: '18 Apr 2024',
    },
    {
        title: 'UI/UX Designer',
        company: 'Meta',
        status: 'Pending',
        statusType: 'pending',
        progress: 30,
        date: '18 Apr 2024',
    },
    {
        title: 'Product Manager',
        company: 'Amazon',
        status: 'Rejected',
        statusType: 'rejected',
        progress: 65,
        date: '20 May 2024',
    },
    {
        title: 'Backend Engineer',
        company: 'Microsoft',
        status: 'Approved',
        statusType: 'success',
        progress: 45,
        date: '12 Jul 2024',
    },
];

const getStatusIcon = (type) => {
    switch (type) {
        case 'success':
            return <CheckCircle size={18} color="#10b981" />;
        case 'rejected':
            return <XCircle size={18} color="#ef4444" />;
        case 'pending':
            return <AlertCircle size={18} color="#f59e0b" />;
        default:
            return null;
    }
};

const getStatusColor = (type) => {
    switch (type) {
        case 'success':
            return '#10b981';
        case 'rejected':
            return '#ef4444';
        case 'pending':
            return '#f59e0b';
        default:
            return '#94a3b8';
    }
};

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState(null);
    useEffect(() => {
        // Set to null to show empty state, or appliedJobsData to show jobs
        setAppliedJobs(appliedJobsData);
    }, [])

    return (
        <Box
            sx={{
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e9ecef',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                overflow: 'hidden',
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    p: 2.5,
                    borderBottom: '1px solid #f1f5f9',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#1e293b',
                    }}
                >
                    Applied Jobs
                </Typography>
                {!appliedJobs || appliedJobs.length === 0 && <Typography
                    sx={{
                        fontSize: '13px',
                        color: '#ea590c',
                        fontWeight: 600,
                        cursor: 'pointer',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    View All
                </Typography>}
            </Box>

            {/* Table Content - Header and Rows scroll together */}
            {!appliedJobs || appliedJobs.length === 0 ? (
                // Empty State
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: 8,
                        px: 3,
                    }}
                >
                    <Box
                        sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #4f46e525 0%, #4f46e515 100%)',
                            border: '2px solid #4f46e530',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3,
                        }}
                    >
                        <Briefcase size={36} color="#4f46e5" />
                    </Box>

                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: 600,
                            color: '#1e293b',
                            mb: 1,
                        }}
                    >
                        No Applied Jobs Yet
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '14px',
                            color: '#64748b',
                            textAlign: 'center',
                            mb: 4,
                            maxWidth: 400,
                        }}
                    >
                        You haven't applied to any jobs yet. Start exploring opportunities!
                    </Typography>

                    <Button
                        variant="contained"
                        endIcon={<ArrowRight size={18} />}
                        sx={{
                            background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
                            color: '#ffffff',
                            textTransform: 'none',
                            fontSize: '14px',
                            fontWeight: 600,
                            px: 3,
                            py: 1.25,
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #4338ca 0%, #4f46e5 100%)',
                                boxShadow: '0 6px 16px rgba(79, 70, 229, 0.4)',
                            },
                        }}
                        onClick={() => console.log('Navigate to job search')}
                    >
                        Apply Now
                    </Button>
                </Box>
            ) : (
                // Table with Header and Rows scrolling together
                <Box
                    sx={{
                        overflowX: 'auto',
                        '&::-webkit-scrollbar': {
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#f1f5f9',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#cbd5e1',
                            borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: '#94a3b8',
                        },
                    }}
                >
                    <Box sx={{ minWidth: '700px' }}>
                        {/* Column Headers */}
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: '2fr 1.5fr 1fr 1.5fr 0.5fr',
                                gap: 2,
                                px: 2.5,
                                py: 1.5,
                                background: '#f8f9fa',
                                borderBottom: '1px solid #e9ecef',
                            }}
                        >
                            <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>
                                Name
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>
                                Status
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>
                                Date
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>
                                Progress
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>
                                Action
                            </Typography>
                        </Box>

                        {/* Job Rows */}
                        {appliedJobs.map((job, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: '2fr 1.5fr 1fr 1.5fr 0.5fr',
                                    gap: 2,
                                    px: 2.5,
                                    py: 2,
                                    alignItems: 'center',
                                    borderBottom: index < appliedJobs.length - 1 ? '1px solid #f1f5f9' : 'none',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        background: '#f8f9fa',
                                    },
                                }}
                            >
                                {/* Name */}
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            color: '#1e293b',
                                            mb: 0.25,
                                        }}
                                    >
                                        {job.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '12px',
                                            color: '#64748b',
                                        }}
                                    >
                                        {job.company}
                                    </Typography>
                                </Box>

                                {/* Status */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {getStatusIcon(job.statusType)}
                                    <Typography
                                        sx={{
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            color: getStatusColor(job.statusType),
                                        }}
                                    >
                                        {job.status}
                                    </Typography>
                                </Box>

                                {/* Date */}
                                <Typography
                                    sx={{
                                        fontSize: '13px',
                                        color: '#64748b',
                                    }}
                                >
                                    {job.date}
                                </Typography>

                                {/* Progress */}
                                <Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={job.progress}
                                        sx={{
                                            height: 6,
                                            borderRadius: 3,
                                            backgroundColor: '#e9ecef',
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: '#6366f1',
                                                borderRadius: 3,
                                            },
                                        }}
                                    />
                                </Box>

                                {/* Action */}
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <IconButton
                                        size="small"
                                        sx={{
                                            color: '#64748b',
                                            '&:hover': {
                                                background: '#f1f5f9',
                                                color: '#ea590c',
                                            },
                                        }}
                                    >
                                        <Eye size={18} />
                                    </IconButton>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default AppliedJobs;

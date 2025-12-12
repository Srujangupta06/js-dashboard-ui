import { useState } from 'react';
import { Box, Typography, IconButton, Chip, Tooltip, Button } from '@mui/material';
import { Eye, BookmarkX, Building2, MapPin, Clock, DollarSign, Briefcase } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

// Sample saved jobs data
const sampleSavedJobs = [
    {
        id: 1,
        companyName: 'Google Inc.',
        companyLogo: 'https://logo.clearbit.com/google.com',
        jobTitle: 'Senior Frontend Developer',
        location: 'Mountain View, CA',
        salary: '$120k - $180k',
        jobType: 'Full-time',
        postedDate: '2024-12-08',
        savedDate: '2024-12-10',
        jobUrl: '#',
    },
    {
        id: 2,
        companyName: 'Microsoft Corporation',
        companyLogo: 'https://logo.clearbit.com/microsoft.com',
        jobTitle: 'Cloud Solutions Architect',
        location: 'Redmond, WA',
        salary: '$130k - $200k',
        jobType: 'Full-time',
        postedDate: '2024-12-07',
        savedDate: '2024-12-09',
        jobUrl: '#',
    },
    {
        id: 3,
        companyName: 'Apple Inc.',
        companyLogo: 'https://logo.clearbit.com/apple.com',
        jobTitle: 'iOS Developer',
        location: 'Cupertino, CA',
        salary: '$140k - $190k',
        jobType: 'Full-time',
        postedDate: '2024-12-06',
        savedDate: '2024-12-08',
        jobUrl: '#',
    },
];

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const calculateDaysSaved = (savedDate) => {
    return formatDistanceToNow(new Date(savedDate), { addSuffix: true });
};

const SavedJobsTable = ({ jobs = sampleSavedJobs }) => {
    const [savedJobs, setSavedJobs] = useState(jobs);
    const [hoveredRow, setHoveredRow] = useState(null);

    const handleUnsaveJob = (jobId) => {
        setSavedJobs(savedJobs.filter(job => job.id !== jobId));
        console.log('Unsaved job:', jobId);
    };

    const handleViewJob = (jobUrl) => {
        console.log('View job:', jobUrl);
        // Navigate to job details
    };

    if (!savedJobs || savedJobs.length === 0) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: { xs: '60px 20px', md: '80px 24px' },
                    background: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    border: '1px solid #e9ecef',
                    animation: 'fadeIn 0.6s ease-out',
                }}
            >
                <Box
                    sx={{
                        width: { xs: 80, md: 100 },
                        height: { xs: 80, md: 100 },
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(234, 89, 12, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%)',
                        border: '3px solid rgba(234, 89, 12, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        animation: 'pulse 2s ease-in-out infinite',
                        '@keyframes pulse': {
                            '0%, 100%': { transform: 'scale(1)' },
                            '50%': { transform: 'scale(1.05)' },
                        },
                    }}
                >
                    <Briefcase size={48} color="#ea590c" />
                </Box>
                <Typography sx={{ fontSize: { xs: '20px', md: '24px' }, fontWeight: 700, color: '#1e293b', mb: 1.5 }}>
                    No Saved Jobs
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: '14px', md: '15px' },
                        color: '#64748b',
                        textAlign: 'center',
                        maxWidth: 400,
                        lineHeight: 1.6,
                    }}
                >
                    You've unsaved all jobs. Start exploring and save jobs you're interested in!
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%', animation: 'fadeIn 0.6s ease-out' }}>
            {/* Desktop Table View */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'block' },
                    background: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    border: '1px solid #e9ecef',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        overflowX: 'auto',
                        overflowY: 'auto',
                        maxHeight: '550px',
                        '&::-webkit-scrollbar': {
                            width: '8px',
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
                    <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                        <Box
                            component="thead"
                            sx={{
                                background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
                                borderBottom: '2px solid #e9ecef',
                                position: 'sticky',
                                top: 0,
                                zIndex: 10,
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                            }}
                        >
                            <Box component="tr">
                                <Box component="th" sx={{ padding: '18px 20px', textAlign: 'left', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap', background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)', width: '25%', minWidth: '200px' }}>
                                    Company
                                </Box>
                                <Box component="th" sx={{ padding: '18px 20px', textAlign: 'left', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap', background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)', width: '28%', minWidth: '200px' }}>
                                    Job Title
                                </Box>
                                <Box component="th" sx={{ padding: '18px 20px', textAlign: 'left', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap', background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)', width: '18%', minWidth: '140px' }}>
                                    Location
                                </Box>
                                <Box component="th" sx={{ padding: '18px 20px', textAlign: 'left', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap', background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)', width: '17%', minWidth: '130px' }}>
                                    Salary
                                </Box>
                                <Box component="th" sx={{ padding: '18px 20px', textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap', background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)', width: '12%', minWidth: '120px' }}>
                                    Actions
                                </Box>
                            </Box>
                        </Box>
                        <Box component="tbody">
                            {savedJobs.map((job, index) => {
                                const isHovered = hoveredRow === job.id;
                                return (
                                    <Box
                                        component="tr"
                                        key={job.id}
                                        onMouseEnter={() => setHoveredRow(job.id)}
                                        onMouseLeave={() => setHoveredRow(null)}
                                        sx={{
                                            borderBottom: index < savedJobs.length - 1 ? '1px solid #f1f5f9' : 'none',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            background: isHovered ? 'linear-gradient(135deg, rgba(234, 89, 12, 0.06) 0%, rgba(249, 115, 22, 0.06) 100%)' : 'transparent',
                                        }}
                                    >
                                        {/* Company */}
                                        <Box component="td" sx={{ padding: '16px 20px', verticalAlign: 'middle' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                <Box sx={{ position: 'relative', width: 44, height: 44, flexShrink: 0 }}>
                                                    <Box
                                                        component="img"
                                                        src={job.companyLogo}
                                                        alt={job.companyName}
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            borderRadius: '10px',
                                                            objectFit: 'cover',
                                                            border: '1px solid #e9ecef',
                                                            background: '#ffffff',
                                                            padding: '4px',
                                                        }}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <Box sx={{ display: 'none', width: '100%', height: '100%', borderRadius: '10px', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', alignItems: 'center', justifyContent: 'center', color: '#64748b', border: '1px solid #e9ecef' }}>
                                                        <Building2 size={20} />
                                                    </Box>
                                                </Box>
                                                <Tooltip title={job.companyName} arrow placement="top">
                                                    <Typography sx={{ fontSize: '14px', fontWeight: 600, color: isHovered ? '#ea590c' : '#1e293b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', cursor: 'default', transition: 'color 0.2s ease' }}>
                                                        {job.companyName}
                                                    </Typography>
                                                </Tooltip>
                                            </Box>
                                        </Box>

                                        {/* Job Title */}
                                        <Box component="td" sx={{ padding: '16px 20px', verticalAlign: 'middle' }}>
                                            <Tooltip title={job.jobTitle} arrow placement="top">
                                                <Typography sx={{ fontSize: '14px', fontWeight: 600, color: isHovered ? '#ea590c' : '#1e293b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', cursor: 'default', transition: 'color 0.2s ease' }}>
                                                    {job.jobTitle}
                                                </Typography>
                                            </Tooltip>
                                        </Box>

                                        {/* Location */}
                                        <Box component="td" sx={{ padding: '16px 12px 16px 20px', verticalAlign: 'middle' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <MapPin size={16} style={{ color: '#94a3b8', flexShrink: 0 }} />
                                                <Typography sx={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>
                                                    {job.location}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Salary */}
                                        <Box component="td" sx={{ padding: '16px 20px', verticalAlign: 'middle' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <DollarSign size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                                                <Typography sx={{ fontSize: '13px', color: '#10b981', fontWeight: 600 }}>
                                                    {job.salary}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Actions */}
                                        <Box component="td" sx={{ padding: '16px 20px', verticalAlign: 'middle', textAlign: 'center' }}>
                                            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                                                <Tooltip title="View Job Details" arrow placement="top">
                                                    <IconButton
                                                        onClick={() => handleViewJob(job.jobUrl)}
                                                        size="small"
                                                        sx={{
                                                            background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
                                                            color: '#64748b',
                                                            border: '1px solid #e9ecef',
                                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #ea590c 0%, #f97316 100%)',
                                                                color: '#ffffff',
                                                                borderColor: '#ea590c',
                                                                transform: 'scale(1.1)',
                                                                boxShadow: '0 4px 12px rgba(234, 89, 12, 0.3)',
                                                            },
                                                        }}
                                                    >
                                                        <Eye size={18} />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Unsave Job" arrow placement="top">
                                                    <IconButton
                                                        onClick={() => handleUnsaveJob(job.id)}
                                                        size="small"
                                                        sx={{
                                                            background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                                                            color: '#ef4444',
                                                            border: '1px solid #fecaca',
                                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                                                color: '#ffffff',
                                                                borderColor: '#ef4444',
                                                                transform: 'scale(1.1)',
                                                                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
                                                            },
                                                        }}
                                                    >
                                                        <BookmarkX size={18} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Mobile Card View */}
            <Box sx={{ display: { xs: 'grid', md: 'none' }, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
                {savedJobs.map((job) => (
                    <Box
                        key={job.id}
                        sx={{
                            background: '#ffffff',
                            borderRadius: '16px',
                            padding: { xs: '16px', sm: '20px' },
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                            border: '1px solid #e9ecef',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            animation: 'fadeIn 0.5s ease-out',
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 24px rgba(234, 89, 12, 0.15)',
                                borderColor: '#ea590c',
                            },
                        }}
                    >
                        {/* Card Header */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1, minWidth: 0 }}>
                                <Box sx={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
                                    <Box component="img" src={job.companyLogo} alt={job.companyName} sx={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e9ecef', background: '#ffffff', padding: '4px' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                                    <Box sx={{ display: 'none', width: '100%', height: '100%', borderRadius: '8px', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', alignItems: 'center', justifyContent: 'center', color: '#64748b', border: '1px solid #e9ecef' }}>
                                        <Building2 size={16} />
                                    </Box>
                                </Box>
                                <Typography sx={{ fontSize: { xs: '12px', sm: '13px' }, fontWeight: 600, color: '#1e293b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {job.companyName}
                                </Typography>
                            </Box>
                            {/* Saved Duration Badge */}
                            <Chip
                                icon={<Clock size={12} />}
                                label={calculateDaysSaved(job.savedDate)}
                                size="small"
                                sx={{
                                    backgroundColor: '#f0f9ff',
                                    color: '#0284c7',
                                    fontWeight: 600,
                                    fontSize: '10px',
                                    height: '22px',
                                    borderRadius: '6px',
                                    '& .MuiChip-icon': {
                                        color: '#0284c7',
                                        marginLeft: '4px',
                                    },
                                }}
                            />
                        </Box>

                        {/* Job Title */}
                        <Typography sx={{ fontSize: { xs: '15px', sm: '16px' }, fontWeight: 700, color: '#1e293b', mb: 2, lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, lineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {job.jobTitle}
                        </Typography>

                        {/* Job Details */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#64748b' }}>
                                <MapPin size={14} style={{ flexShrink: 0 }} />
                                <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>{job.location}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#10b981' }}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>{job.salary}</Typography>
                            </Box>
                        </Box>

                        {/* Card Footer */}
                        <Box sx={{ display: 'flex', gap: 1, pt: 2, borderTop: '1px solid #f1f5f9' }}>
                            <Button
                                variant="outlined"
                                size="small"
                                startIcon={<BookmarkX size={14} />}
                                onClick={() => handleUnsaveJob(job.id)}
                                sx={{
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    borderColor: '#fecaca',
                                    color: '#ef4444',
                                    background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                                    padding: '4px 10px',
                                    minWidth: 'auto',
                                    '&:hover': {
                                        borderColor: '#ef4444',
                                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                        color: '#ffffff',
                                    },
                                }}
                            >
                                Unsave
                            </Button>
                            {/* <Button
                                variant="contained"
                                startIcon={<Eye size={16} />}
                                onClick={() => handleViewJob(job.jobUrl)}
                                sx={{
                                    flex: 1,
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    background: 'linear-gradient(135deg, #ea590c 0%, #f97316 100%)',
                                    color: '#ffffff',
                                    boxShadow: '0 2px 8px rgba(234, 89, 12, 0.25)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
                                        boxShadow: '0 4px 12px rgba(234, 89, 12, 0.35)',
                                    },
                                }}
                            >
                                View Application
                            </Button> */}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SavedJobsTable;

import { useState } from 'react';
import { Box, Typography, IconButton, Chip, Tooltip } from '@mui/material';
import { Eye, Download, Briefcase, Building2, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

// Sample data - replace with actual API data
const sampleAppliedJobs = [
    {
        id: 1,
        companyName: 'Google Inc.',
        companyLogo: 'https://logo.clearbit.com/google.com',
        jobTitle: 'Senior Frontend Developer',
        appliedDate: '2024-12-01',
        status: 'shortlisted',
        resumeFile: 'resume_google_frontend.pdf',
        resumeUrl: '#',
        jobUrl: '#',
    },
    {
        id: 2,
        companyName: 'Meta Platforms, Inc.',
        companyLogo: 'https://logo.clearbit.com/meta.com',
        jobTitle: 'Full Stack Software Engineer - React & Node.js',
        appliedDate: '2024-11-28',
        status: 'pending',
        resumeFile: 'resume_meta_fullstack.pdf',
        resumeUrl: '#',
        jobUrl: '#',
    },
    {
        id: 3,
        companyName: 'Amazon Web Services',
        companyLogo: 'https://logo.clearbit.com/aws.amazon.com',
        jobTitle: 'Cloud Solutions Architect',
        appliedDate: '2024-11-25',
        status: 'rejected',
        resumeFile: 'resume_aws_architect.pdf',
        resumeUrl: '#',
        jobUrl: '#',
    },
    {
        id: 4,
        companyName: 'Microsoft Corporation',
        companyLogo: 'https://logo.clearbit.com/microsoft.com',
        jobTitle: 'UI/UX Designer',
        appliedDate: '2024-11-20',
        status: 'shortlisted',
        resumeFile: 'resume_microsoft_designer.pdf',
        resumeUrl: '#',
        jobUrl: '#',
    },
    {
        id: 5,
        companyName: 'Apple Inc.',
        companyLogo: 'https://logo.clearbit.com/apple.com',
        jobTitle: 'iOS Developer',
        appliedDate: '2024-11-15',
        status: 'pending',
        resumeFile: 'resume_apple_ios.pdf',
        resumeUrl: '#',
        jobUrl: '#',
    },
    {
        id: 6,
        companyName: 'Netflix',
        companyLogo: 'https://logo.clearbit.com/netflix.com',
        jobTitle: 'Backend Engineer - Streaming Platform',
        appliedDate: '2024-11-10',
        status: 'rejected',
        resumeFile: 'resume_netflix_backend.pdf',
        resumeUrl: '#',
        jobUrl: '#',
    },
    {
        id: 7,
        companyName: 'Tesla Motors',
        companyLogo: 'https://logo.clearbit.com/tesla.com',
        jobTitle: 'Software Engineer - Autopilot',
        appliedDate: '2024-11-05',
        status: 'shortlisted',
        resumeFile: 'resume_tesla_autopilot.pdf',
        resumeUrl: '#',
        jobUrl: '#',
    },
    {
        id: 8,
        companyName: 'Spotify Technology',
        companyLogo: 'https://logo.clearbit.com/spotify.com',
        jobTitle: 'Data Scientist',
        appliedDate: '2024-10-30',
        status: 'pending',
        resumeFile: 'resume_spotify_data.pdf',
        resumeUrl: '#',
        jobUrl: '#',
    },
];

const getStatusConfig = (status) => {
    switch (status) {
        case 'shortlisted':
            return {
                label: 'Shortlisted',
                color: '#10b981',
                bgColor: '#d1fae5',
                icon: <CheckCircle size={14} />,
            };
        case 'rejected':
            return {
                label: 'Rejected',
                color: '#ef4444',
                bgColor: '#fee2e2',
                icon: <XCircle size={14} />,
            };
        case 'pending':
            return {
                label: 'Pending',
                color: '#f59e0b',
                bgColor: '#fef3c7',
                icon: <Clock size={14} />,
            };
        default:
            return {
                label: 'Unknown',
                color: '#6b7280',
                bgColor: '#f3f4f6',
                icon: <Clock size={14} />,
            };
    }
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const AppliedJobsTable = ({ jobs = sampleAppliedJobs }) => {
    const [hoveredRow, setHoveredRow] = useState(null);

    const handleViewJob = (jobUrl) => {
        console.log('View job:', jobUrl);
        // Navigate to job details
    };

    const handleDownloadResume = (resumeUrl, resumeFile) => {
        console.log('Download resume:', resumeFile);
        // Download resume logic
    };

    if (!jobs || jobs.length === 0) {
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
                    No Applied Jobs Yet
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
                    You haven't applied to any jobs yet. Start exploring opportunities and apply to your dream job!
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
                        flexGrow:1,
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
                    <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
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
                                <Box
                                    component="th"
                                    sx={{
                                        padding: '18px 20px',
                                        textAlign: 'left',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        color: '#64748b',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        whiteSpace: 'nowrap',
                                        background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
                                        width: '20%',
                                        minWidth: '180px',
                                    }}
                                >
                                    Company
                                </Box>
                                <Box
                                    component="th"
                                    sx={{
                                        padding: '18px 20px',
                                        textAlign: 'left',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        color: '#64748b',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        whiteSpace: 'nowrap',
                                        background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
                                        width: '25%',
                                        minWidth: '200px',
                                    }}
                                >
                                    Job Title
                                </Box>
                                <Box
                                    component="th"
                                    sx={{
                                        padding: '18px 20px',
                                        textAlign: 'left',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        color: '#64748b',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        whiteSpace: 'nowrap',
                                        background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
                                        width: '15%',
                                        minWidth: '140px',
                                    }}
                                >
                                    Date
                                </Box>
                                <Box
                                    component="th"
                                    sx={{
                                        padding: '18px 20px',
                                        textAlign: 'left',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        color: '#64748b',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        whiteSpace: 'nowrap',
                                        background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
                                        width: '15%',
                                        minWidth: '120px',
                                    }}
                                >
                                    Status
                                </Box>
                                <Box
                                    component="th"
                                    sx={{
                                        padding: '18px 20px',
                                        textAlign: 'left',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        color: '#64748b',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        whiteSpace: 'nowrap',
                                        background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
                                        width: '18%',
                                        minWidth: '180px',
                                    }}
                                >
                                    Resume
                                </Box>
                                <Box
                                    component="th"
                                    sx={{
                                        padding: '18px 20px',
                                        textAlign: 'center',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        color: '#64748b',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        whiteSpace: 'nowrap',
                                        background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
                                        width: '7%',
                                        minWidth: '80px',
                                    }}
                                >
                                    Action
                                </Box>
                            </Box>
                        </Box>
                        <Box component="tbody">
                            {jobs.map((job, index) => {
                                const statusConfig = getStatusConfig(job.status);
                                const isHovered = hoveredRow === job.id;
                                return (
                                    <Box
                                        component="tr"
                                        key={job.id}
                                        onMouseEnter={() => setHoveredRow(job.id)}
                                        onMouseLeave={() => setHoveredRow(null)}
                                        sx={{
                                            borderBottom: index < jobs.length - 1 ? '1px solid #f1f5f9' : 'none',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            background: isHovered
                                                ? 'linear-gradient(135deg, rgba(234, 89, 12, 0.06) 0%, rgba(249, 115, 22, 0.06) 100%)'
                                                : 'transparent',
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
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                transform: 'scale(1.05)',
                                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                            },
                                                        }}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <Box
                                                        sx={{
                                                            display: 'none',
                                                            width: '100%',
                                                            height: '100%',
                                                            borderRadius: '10px',
                                                            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: '#64748b',
                                                            border: '1px solid #e9ecef',
                                                        }}
                                                    >
                                                        <Building2 size={20} />
                                                    </Box>
                                                </Box>
                                                <Tooltip title={job.companyName} arrow placement="top">
                                                    <Typography
                                                        sx={{
                                                            fontSize: '14px',
                                                            fontWeight: 600,
                                                            color: isHovered ? '#ea590c' : '#1e293b',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap',
                                                            maxWidth: '90%',
                                                            cursor: 'default',
                                                            transition: 'color 0.2s ease',
                                                        }}
                                                    >
                                                        {job.companyName}
                                                    </Typography>
                                                </Tooltip>
                                            </Box>
                                        </Box>

                                        {/* Job Title */}
                                        <Box component="td" sx={{ padding: '16px 20px', verticalAlign: 'middle' }}>
                                            <Tooltip title={job.jobTitle} arrow placement="top">
                                                <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontWeight: 600,
                                                        color: isHovered ? '#ea590c' : '#1e293b',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap',
                                                        maxWidth: '250px',
                                                        cursor: 'default',
                                                        transition: 'color 0.2s ease',
                                                    }}
                                                >
                                                    {job.jobTitle}
                                                </Typography>
                                            </Tooltip>
                                        </Box>

                                        {/* Applied Date */}
                                        <Box component="td" sx={{ padding: '16px 20px', verticalAlign: 'middle' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Calendar size={16} style={{ color: '#94a3b8', flexShrink: 0 }} />
                                                <Typography sx={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>
                                                    {formatDate(job.appliedDate)}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Status */}
                                        <Box component="td" sx={{ padding: '16px 20px', verticalAlign: 'middle' }}>
                                            <Chip
                                                icon={statusConfig.icon}
                                                label={statusConfig.label}
                                                sx={{
                                                    backgroundColor: statusConfig.bgColor,
                                                    color: statusConfig.color,
                                                    fontWeight: 600,
                                                    fontSize: '12px',
                                                    height: '28px',
                                                    borderRadius: '8px',
                                                    '& .MuiChip-icon': {
                                                        color: statusConfig.color,
                                                    },
                                                    animation: 'slideIn 0.4s ease-out',
                                                    '@keyframes slideIn': {
                                                        from: { opacity: 0, transform: 'translateX(-10px)' },
                                                        to: { opacity: 1, transform: 'translateX(0)' },
                                                    },
                                                }}
                                            />
                                        </Box>

                                        {/* Resume */}
                                        <Box component="td" sx={{ padding: '16px 20px', verticalAlign: 'middle' }}>
                                            <Tooltip title={job.resumeFile} arrow placement="top">
                                                <Box
                                                    onClick={() => handleDownloadResume(job.resumeUrl, job.resumeFile)}
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1,
                                                        padding: '8px 16px',
                                                        backgroundColor: '#fff7ed',
                                                        borderRadius: '8px',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        border: '1px solid #fed7aa',
                                                        maxWidth: 'fit-content',
                                                        
                                                    }}
                                                >
                                                    <Typography
                                                        className="resume-text"
                                                        sx={{
                                                            fontSize: '13px',
                                                            color: '#ea590c',
                                                            fontWeight: 600,
                                                            transition: 'color 0.3s ease',
                                                        }}
                                                    >
                                                        Resume
                                                    </Typography>
                                                    <Download
                                                        size={16}
                                                        className="download-icon"
                                                        style={{ color: '#ea590c', flexShrink: 0, transition: 'all 0.3s ease' }}
                                                    />
                                                </Box>
                                            </Tooltip>
                                        </Box>

                                        {/* Action */}
                                        <Box component="td" sx={{ padding: '16px 20px', verticalAlign: 'middle', textAlign: 'center' }}>
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
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Mobile Card View */}
            <Box
                sx={{
                    display: { xs: 'grid', md: 'none' },
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                    gap: 2,
                }}
            >
                {jobs.map((job) => {
                    const statusConfig = getStatusConfig(job.status);
                    return (
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
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1, minWidth: 0 }}>
                                    <Box sx={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
                                        <Box
                                            component="img"
                                            src={job.companyLogo}
                                            alt={job.companyName}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '8px',
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
                                        <Box
                                            sx={{
                                                display: 'none',
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '8px',
                                                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#64748b',
                                                border: '1px solid #e9ecef',
                                            }}
                                        >
                                            <Building2 size={16} />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '12px', sm: '13px' },
                                            fontWeight: 600,
                                            color: '#1e293b',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {job.companyName}
                                    </Typography>
                                </Box>
                                <Chip
                                    icon={statusConfig.icon}
                                    label={statusConfig.label}
                                    size="small"
                                    sx={{
                                        backgroundColor: statusConfig.bgColor,
                                        color: statusConfig.color,
                                        fontWeight: 600,
                                        fontSize: '11px',
                                        height: '24px',
                                        borderRadius: '6px',
                                        '& .MuiChip-icon': {
                                            color: statusConfig.color,
                                        },
                                    }}
                                />
                            </Box>

                            {/* Job Title */}
                            <Typography
                                sx={{
                                    fontSize: { xs: '15px', sm: '16px' },
                                    fontWeight: 700,
                                    color: '#1e293b',
                                    mb: 2,
                                    lineHeight: 1.4,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    lineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {job.jobTitle}
                            </Typography>

                            {/* Card Footer */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pt: 2,
                                    borderTop: '1px solid #f1f5f9',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#64748b' }}>
                                    <Calendar size={14} style={{ flexShrink: 0 }} />
                                    <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
                                        {formatDate(job.appliedDate)}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Tooltip title={job.resumeFile} arrow>
                                        <IconButton
                                            size="small"
                                            onClick={() => handleDownloadResume(job.resumeUrl, job.resumeFile)}
                                            sx={{
                                                background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
                                                color: '#64748b',
                                                border: '1px solid #e9ecef',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #f1f3f5 0%, #e9ecef 100%)',
                                                    color: '#ea590c',
                                                    borderColor: '#ea590c',
                                                },
                                            }}
                                        >
                                            <Download size={16} />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="View Job Details" arrow>
                                        <IconButton
                                            size="small"
                                            onClick={() => handleViewJob(job.jobUrl)}
                                            sx={{
                                                background: 'linear-gradient(135deg, #ea590c 0%, #f97316 100%)',
                                                color: '#ffffff',
                                                border: '1px solid #ea590c',
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
                                                    boxShadow: '0 4px 12px rgba(234, 89, 12, 0.3)',
                                                },
                                            }}
                                        >
                                            <Eye size={16} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default AppliedJobsTable;

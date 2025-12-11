import React, { useState } from 'react';
import { Typography, Box, Tabs, Tab } from '@mui/material';
import { Briefcase, Bookmark } from 'lucide-react';
import AppliedJobsTable from '../components/AppliedJobsTable';
import SavedJobsTable from '../components/SavedJobsTable';

const Applied = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box>
            {/* Page Header */}
            <Box
                sx={{
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #ea590c 0%, #f97316 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 16px rgba(234, 89, 12, 0.25)',
                    }}
                >
                    <Briefcase size={24} color="#ffffff" />
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            color: '#1a1a2e',
                            fontSize: 'clamp(22px, 2.2vw, 28px)',
                            lineHeight: 1.2,
                        }}
                    >
                        My Jobs
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#6c757d',
                            fontWeight: 500,
                            fontSize: '14px',
                            mt: 0.5,
                        }}
                    >
                        Track your applications and saved opportunities
                    </Typography>
                </Box>
            </Box>

            {/* Tabs */}
            <Box
                sx={{
                    borderBottom: '1px solid #e9ecef',
                    mb: 3,
                }}
            >
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#ea590c',
                            height: '3px',
                            borderRadius: '3px 3px 0 0',
                        },
                    }}
                >
                    <Tab
                        icon={<Briefcase size={18} />}
                        iconPosition="start"
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                                    Applied Jobs
                                </Typography>
                                <Box
                                    sx={{
                                        px: 1,
                                        py: 0.25,
                                        borderRadius: '12px',
                                        background: activeTab === 0 ? '#ea590c' : '#e9ecef',
                                        color: activeTab === 0 ? '#ffffff' : '#64748b',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        minWidth: '24px',
                                        textAlign: 'center',
                                    }}
                                >
                                    12
                                </Box>
                            </Box>
                        }
                        sx={{
                            textTransform: 'none',
                            minHeight: '56px',
                            px: 2,
                            color: activeTab === 0 ? '#ea590c' : '#64748b',
                            fontWeight: 600,
                            '&.Mui-selected': {
                                color: '#ea590c',
                            },
                            '& .MuiTab-iconWrapper': {
                                color: activeTab === 0 ? '#ea590c' : '#94a3b8',
                            },
                        }}
                    />
                    <Tab
                        icon={<Bookmark size={18} />}
                        iconPosition="start"
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                                    Saved Jobs
                                </Typography>
                                <Box
                                    sx={{
                                        px: 1,
                                        py: 0.25,
                                        borderRadius: '12px',
                                        background: activeTab === 1 ? '#ea590c' : '#e9ecef',
                                        color: activeTab === 1 ? '#ffffff' : '#64748b',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        minWidth: '24px',
                                        textAlign: 'center',
                                    }}
                                >
                                    3
                                </Box>
                            </Box>
                        }
                        sx={{
                            textTransform: 'none',
                            minHeight: '56px',
                            px: 2,
                            color: activeTab === 1 ? '#ea590c' : '#64748b',
                            fontWeight: 600,
                            '&.Mui-selected': {
                                color: '#ea590c',
                            },
                            '& .MuiTab-iconWrapper': {
                                color: activeTab === 1 ? '#ea590c' : '#94a3b8',
                            },
                        }}
                    />
                </Tabs>
            </Box>

            {/* Tab Content */}
            <Box>
                {activeTab === 0 && (
                    <Box sx={{ animation: 'fadeIn 0.4s ease-out' }}>
                        <AppliedJobsTable />
                    </Box>
                )}
                {activeTab === 1 && (
                    <Box sx={{ animation: 'fadeIn 0.4s ease-out' }}>
                        <SavedJobsTable />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Applied;

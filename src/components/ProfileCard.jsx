import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { Clock, CheckCircle } from 'lucide-react';

const ProfileCard = () => {
    // Profile completion percentage
    const profileCompletion = 75;

    // Function to get color based on completion percentage
    const getProgressColor = (percentage) => {
        if (percentage >= 75) {
            return {
                color: '#10b981', // Green for success
                gradient: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
            };
        } else if (percentage >= 25) {
            return {
                color: '#f59e0b', // Yellow for warning
                gradient: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
            };
        } else {
            return {
                color: '#ef4444', // Red for error
                gradient: 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)',
            };
        }
    };

    const progressColors = getProgressColor(profileCompletion);

    return (
        <Box
            sx={{
                position: 'relative',
                mt: 4, // Space for the overlapping avatar
            }}
        >
            {/* Avatar - Absolutely positioned at top center */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -28,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                }}
            >
                <Avatar
                    sx={{
                        width: 56,
                        height: 56,
                        background: '#fff',
                        fontSize: '24px',
                        fontWeight: 600,
                        color: '#ea590c',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    }}
                >
                    JD
                </Avatar>
            </Box>

            {/* Card Content */}
            <Box
                sx={{
                    border: '1px solid #ea590c',
                    background: '#fdede4ff',
                    borderRadius: '10px',
                    pt: 4.5,
                    pb: 2.5,
                    px: 2.5,
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                        background: '#fff5f0',
                        borderColor: '#ea590c',
                        boxShadow: '0 4px 12px rgba(234, 89, 12, 0.2)',
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at top right, rgba(255,255,255,0.4) 0%, transparent 60%)',
                        pointerEvents: 'none',
                    },
                }}
            >
                {/* User Info */}
                <Box sx={{ position: 'relative', zIndex: 1, pt: 1.5 }}>
                    <Typography
                        sx={{
                            color: '#1D1D1D',
                            fontSize: '16px',
                            fontWeight: 600,
                            mb: 0.5,
                        }}
                    >
                        John Doe
                    </Typography>
                    <Typography
                        sx={{
                            color: '#ea590c',
                            fontSize: '13px',
                            fontWeight: 500,
                            mb: 2,
                        }}
                    >
                        Senior Developer
                    </Typography>

                    {/* Profile Completion Progress */}
                    <Box sx={{ mb: 0 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 1,
                            }}
                        >
                            {profileCompletion === 100 && (
                                    <CheckCircle size={14} color="#10b981" mr={1}/>
                                )}
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    color: '#666666',
                                }}
                            >
                                Profile Completion
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        color: progressColors.color,
                                    }}
                                >
                                    {profileCompletion}%
                                </Typography>
                                
                            </Box>
                        </Box>

                        {/* Progress Bar */}
                        <Box
                            sx={{
                                width: '100%',
                                height: '6px',
                                backgroundColor: '#E8E8E8',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        >
                            <Box
                                sx={{
                                    width: `${profileCompletion}%`,
                                    height: '100%',
                                    background: progressColors.gradient,
                                    borderRadius: '10px',
                                    transition: 'width 0.6s ease-in-out',
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                        animation: 'shimmer 2s infinite',
                                    },
                                    '@keyframes shimmer': {
                                        '0%': {
                                            transform: 'translateX(-100%)',
                                        },
                                        '100%': {
                                            transform: 'translateX(100%)',
                                        },
                                    },
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Last Visited */}
                    <Box 
                        sx={{ 
                            mt: 2.5,
                            pt: 2,
                            borderTop: '1px solid rgba(234, 89, 12, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                        }}
                    >
                        <Clock size={14} color="#64748b" />
                        <Typography
                            sx={{
                                fontSize: '11px',
                                color: '#64748b',
                                fontWeight: 500,
                            }}
                        >
                            Last visited: 2 hrs ago
                        </Typography>
                    </Box>

                    {/* View Profile Button */}
                    {/* <Box
                        sx={{
                            background: '#ff6b35',
                            borderRadius: '8px',
                            py: 1.25,
                            px: 2,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: '#f7931e',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
                            },
                            '&:active': {
                                transform: 'translateY(0)',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: '13px',
                                fontWeight: 600,
                                letterSpacing: '0.3px',
                            }}
                        >
                            View Profile
                        </Typography>
                    </Box> */}
                </Box>
            </Box>
        </Box>
    );
};

export default ProfileCard;

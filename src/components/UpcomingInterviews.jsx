import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

// Dummy interview dates for December 2024
const interviewDates = [
    { date: 10, company: 'Google', position: 'Frontend Developer', time: '10:00 AM' },
    { date: 15, company: 'Meta', position: 'UI/UX Designer', time: '2:00 PM' },
    { date: 22, company: 'Amazon', position: 'Full Stack Developer', time: '11:30 AM' },
    { date: 28, company: 'Microsoft', position: 'Backend Engineer', time: '3:00 PM' },
];

const UpcomingInterviews = () => {
    const [currentDate] = useState(new Date());
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Get days in month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Month names
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    // Day names
    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    // Check if date has interview
    const hasInterview = (day) => {
        return interviewDates.find(interview => interview.date === day);
    };

    // Generate calendar days
    const calendarDays = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(null);
    }

    // Add days of month
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
    }

    return (
        <Box
            sx={{
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e9ecef',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Header */}
            <Box sx={{ mb: 3 }}>
                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#1e293b',
                        mb: 0.5,
                    }}
                >
                    Upcoming Interviews
                </Typography>
                <Typography
                    sx={{
                        fontSize: '13px',
                        color: '#64748b',
                    }}
                >
                    {interviewDates.length} interviews scheduled this month
                </Typography>
            </Box>

            {/* Calendar Header - Month/Year */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2,
                }}
            >
                <IconButton size="small" sx={{ color: '#64748b' }}>
                    <ChevronLeft size={20} />
                </IconButton>

                <Typography
                    sx={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#1e293b',
                    }}
                >
                    {monthNames[currentMonth]} {currentYear}
                </Typography>

                <IconButton size="small" sx={{ color: '#64748b' }}>
                    <ChevronRight size={20} />
                </IconButton>
            </Box>

            {/* Day Names */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    gap: 0.5,
                    mb: 1,
                }}
            >
                {dayNames.map((day) => (
                    <Box
                        key={day}
                        sx={{
                            textAlign: 'center',
                            py: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '11px',
                                fontWeight: 600,
                                color: '#94a3b8',
                            }}
                        >
                            {day}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* Calendar Grid */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    gap: 0.5,
                    flex: 1,
                }}
            >
                {calendarDays.map((day, index) => {
                    const interview = day ? hasInterview(day) : null;
                    const isToday = day === currentDate.getDate();

                    return (
                        <Box
                            key={index}
                            sx={{
                                aspectRatio: '1',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '8px',
                                position: 'relative',
                                cursor: day ? 'pointer' : 'default',
                                background: interview ? '#4f46e5' : isToday ? '#f1f5f9' : 'transparent',
                                color: interview ? '#ffffff' : '#1e293b',
                                fontWeight: interview || isToday ? 600 : 400,
                                fontSize: '14px',
                                transition: 'all 0.2s ease',
                                border: isToday && !interview ? '2px solid #4f46e5' : 'none',
                                '&:hover': day ? {
                                    background: interview ? '#4338ca' : '#f8f9fa',
                                } : {},
                            }}
                        >
                            {day}
                            {interview && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 2,
                                        width: 4,
                                        height: 4,
                                        borderRadius: '50%',
                                        background: '#ffffff',
                                    }}
                                />
                            )}
                        </Box>
                    );
                })}
            </Box>

            {/* Interview List */}
            <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid #f1f5f9' }}>
                <Typography
                    sx={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#64748b',
                        mb: 1.5,
                        textTransform: 'uppercase',
                    }}
                >
                    This Month
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {interviewDates.slice(0, 3).map((interview, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                p: 1.5,
                                borderRadius: '8px',
                                background: '#f8f9fa',
                                border: '1px solid #e9ecef',
                            }}
                        >
                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '8px',
                                    background: '#4f46e5',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>
                                    {interview.date}
                                </Typography>
                                <Typography sx={{ fontSize: '9px', color: '#c7d2fe', textTransform: 'uppercase' }}>
                                    Dec
                                </Typography>
                            </Box>

                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography
                                    sx={{
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        color: '#1e293b',
                                        mb: 0.25,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {interview.company}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '11px',
                                        color: '#64748b',
                                    }}
                                >
                                    {interview.time}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default UpcomingInterviews;

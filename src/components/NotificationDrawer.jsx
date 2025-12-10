import React from 'react';
import {
    Drawer,
    Box,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Chip,
    Divider,
    Button,
} from '@mui/material';
import { X, Briefcase, Calendar, MessageSquare, Award, CheckCircle } from 'lucide-react';

const NotificationDrawer = ({ open, onClose }) => {
    const notifications = [
        {
            id: 1,
            type: 'application',
            title: 'Application Viewed',
            message: 'Google viewed your application for Senior Product Manager',
            time: '5 min ago',
            icon: Briefcase,
            color: '#ea590c',
            unread: true,
        },
        {
            id: 2,
            type: 'interview',
            title: 'Interview Scheduled',
            message: 'Interview with Microsoft scheduled for Dec 10, 2025 at 2:00 PM',
            time: '1 hour ago',
            icon: Calendar,
            color: '#42a5f5',
            unread: true,
        },
        {
            id: 3,
            type: 'message',
            title: 'New Message',
            message: 'Recruiter from Amazon sent you a message',
            time: '2 hours ago',
            icon: MessageSquare,
            color: '#ffa726',
            unread: true,
        },
        {
            id: 4,
            type: 'offer',
            title: 'Job Offer Received',
            message: 'Congratulations! You received an offer from Meta',
            time: '1 day ago',
            icon: Award,
            color: '#66bb6a',
            unread: false,
        },
        {
            id: 5,
            type: 'application',
            title: 'Application Accepted',
            message: 'Your application for Netflix was moved to the next round',
            time: '2 days ago',
            icon: CheckCircle,
            color: '#11998e',
            unread: false,
        },
    ];

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    width: { xs: '100%', sm: 400 },
                    background: '#f8f9fa',
                    borderTopLeftRadius:{xs:'0px',sm:'20px',md:'24px'},
                    borderBottomLeftRadius:{xs:'0px',sm:'20px',md:'24px'},
                },
            }}
        >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <Box
                    sx={{
                        p: 3,
                        background: '#ffffff',
                        borderBottom: '1px solid #e9ecef',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a2e', mb: 0.5 }}>
                            Notifications
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#6c757d', fontWeight: 500 }}>
                            You have {notifications.filter((n) => n.unread).length} unread notifications
                        </Typography>
                    </Box>
                    <IconButton
                        onClick={onClose}
                        sx={{
                            color: '#6c757d',
                            '&:hover': {
                                background: 'rgba(102, 126, 234, 0.1)',
                                color: '#ea590c',
                            },
                        }}
                    >
                        <X size={20} />
                    </IconButton>
                </Box>

                {/* Mark all as read button */}
                <Box sx={{ p: 2, background: '#ffffff', borderBottom: '1px solid #e9ecef' }}>
                    <Button
                        fullWidth
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            color: '#ea590c',
                            border: '1px solid #ea590c',
                            borderRadius: '10px',
                            py: 1,
                            '&:hover': {
                                background: 'rgba(234, 89, 12, 0.08)',
                                border: '1px solid #ea590c',
                            },
                        }}
                    >
                        Mark all as read
                    </Button>
                </Box>

                {/* Notifications List */}
                <Box sx={{ flex: 1, overflowY: 'auto' }}>
                    <List sx={{ p: 0 }}>
                        {notifications.map((notification, index) => (
                            <React.Fragment key={notification.id}>
                                <ListItem
                                    sx={{
                                        py: 2.5,
                                        px: 3,
                                        background: notification.unread ? '#ffffff' : 'transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            background: '#ffffff',
                                            transform: 'translateX(-4px)',
                                        },
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{
                                                background: `${notification.color}15`,
                                                border: `2px solid ${notification.color}30`,
                                                width: 48,
                                                height: 48,
                                            }}
                                        >
                                            <notification.icon size={22} color={notification.color} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1a2e' }}>
                                                    {notification.title}
                                                </Typography>
                                                {notification.unread && (
                                                    <Box
                                                        sx={{
                                                            width: 8,
                                                            height: 8,
                                                            borderRadius: '50%',
                                                            background: notification.color,
                                                        }}
                                                    />
                                                )}
                                            </Box>
                                        }
                                        secondary={
                                            <Box>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: '#6c757d', mb: 0.75, lineHeight: 1.5 }}
                                                >
                                                    {notification.message}
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: '#adb5bd', fontWeight: 500 }}>
                                                    {notification.time}
                                                </Typography>
                                            </Box>
                                        }
                                    />
                                </ListItem>
                                {index < notifications.length - 1 && <Divider sx={{ borderColor: '#e9ecef' }} />}
                            </React.Fragment>
                        ))}
                    </List>
                </Box>

                {/* Footer */}
                <Box
                    sx={{
                        p: 2.5,
                        background: '#ffffff',
                        borderTop: '1px solid #e9ecef',
                    }}
                >
                    <Button
                        fullWidth
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            background: 'linear-gradient(135deg, #ea590c 0%, #f97316 100%)',
                            color: 'white',
                            borderRadius: '10px',
                            py: 1.25,
                            '&:hover': {
                                background: 'linear-gradient(135deg, #ea590c 0%, #f97316 100%)',
                                opacity: 0.9,
                            },
                        }}
                    >
                        View All Notifications
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default NotificationDrawer;

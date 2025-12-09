import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    Tooltip,
} from '@mui/material';
import {
    Home,
    Search,
    FileText,
    Bookmark,
    Calendar,
    MessageSquare,
    User,
    Settings,
    HelpCircle,
    LogOut,
    ChevronLeft,
    ChevronRight,
    File,
    Users,
    Star,
    Send,
    Building,
} from 'lucide-react';
import logo from '../assets/logo.png';
const menuItems = [
    { text: 'Dashboard', icon: Home },
    { text: 'Job Search', icon: Search },
    { text: 'Resumes', icon: FileText },
    { text: 'Files', icon: File },
    { text: 'Network', icon: Users },
    { text: 'Shortlisted', icon: Star },
    { text: 'Saved', icon: Bookmark },
    { text: 'Applied', icon: Send },
    { text: 'Companies', icon: Building },
    { text: 'Profile', icon: User },
    { text: 'Settings', icon: Settings },
];

const Sidebar = ({ selectedMenu, setSelectedMenu, isExpanded, toggleSidebar }) => {
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Sidebar Header */}
            <Box
                sx={{
                    p: '12px 24px',
                    borderBottom: '1px solid #e9ecef',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                    {isExpanded && (
                        <Box component={'img'} src={logo} sx={{ width: '100%', height: '100%', maxWidth: '120px', maxHeight: '100px' }} />
                    )}
                <IconButton
                    onClick={toggleSidebar}
                    sx={{
                        color: '#6c757d',
                        '&:hover': {
                            background: 'rgba(102, 126, 234, 0.1)',
                            color: '#667eea',
                        },
                    }}
                >
                    {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </IconButton>
            </Box>

            {/* User Profile Section */}
            {isExpanded && (
                <Box sx={{ p: 2.5, borderBottom: '1px solid #e9ecef' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            borderRadius: '14px',
                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                            border: '1px solid rgba(102, 126, 234, 0.1)',
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 52,
                                height: 52,
                                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                                boxShadow: '0 4px 12px rgba(17, 153, 142, 0.3)',
                            }}
                        >
                            <User size={26} />
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1a2e', mb: 0.25 }}>
                                John Doe
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#6c757d', fontWeight: 500 }}>
                                Software Engineer
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            )}

            {/* Collapsed User Avatar */}
            {!isExpanded && (
                <Box sx={{ p: 2, borderBottom: '1px solid #e9ecef', display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="John Doe - Software Engineer" placement="right">
                        <Avatar
                            sx={{
                                width: 44,
                                height: 44,
                                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                                boxShadow: '0 4px 12px rgba(17, 153, 142, 0.3)',
                                cursor: 'pointer',
                            }}
                        >
                            <User size={22} />
                        </Avatar>
                    </Tooltip>
                </Box>
            )}

            {/* Navigation Menu */}
            <List sx={{ flex: 1, px: 2, py: 2.5 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ mb: 0.75 }}>
                        <Tooltip title={!isExpanded ? item.text : ''} placement="right">
                            <ListItemButton
                                selected={selectedMenu === item.text}
                                onClick={() => setSelectedMenu(item.text)}
                                sx={{
                                    borderRadius: '12px',
                                    py: 1.25,
                                    px: 2,
                                    justifyContent: isExpanded ? 'flex-start' : 'center',
                                    '&.Mui-selected': {
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        color: 'white',
                                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        },
                                        '& .MuiListItemIcon-root': {
                                            color: 'white',
                                        },
                                    },
                                    '&:hover': {
                                        background: 'rgba(102, 126, 234, 0.08)',
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: isExpanded ? 40 : 'auto',
                                        color: selectedMenu === item.text ? 'white' : '#6c757d',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <item.icon size={22} />
                                </ListItemIcon>
                                {isExpanded && (
                                    <ListItemText
                                        primary={item.text}
                                        primaryTypographyProps={{
                                            fontSize: '15px',
                                            fontWeight: selectedMenu === item.text ? 600 : 500,
                                        }}
                                    />
                                )}
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            {/* Logout Button */}
            <Box sx={{ p: 2.5, borderTop: '1px solid #e9ecef' }}>
                <Tooltip title={!isExpanded ? 'Logout' : ''} placement="right">
                    <ListItemButton
                        sx={{
                            borderRadius: '12px',
                            color: '#ef5350',
                            py: 1.25,
                            px: 2,
                            justifyContent: isExpanded ? 'flex-start' : 'center',
                            '&:hover': {
                                background: 'rgba(239, 83, 80, 0.08)',
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: isExpanded ? 40 : 'auto',
                                color: '#ef5350',
                                justifyContent: 'center',
                            }}
                        >
                            <LogOut size={22} />
                        </ListItemIcon>
                        {isExpanded && (
                            <ListItemText
                                primary="Logout"
                                primaryTypographyProps={{
                                    fontSize: '15px',
                                    fontWeight: 500,
                                }}
                            />
                        )}
                    </ListItemButton>
                </Tooltip>
            </Box>
        </Box>
    );
};

export default Sidebar;

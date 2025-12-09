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
    FolderOpen,
} from 'lucide-react';
import logo from '../assets/logo.png';
const menuItems = [
    { text: 'Dashboard', icon: Home },
    { text: 'Job Search', icon: Search },
    { text: 'Resumes', icon: FileText },
    { text: 'File Manager', icon: FolderOpen },
    { text: 'Network', icon: Users },
    { text: 'Shortlisted', icon: Star },
    { text: 'Saved', icon: Bookmark },
    { text: 'Applied', icon: Send },
    { text: 'Companies', icon: Building },
];

const Sidebar = ({ selectedMenu, setSelectedMenu, isExpanded }) => {
    return (
        <Box 
            sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: '#888',
                    borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                },
            }}
        >
            {/* Sidebar Header */}
            <Box
                sx={{
                    py: '8px',
                    px: '20px',
                    borderBottom: '1px solid #e9ecef',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                }}
            >
                <Box component={'img'} src={logo} sx={{ width: '100%', height: '100%', maxWidth: '160px', maxHeight: '100px', objectFit: 'contain',mb: '10px' }} />
            </Box>

            {/* User Profile Section */}
            {/* <Box sx={{ p: 2.5, borderBottom: '1px solid #e9ecef' }}>
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
            </Box> */}



            {/* Navigation Menu */}
            <List sx={{ flex: 1, px: 2, py: 2 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ mb: 0.75 }}>
                        <Tooltip title="" placement="right">
                            <ListItemButton
                                selected={selectedMenu === item.text}
                                onClick={() => setSelectedMenu(item.text)}
                                sx={{
                                    borderRadius: '12px',
                                    py: 1.25,
                                    px: 2,
                                    position: 'relative',
                                    borderLeft: '3px solid transparent',
                                    transition: 'all 0.2s ease',
                                    '&.Mui-selected': {
                                        background: 'rgba(234, 89, 12, 0.08)',
                                        color: '#ea590c',
                                        borderLeft: '3px solid #ea590c',
                                        '&:hover': {
                                            background: 'rgba(234, 89, 12, 0.12)',
                                        },
                                        '& .MuiListItemIcon-root': {
                                            color: '#ea590c',
                                        },
                                    },
                                    '&:hover': {
                                        background: 'rgba(234, 89, 12, 0.08)',
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 40,
                                        color: selectedMenu === item.text ? '#ea590c' : '#6c757d',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <item.icon size={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        fontSize: '15px',
                                        fontWeight: selectedMenu === item.text ? 600 : 500,
                                    }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            {/* Logout Button */}
            <Box sx={{ p: 2.5, borderTop: '1px solid #e9ecef' }}>
                <Tooltip title="" placement="right">
                    <ListItemButton
                        sx={{
                            borderRadius: '12px',
                            color: '#ef5350',
                            py: 1.25,
                            px: 2,
                            '&:hover': {
                                background: 'rgba(239, 83, 80, 0.08)',
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 40,
                                color: '#ef5350',
                                justifyContent: 'center',
                            }}
                        >
                            <LogOut size={22} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Logout"
                            primaryTypographyProps={{
                                fontSize: '15px',
                                fontWeight: 500,
                            }}
                        />
                    </ListItemButton>
                </Tooltip>
            </Box>
        </Box>
    );
};

export default Sidebar;

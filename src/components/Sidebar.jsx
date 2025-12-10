import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@mui/material';
import {
    Home,
    Search,
    FileText,
    Bookmark,
    Users,
    Star,
    Send,
    Building,
    FolderOpen,
} from 'lucide-react';
import logo from '../assets/logo.png';
import ProfileCard from './ProfileCard';


const menuItems = [
    { text: 'Dashboard', icon: Home, path: '/dashboard' },
    { text: 'Job Search', icon: Search, path: '/job-search' },
    { text: 'Resumes', icon: FileText, path: '/resumes' },
    { text: 'File Manager', icon: FolderOpen, path: '/file-manager' },
    { text: 'Network', icon: Users, path: '/network' },
    { text: 'Shortlisted', icon: Star, path: '/shortlisted' },
    { text: 'Saved', icon: Bookmark, path: '/saved' },
    { text: 'Applied', icon: Send, path: '/applied' },
    { text: 'Companies', icon: Building, path: '/companies' },
];

const Sidebar = ({ selectedMenu, setSelectedMenu, isExpanded }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuClick = (item) => {
        setSelectedMenu(item.text);
        navigate(item.path);
    };

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
                <Box component={'img'} src={logo} sx={{ width: '100%', height: '100%', maxWidth: '160px', maxHeight: '100px', objectFit: 'contain', mb: '10px' }} />
            </Box>

            {/* Navigation Menu */}
            <List sx={{ flex: 1, px: 1, py: 1.5 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ mb: 0.75 }}>
                        <Tooltip title="" placement="right">
                            <ListItemButton
                                selected={location.pathname === item.path}
                                onClick={() => handleMenuClick(item)}
                                sx={{
                                    borderRadius: '8px',
                                    py: 1.5,
                                    px: 1,
                                    position: 'relative',
                                    transition: 'all 0.2s ease',
                                    '&.Mui-selected': {
                                        background: 'transparent',
                                        color: '#1e293b',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            right: 0,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: '3px',
                                            height: '70%',
                                            background: '#ea590c',
                                            borderRadius: '4px 0 0 4px',
                                        },
                                        '&:hover': {
                                            background: '#f8f9fa',
                                        },
                                        '& .MuiListItemIcon-root': {
                                            color: '#ea590c',
                                        },
                                        '& .MuiListItemText-primary': {
                                            fontWeight: 600,
                                            color: '#ea590c',
                                        },
                                    },
                                    '&:hover': {
                                        background: '#f8f9fa',
                                    },
                                    '& .MuiListItemIcon-root': {
                                        color: '#94a3b8',
                                        minWidth: 40,
                                    },
                                    '& .MuiListItemText-primary': {
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: '#64748b',
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <item.icon size={20} />
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            {/* Profile Card */}
            <Box sx={{ p: 2.5, borderTop: '1px solid #e9ecef' }}>
                <ProfileCard />
            </Box>
        </Box>
    );
};

export default Sidebar;

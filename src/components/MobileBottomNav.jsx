import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Search, FileText, Calendar, User } from 'lucide-react';

const MobileBottomNav = ({ selectedMenu, setSelectedMenu }) => {
    const bottomNavItems = [
        { text: 'Dashboard', icon: Home },
        { text: 'Job Search', icon: Search },
        { text: 'Applications', icon: FileText },
        { text: 'Interviews', icon: Calendar },
        { text: 'Profile', icon: User },
    ];

    const handleChange = (event, newValue) => {
        setSelectedMenu(newValue);
    };

    return (
        <Paper
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: { xs: 'block', md: 'none' },
                boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.08)',
                borderTop: '1px solid #e9ecef',
            }}
            elevation={3}
        >
            <BottomNavigation
                value={selectedMenu}
                onChange={handleChange}
                sx={{
                    height: 64,
                    background: '#ffffff',
                    '& .MuiBottomNavigationAction-root': {
                        minWidth: 'auto',
                        padding: '6px 12px',
                        color: '#6c757d',
                        '&.Mui-selected': {
                            color: '#667eea',
                            '& .MuiBottomNavigationAction-label': {
                                fontSize: '12px',
                                fontWeight: 600,
                            },
                        },
                        '& .MuiBottomNavigationAction-label': {
                            fontSize: '11px',
                            fontWeight: 500,
                            marginTop: '4px',
                        },
                    },
                }}
            >
                {bottomNavItems.map((item) => (
                    <BottomNavigationAction
                        key={item.text}
                        label={item.text}
                        value={item.text}
                        icon={
                            <item.icon
                                size={22}
                                style={{
                                    color: selectedMenu === item.text ? '#667eea' : '#6c757d',
                                }}
                            />
                        }
                    />
                ))}
            </BottomNavigation>
        </Paper>
    );
};

export default MobileBottomNav;

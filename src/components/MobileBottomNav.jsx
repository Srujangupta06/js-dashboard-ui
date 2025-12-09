import { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton, Divider, Avatar, useTheme, useMediaQuery } from '@mui/material';
import {
    Home,
    HomeOutlined,
    Search,
    SearchOutlined,
    Send,
    SendOutlined,
    MoreHoriz,
    Close,
    Description,
    Settings as SettingsIcon,
    HelpOutline,
    Message,
} from '@mui/icons-material';
import { Bookmark, Star, Users, Building, FolderOpen, Settings, HelpCircle, MessageSquare } from 'lucide-react';

const MobileBottomNav = ({ selectedMenu, setSelectedMenu }) => {
    const [moreDrawerOpen, setMoreDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Core 5 navigation items - most frequently used
    const bottomNavItems = [
        { text: 'Dashboard', iconOutlined: HomeOutlined, iconFilled: Home },
        { text: 'Jobs', iconOutlined: SearchOutlined, iconFilled: Search },
        { text: 'Saved', icon: Bookmark, isLucide: true },
        { text: 'Applied', iconOutlined: SendOutlined, iconFilled: Send },
        { text: 'More', isMore: true },
    ];

    // All additional menu items in "More" section
    const moreMenuSections = [
        {
            title: 'Job Management',
            items: [
                { text: 'Resumes', icon: Description, color: '#ea590c' },
                { text: 'Shortlisted', icon: Star, color: '#FF9800' },
            ],
        },
        {
            title: 'Professional',
            items: [
                { text: 'Network', icon: Users, color: '#2196F3' },
                { text: 'Companies', icon: Building, color: '#9C27B0' },
            ],
        },
        {
            title: 'Resources',
            items: [
                { text: 'File Manager', icon: FolderOpen, color: '#607D8B' },
                { text: 'Settings', icon: Settings, color: '#6c757d' },
                { text: 'Help & Support', icon: HelpCircle, color: '#6c757d' },
            ],
        },
    ];

    const handleChange = (event, newValue) => {
        if (newValue === 'More') {
            setMoreDrawerOpen(true);
        } else {
            setSelectedMenu(newValue);
            setMoreDrawerOpen(false);
        }
    };

    const handleMoreMenuItemClick = (menuItem) => {
        setSelectedMenu(menuItem);
        setMoreDrawerOpen(false);
    };

    // Close drawer when switching to desktop
    useEffect(() => {
        if (!isMobile) {
            setMoreDrawerOpen(false);
        }
    }, [isMobile]);

    return (
        <>
            {/* More Menu - Instagram-Style Bottom Drawer */}
            <Drawer
                anchor="bottom"
                open={moreDrawerOpen}
                onClose={() => setMoreDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        maxHeight: '85vh',
                        background: '#ffffff',
                    },
                }}
            >
                <Box>
                    {/* Drag Handle */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            pt: 1.5,
                            pb: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: 40,
                                height: 4,
                                borderRadius: '2px',
                                background: '#dee2e6',
                            }}
                        />
                    </Box>

                    {/* Header */}
                    <Box
                        sx={{
                            px: 3,
                            py: 2,
                            borderBottom: '1px solid #f1f3f5',
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '18px', color: '#1a1a2e', textAlign: 'center' }}>
                            More
                        </Typography>
                    </Box>

                    {/* Menu Items - Simple List */}
                    <Box sx={{ pb: 12 }}>
                        {moreMenuSections.map((section, sectionIndex) => (
                            <Box key={section.title}>
                                {/* Section Items */}
                                <List sx={{ py: 0 }}>
                                    {section.items.map((item) => {
                                        const Icon = item.icon;
                                        const isSelected = selectedMenu === item.text;

                                        return (
                                            <ListItem
                                                key={item.text}
                                                button
                                                onClick={() => handleMoreMenuItemClick(item.text)}
                                                sx={{
                                                    py: 2,
                                                    px: 3,
                                                    borderBottom: '1px solid #f8f9fa',
                                                    '&:hover': {
                                                        background: '#f8f9fa',
                                                    },
                                                }}
                                            >
                                                <ListItemIcon sx={{ minWidth: 44 }}>
                                                    <Box
                                                        sx={{
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: '50%',
                                                            background: isSelected
                                                                ? '#ea590c'
                                                                : '#f8f9fa',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <Icon
                                                            sx={{
                                                                fontSize: 18,
                                                                color: isSelected ? '#ffffff' : '#6c757d',
                                                            }}
                                                        />
                                                    </Box>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item.text}
                                                    primaryTypographyProps={{
                                                        fontSize: '15px',
                                                        fontWeight: isSelected ? 600 : 400,
                                                        color: isSelected ? '#1a1a2e' : '#495057',
                                                    }}
                                                />
                                            </ListItem>
                                        );
                                    })}
                                </List>

                                {/* Section Divider */}
                                {sectionIndex < moreMenuSections.length - 1 && (
                                    <Box sx={{ height: 8, background: '#f8f9fa' }} />
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Drawer>

            {/* Bottom Navigation - 5 Core Items */}
            <Paper
                sx={{
                    position: 'fixed',
                    py: 1,
                    px: 1.5,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    display: { xs: 'block', md: 'none' },
                    boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
                    borderTop: '1px solid #e9ecef',
                    borderTopRightRadius: "24px",
                    borderTopLeftRadius: "24px",
                    background: '#ffffff',
                }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={selectedMenu}
                    onChange={handleChange}
                    sx={{
                        height: 68,
                        background: 'transparent',
                        '& .MuiBottomNavigationAction-root': {
                            minWidth: 56,
                            maxWidth: 80,
                            padding: '8px 8px',
                            borderRadius: '12px',
                            color: '#6c757d',
                            transition: 'all 0.2s ease',

                            '& .MuiSvgIcon-root': {
                                fontSize: 24,
                                color: '#6c757d',
                                transition: 'all 0.2s ease',
                            },

                            '&.Mui-selected': {
                                color: '#ea590c',

                                '& .MuiSvgIcon-root': {
                                    color: '#ea590c',
                                },

                                '& .MuiBottomNavigationAction-label': {
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    color: '#ea590c',
                                },
                            },

                            '&:hover': {
                                background: 'rgba(234, 89, 12, 0.05)',
                            },

                            '& .MuiBottomNavigationAction-label': {
                                fontSize: '10px',
                                fontWeight: 500,
                                marginTop: '6px',
                                transition: 'all 0.2s ease',
                            },
                        },
                    }}
                >
                    {bottomNavItems.map((item) => {
                        // Handle More button
                        if (item.isMore) {
                            return (
                                <BottomNavigationAction
                                    key={item.text}
                                    label={item.text}
                                    value={item.text}
                                    icon={
                                        <MoreHoriz 
                                            sx={{ 
                                                fontSize: 24,
                                                color: moreDrawerOpen ? '#ea590c' : '#6c757d',
                                                transition: 'all 0.2s ease',
                                            }}
                                        />
                                    }
                                    sx={{
                                        '& .MuiBottomNavigationAction-label': {
                                            color: moreDrawerOpen ? '#ea590c' : '#6c757d',
                                            fontWeight: moreDrawerOpen ? 600 : 500,
                                        },
                                    }}
                                />
                            );
                        }

                        // Handle Lucide icons (like Bookmark)
                        if (item.isLucide) {
                            const isSelected = selectedMenu === item.text;
                            const LucideIcon = item.icon;
                            
                            return (
                                <BottomNavigationAction
                                    key={item.text}
                                    label={item.text}
                                    value={item.text}
                                    icon={
                                        <LucideIcon 
                                            size={24}
                                            style={{ 
                                                color: isSelected ? '#ea590c' : '#6c757d',
                                                fill: isSelected ? '#ea590c' : 'none',
                                                transition: 'all 0.2s ease',
                                            }}
                                        />
                                    }
                                />
                            );
                        }

                        // Regular Material-UI navigation items
                        const isSelected = selectedMenu === item.text;
                        const IconComponent = isSelected ? item.iconFilled : item.iconOutlined;

                        return (
                            <BottomNavigationAction
                                key={item.text}
                                label={item.text}
                                value={item.text}
                                icon={<IconComponent />}
                            />
                        );
                    })}
                </BottomNavigation>
            </Paper>
        </>
    );
};

export default MobileBottomNav;

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {
    Box,
    IconButton,
    Badge,
    Drawer,
    useMediaQuery,
    useTheme,
    AppBar,
    Toolbar,
    Menu,
    MenuItem,
    Avatar,
    InputBase,
} from '@mui/material';

import {
    Bell,
    Search,
    Settings,
    HelpCircle,
    X,
    User
} from 'lucide-react';

// Components
import Sidebar from '../components/Sidebar';
import MobileBottomNav from '../components/MobileBottomNav';
import NotificationDrawer from '../components/NotificationDrawer';
import SearchOverlay from '../components/SearchOverlay';

import logo from '../assets/logo.png';

const DRAWER_WIDTH = 260;

const DashboardLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [notifications] = useState(3);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('Dashboard');

    const [moreMenuAnchor, setMoreMenuAnchor] = useState(null);
    const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);

    const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [desktopSearchExpanded, setDesktopSearchExpanded] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleMoreMenuOpen = (e) => setMoreMenuAnchor(e.currentTarget);
    const handleMoreMenuClose = () => setMoreMenuAnchor(null);

    const handleMoreMenuItemClick = (menuItem) => {
        setSelectedMenu(menuItem);
        handleMoreMenuClose();
    };

    const handleProfileMenuOpen = (e) => setProfileMenuAnchor(e.currentTarget);
    const handleProfileMenuClose = () => setProfileMenuAnchor(null);

    const handleProfileMenuItemClick = (menuItem) => {
        setSelectedMenu(menuItem);
        handleProfileMenuClose();
    };

    const handleNotificationOpen = () => setNotificationDrawerOpen(true);
    const handleNotificationClose = () => setNotificationDrawerOpen(false);

    // Close menus when switching between mobile and desktop
    useEffect(() => {
        setProfileMenuAnchor(null);
        setMoreMenuAnchor(null);
    }, [isMobile]);

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            {/* MOBILE APPBAR */}
            {isMobile && (
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: '#ffffff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        borderBottom: '1px solid #e9ecef',
                    }}
                >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            sx={{ maxWidth: '120px', maxHeight: '100px' }}
                        />

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                sx={{
                                    color: '#6c757d',
                                    '&:hover': {
                                        background: 'rgba(234,89,12,0.1)',
                                        color: '#ea590c',
                                    },
                                }}
                                onClick={() => setSearchOpen(true)}
                            >
                                <Search size={20} />
                            </IconButton>

                            <IconButton
                                sx={{
                                    color: '#6c757d',
                                    '&:hover': {
                                        background: 'rgba(234,89,12,0.1)',
                                        color: '#ea590c',
                                    },
                                }}
                                onClick={handleNotificationOpen}
                            >
                                <Badge badgeContent={notifications} color="error">
                                    <Bell size={20} />
                                </Badge>
                            </IconButton>

                            <IconButton onClick={handleMoreMenuOpen}>
                                <Avatar
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        background:
                                            'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                                    }}
                                >
                                    JD
                                </Avatar>
                            </IconButton>

                            <Menu
                                anchorEl={moreMenuAnchor}
                                open={Boolean(moreMenuAnchor)}
                                onClose={handleMoreMenuClose}
                            >
                                <MenuItem
                                    onClick={() => handleMoreMenuItemClick('Profile')}
                                >
                                    <User size={18} style={{ marginRight: 12 }} />
                                    Profile
                                </MenuItem>

                                <MenuItem
                                    onClick={() => handleMoreMenuItemClick('Settings')}
                                >
                                    <Settings size={18} style={{ marginRight: 12 }} />
                                    Settings
                                </MenuItem>

                                <MenuItem onClick={() => handleMoreMenuItemClick('Help')}>
                                    <HelpCircle size={18} style={{ marginRight: 12 }} />
                                    Help
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            )}

            {/* SIDEBAR */}
            <Box
                component="nav"
                sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
            >
                {/* MOBILE DRAWER */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            width: DRAWER_WIDTH,
                            borderRight: '1px solid #e9ecef',
                        },
                    }}
                >
                    <Sidebar
                        selectedMenu={selectedMenu}
                        setSelectedMenu={setSelectedMenu}
                        isExpanded
                    />
                </Drawer>

                {/* DESKTOP DRAWER */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': {
                            width: DRAWER_WIDTH,
                            borderRight: '1px solid #e9ecef',
                        },
                    }}
                    open
                >
                    <Sidebar
                        selectedMenu={selectedMenu}
                        setSelectedMenu={setSelectedMenu}
                        isExpanded
                    />
                </Drawer>
            </Box>

            {/* MAIN CONTENT */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { xs: '100%', md: `calc(100% - ${DRAWER_WIDTH}px)` },
                    background: '#fafcffff',
                    overflow: 'hidden',
                }}
            >
                {/* DESKTOP TOP BAR */}
                {!isMobile && (
                    <Box
                        sx={{
                            background: '#ffffff',
                            borderBottom: '1px solid #e9ecef',
                            position: 'sticky',
                            top: 0,
                            zIndex: 1100,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                px: 4,
                                py: 1,
                            }}
                        >
                            {/* SEARCH */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    background: desktopSearchExpanded ? '#f8f9fa' : 'transparent',
                                    borderRadius: '24px',
                                    width: desktopSearchExpanded ? '300px' : '44px',
                                    height: '44px',
                                    border: desktopSearchExpanded
                                        ? '1px solid #e9ecef'
                                        : 'none',
                                    transition: '0.3s',
                                    overflow: 'hidden',
                                }}
                            >
                                <IconButton
                                    onClick={() =>
                                        setDesktopSearchExpanded(!desktopSearchExpanded)
                                    }
                                >
                                    <Search size={20} />
                                </IconButton>

                                {desktopSearchExpanded && (
                                    <>
                                        <InputBase
                                            placeholder="Search..."
                                            sx={{ ml: 1, flex: 1 }}
                                            autoFocus
                                        />
                                        <IconButton
                                            onClick={() => setDesktopSearchExpanded(false)}
                                        >
                                            <X size={16} />
                                        </IconButton>
                                    </>
                                )}
                            </Box>

                            {/* NOTIFICATIONS */}
                            <IconButton onClick={handleNotificationOpen}>
                                <Badge badgeContent={notifications} color="error">
                                    <Bell size={20} />
                                </Badge>
                            </IconButton>

                            {/* PROFILE */}
                            <IconButton onClick={handleProfileMenuOpen}>
                                <Avatar
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        background:
                                            'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                                    }}
                                >
                                    JD
                                </Avatar>
                            </IconButton>

                            {/* PROFILE MENU */}
                            <Menu
                                anchorEl={profileMenuAnchor}
                                open={Boolean(profileMenuAnchor)}
                                onClose={handleProfileMenuClose}
                            >
                                <MenuItem onClick={() => handleProfileMenuItemClick('Profile')}>
                                    <User size={18} style={{ marginRight: 12 }} />
                                    Profile
                                </MenuItem>

                                <MenuItem
                                    onClick={() => handleProfileMenuItemClick('Settings')}
                                >
                                    <Settings size={18} style={{ marginRight: 12 }} />
                                    Settings
                                </MenuItem>

                                <MenuItem onClick={() => handleProfileMenuItemClick('Help')}>
                                    <HelpCircle size={18} style={{ marginRight: 12 }} />
                                    Help
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                )}

                {/* PAGE CONTENT - This is where routed pages will render */}
                <Box
                    sx={{
                        p: { xs: 1.5, md: 2, lg: 3 },
                        mt: { xs: 8, md: 0 },
                        pb: { xs: 10, md: 4 },
                    }}
                >
                    <Outlet />
                </Box>
            </Box>

            {/* MOBILE BOTTOM NAV */}
            <MobileBottomNav
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
            />

            {/* NOTIFICATION DRAWER */}
            <NotificationDrawer
                open={notificationDrawerOpen}
                onClose={handleNotificationClose}
            />

            {/* SEARCH OVERLAY */}
            <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
        </Box>
    );
};

export default DashboardLayout;

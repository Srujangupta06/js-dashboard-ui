import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
    Typography,
    Breadcrumbs,
    Link,
} from '@mui/material';

import {
    Bell,
    Search,
    Settings,
    HelpCircle,
    X,
    User,
    ChevronRight,
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
    const location = useLocation();

    const [notifications] = useState(3);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('Dashboard');

    const [moreMenuAnchor, setMoreMenuAnchor] = useState(null);
    const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);

    const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [desktopSearchExpanded, setDesktopSearchExpanded] = useState(false);

    // Get current page name from route
    const getCurrentPageName = () => {
        const path = location.pathname.split('/').filter(Boolean);
        if (path.length === 0) return 'Dashboard';
        const pageName = path[path.length - 1];
        return pageName.charAt(0).toUpperCase() + pageName.slice(1);
    };

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
                        py:0.5,
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

                        <Box sx={{ display: 'flex', alignItems: 'center',gap:1 }}>
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
                                        p:0.4,
                                        width: 32,
                                        height: 32,
                                        background:
                                            'linear-gradient(135deg, #ea590c 0%, #ea590c 100%)',
                                    }}
                                >
                                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>JD</span>
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
                    background: '#f3f8ffff',
                    overflow: 'hidden',
                }}
            >
                {/* DESKTOP TOP BAR */}
                {!isMobile && (
                    <Box
                        sx={{
                            background: 'transparent',
                            position: 'sticky',
                            top: 0,
                            zIndex: 1100,
                            pt: 2
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                px: 4,
                                py: 1,
                            }}
                        >
                            {/* BREADCRUMBS - LEFT SIDE */}
                            <Box>
                                <Breadcrumbs
                                    separator={'/'}
                                    sx={{
                                        '& .MuiBreadcrumbs-separator': {
                                            mx: 0.5,
                                        },
                                    }}
                                >
                                    <Link
                                        underline="none"
                                        sx={{
                                            fontSize: '14px',
                                            color: '#94a3b8',
                                            fontWeight: 400,
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: '#ea590c',
                                            },
                                        }}
                                    >
                                        Pages
                                    </Link>
                                    <Typography
                                        sx={{
                                            fontSize: '20px',
                                            color: '#1e293b',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {getCurrentPageName()}
                                    </Typography>
                                </Breadcrumbs>
                            </Box>

                            {/* SEARCH BAR & ACTIONS - RIGHT SIDE */}
                            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#ffffffff', minWidth: '400px', borderRadius: '50px', p: 0.5, border: '1px solid #e9ecef', justifyContent: 'space-between', position: 'relative',boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                                {/* SEARCH BAR */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flex: 1,
                                        px: 1,
                                    }}
                                >
                                    <Search size={20} color="#94a3b8" style={{ marginLeft: '8px' }} />
                                    <InputBase
                                        placeholder="Search jobs, companies..."
                                        sx={{
                                            ml: 1.5,
                                            flex: 1,
                                            fontSize: '14px',
                                            color: '#1e293b',
                                            '& ::placeholder': {
                                                color: '#94a3b8',
                                                opacity: 1,
                                            },
                                        }}
                                        onFocus={() => setDesktopSearchExpanded(true)}
                                        onBlur={() => setTimeout(() => setDesktopSearchExpanded(false), 200)}
                                    />
                                </Box>

                                {/* SEARCH HISTORY OVERLAY */}
                                {desktopSearchExpanded && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            right: 0,
                                            mt: 1,
                                            bgcolor: '#ffffff',
                                            borderRadius: '12px',
                                            border: '1px solid #e9ecef',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                            zIndex: 1200,
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Box sx={{ p: 2 }}>
                                            <Typography
                                                sx={{
                                                    fontSize: '12px',
                                                    fontWeight: 600,
                                                    color: '#64748b',
                                                    textTransform: 'uppercase',
                                                    mb: 1.5,
                                                }}
                                            >
                                                Recent Searches
                                            </Typography>

                                            {/* Search History Items */}
                                            {['Frontend Developer', 'Product Manager', 'UI/UX Designer', 'Data Analyst'].map((item, index) => (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1.5,
                                                        py: 1.5,
                                                        px: 1.5,
                                                        borderRadius: '8px',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s',
                                                        '&:hover': {
                                                            bgcolor: '#f8f9fa',
                                                        },
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: '50%',
                                                            bgcolor: '#f1f5f9',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <Search size={16} color="#64748b" />
                                                    </Box>
                                                    <Typography
                                                        sx={{
                                                            fontSize: '14px',
                                                            color: '#1e293b',
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {item}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                )}

                                {/* NOTIFICATIONS */}
                                <IconButton onClick={handleNotificationOpen} sx={{ ml: 1 }}>
                                    <Badge badgeContent={notifications} color="error">
                                        <Bell size={20} />
                                    </Badge>
                                </IconButton>

                                {/* PROFILE */}
                                <IconButton onClick={handleProfileMenuOpen} sx={{ ml: 1.5 }}>
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

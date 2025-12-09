import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Badge,
  Drawer,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
import { Bell, Search, Menu as MenuIcon, Briefcase, ArrowUpRight, MoreHorizontal, Bookmark, MessageSquare, Settings, HelpCircle } from 'lucide-react';
import L from 'leaflet';

// Components
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import JobCard from './components/JobCard';
import JobMap from './components/JobMap';
import ApplicationStatus from './components/ApplicationStatus';
import ProfileStrength from './components/ProfileStrength';
import SkillsProgress from './components/SkillsProgress';
import UpcomingInterviews from './components/UpcomingInterviews';
import ActivityHeatmap from './components/ActivityHeatmap';
import RecommendedJobs from './components/RecommendedJobs';
import MobileBottomNav from './components/MobileBottomNav';
import NotificationDrawer from './components/NotificationDrawer';
import logo from './assets/logo.png'
// Data
import {
  stats,
  jobLocations,
  skillsProgress,
  applicationStatus,
  upcomingInterviews,
} from './data/dashboardData';

// Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const DRAWER_WIDTH = 260;
const COLLAPSED_DRAWER_WIDTH = 80;

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [notifications] = useState(3);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  const [currentTab, setCurrentTab] = useState(0);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [moreMenuAnchor, setMoreMenuAnchor] = useState(null);
  const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const handleMoreMenuOpen = (event) => {
    setMoreMenuAnchor(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchor(null);
  };

  const handleMoreMenuItemClick = (menuItem) => {
    setSelectedMenu(menuItem);
    handleMoreMenuClose();
  };

  const handleNotificationOpen = () => {
    setNotificationDrawerOpen(true);
  };

  const handleNotificationClose = () => {
    setNotificationDrawerOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const recentJobs = jobLocations.slice(0, 3);

  // Tab Panel Component
  const TabPanel = ({ children, value, index }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && <Box>{children}</Box>}
      </div>
    );
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
      {/* AppBar for Mobile */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            background: '#ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            borderBottom: '1px solid #e9ecef',
          }}
        >
          <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Box component={'img'} src={logo} sx={{ width: '100%', height: '100%', maxWidth: '120px', maxHeight: '100px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton sx={{
                color: '#6c757d',
                width: 44,
                height: 44,
                '&:hover': { background: 'rgba(102, 126, 234, 0.1)', color: '#667eea' },
              }} onClick={handleNotificationOpen}>
                <Badge badgeContent={notifications} color="error">
                  <Bell size={20} />
                </Badge>
              </IconButton>
              <IconButton
                sx={{ color: '#1a1a2e', ml: 0.5 }}
                onClick={handleMoreMenuOpen}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                    fontSize: '14px',
                  }}
                >
                  JD
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={moreMenuAnchor}
                open={Boolean(moreMenuAnchor)}
                onClose={handleMoreMenuClose}
                sx={{
                  '& .MuiPaper-root': {
                    borderRadius: '12px',
                    mt: 1,
                    minWidth: 180,
                  },
                }}
              >
                <MenuItem onClick={() => handleMoreMenuItemClick('Saved Jobs')}>
                  <Bookmark size={18} style={{ marginRight: 12 }} />
                  Saved Jobs
                </MenuItem>
                <MenuItem onClick={() => handleMoreMenuItemClick('Messages')}>
                  <MessageSquare size={18} style={{ marginRight: 12 }} />
                  Messages
                </MenuItem>
                <MenuItem onClick={() => handleMoreMenuItemClick('Settings')}>
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

      {/* Sidebar */}
      <Box component="nav" sx={{ width: { md: sidebarExpanded ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH }, flexShrink: { md: 0 } }}>
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              background: '#ffffff',
              borderRight: '1px solid #e9ecef',
            },
          }}
        >
          <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} isExpanded={true} toggleSidebar={handleDrawerToggle} />
        </Drawer>
        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: sidebarExpanded ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH,
              background: '#ffffff',
              borderRight: '1px solid #e9ecef',
              transition: 'width 0.3s ease',
            },
          }}
          open
        >
          <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} isExpanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${sidebarExpanded ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH}px)` },
          minHeight: '100vh',
          background: '#f8f9fa',
          transition: 'width 0.3s ease',
        }}
      >
        {/* Top Bar for Desktop */}
        {!isMobile && (
          <Box
            sx={{
              background: '#ffffff',
              borderBottom: '1px solid #e9ecef',
              position: 'sticky',
              top: 0,
              zIndex: 1000,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 4,
                py: 2.5,
              }}
            >
              {/* <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1a2e' }}>
                {selectedMenu}
              </Typography> */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <IconButton
                  sx={{
                    color: '#6c757d',
                    background: '#f8f9fa',
                    width: 44,
                    height: 44,
                    '&:hover': { background: 'rgba(102, 126, 234, 0.1)', color: '#667eea' },
                  }}
                >
                  <Search size={20} />
                </IconButton>
                <IconButton
                  sx={{
                    color: '#6c757d',
                    background: '#f8f9fa',
                    width: 44,
                    height: 44,
                    '&:hover': { background: 'rgba(102, 126, 234, 0.1)', color: '#667eea' },
                  }}
                  onClick={handleNotificationOpen}
                >
                  <Badge badgeContent={notifications} color="error">
                    <Bell size={20} />
                  </Badge>
                </IconButton>
              </Box>
            </Box>
          </Box>
        )}

        {/* Content Area */}
        <Box sx={{ p: { xs: 2.5, md: 4 }, mt: { xs: 8, md: 0 }, pb: { xs: 10, md: 4 } }}>
          {/* Welcome Section */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontWeight: 700, color: '#1a1a2e', mb: 1, fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>
              Welcome back, John! 👋
            </Typography>
            <Typography variant="body1" sx={{ color: '#6c757d', fontWeight: 500, fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}>
              Here's what's happening with your job search today.
            </Typography>
          </Box>


        </Box>
      </Box>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      {/* Notification Drawer */}
      <NotificationDrawer open={notificationDrawerOpen} onClose={handleNotificationClose} />
    </Box>
  );
};

export default App;
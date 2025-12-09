import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
    Home as HomeOutlined,
    HomeRounded as HomeFilled,
    Search as SearchOutlined,
    SearchRounded as SearchFilled,
    Description as DescriptionOutlined,
    DescriptionRounded as DescriptionFilled,
    Send as SendOutlined,
    SendRounded as SendFilled,
    Person as PersonOutlined,
    PersonRounded as PersonFilled
} from '@mui/icons-material';

const MobileBottomNav = ({ selectedMenu, setSelectedMenu }) => {
    const bottomNavItems = [
        { text: 'Dashboard', iconOutlined: HomeOutlined, iconFilled: HomeFilled },
        { text: 'Jobs', iconOutlined: SearchOutlined, iconFilled: SearchFilled },
        { text: 'Resumes', iconOutlined: DescriptionOutlined, iconFilled: DescriptionFilled },
        { text: 'Applied', iconOutlined: SendOutlined, iconFilled: SendFilled },
        { text: 'Profile', iconOutlined: PersonOutlined, iconFilled: PersonFilled },
    ];

    const handleChange = (event, newValue) => {
        setSelectedMenu(newValue);
    };

    return (
        <Paper
            sx={{
                position: 'fixed',
                py: 1,
                px: 2,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: { xs: 'block', md: 'none' },
                boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
                borderTop: '1px solid #e9ecef',
                borderTopRightRadius: "24px",
                borderTopLeftRadius: "24px"
            }}
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={selectedMenu}
                onChange={handleChange}
                sx={{
                    height: 64,
                    background: '#ffffff',
                    '& .MuiBottomNavigationAction-root': {
                        minWidth: 'auto',
                        padding: '6px 12px',
                        borderRadius: '12px',

                        // default inactive style
                        color: '#6c757d',

                        '& .MuiSvgIcon-root': {
                            color: '#6c757d',
                        },

                        // selected item filled highlight
                        '&.Mui-selected': {
                            color: '#667eea',

                            '& .MuiSvgIcon-root': {
                                color: '#667eea',
                            },

                            '& .MuiBottomNavigationAction-label': {
                                fontSize: '10px',
                                fontWeight: 600,
                                color: '#667eea',
                            },
                        },

                        '& .MuiBottomNavigationAction-label': {
                            fontSize: '10px',
                            fontWeight: 500,
                            marginTop: '8px',
                        },
                    },
                }}
            >
                {bottomNavItems.map((item) => {
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
    );
};

export default MobileBottomNav;

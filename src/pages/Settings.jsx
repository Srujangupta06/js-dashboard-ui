import React from 'react';
import { Typography, Box } from '@mui/material';

const Settings = () => {
    return (
        <Box>
            <Typography
                sx={{
                    fontWeight: 700,
                    color: '#1a1a2e',
                    mb: 1,
                    fontSize: 'clamp(22px, 2.2vw, 28px)',
                }}
            >
                Settings
            </Typography>
            <Typography variant="body1" sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                Manage your account preferences and settings
            </Typography>
            {/* Add settings content here */}
        </Box>
    );
};

export default Settings;

import React from 'react';
import { Typography, Box } from '@mui/material';

const Profile = () => {
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
                My Profile
            </Typography>
            <Typography variant="body1" sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                View and edit your professional profile
            </Typography>
            {/* Add profile content here */}
        </Box>
    );
};

export default Profile;

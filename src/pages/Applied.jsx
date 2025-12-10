import React from 'react';
import { Typography, Box } from '@mui/material';

const Applied = () => {
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
                Applied Jobs
            </Typography>
            <Typography variant="body1" sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                Track your job applications and their status
            </Typography>
            {/* Add applied jobs content here */}
        </Box>
    );
};

export default Applied;

import React from 'react';
import { Typography, Box } from '@mui/material';

const Help = () => {
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
                Help & Support
            </Typography>
            <Typography variant="body1" sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                Get help and find answers to your questions
            </Typography>
            {/* Add help content here */}
        </Box>
    );
};

export default Help;

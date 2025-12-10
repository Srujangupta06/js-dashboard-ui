import React from 'react';
import { Typography, Box } from '@mui/material';

const Network = () => {
    return (
        <Box>
            <Typography
                sx={{
                    fontWeight: 700,
                    color: '#1a1a2e',
                    mb: 1,
                    fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                }}
            >
                My Network
            </Typography>
            <Typography sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                Connect with professionals in your field
            </Typography>
            {/* Add network content here */}
        </Box>
    );
};

export default Network;

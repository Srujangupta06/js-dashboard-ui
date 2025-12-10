import React from 'react';
import { Typography, Box } from '@mui/material';

const Companies = () => {
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
                Companies
            </Typography>
            <Typography variant="body1" sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                Explore companies and their job openings
            </Typography>
            {/* Add companies content here */}
        </Box>
    );
};

export default Companies;

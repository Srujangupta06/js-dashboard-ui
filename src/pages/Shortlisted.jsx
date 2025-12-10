import React from 'react';
import { Typography, Box } from '@mui/material';

const Shortlisted = () => {
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
                Shortlisted
            </Typography>
            <Typography variant="body1" sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                Jobs you've been shortlisted for
            </Typography>
            {/* Add shortlisted jobs content here */}
        </Box>
    );
};

export default Shortlisted;

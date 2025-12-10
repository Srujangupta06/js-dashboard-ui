import React from 'react';
import { Typography, Box } from '@mui/material';

const JobSearch = () => {
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
                Job Search
            </Typography>
            <Typography sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                Find your next opportunity
            </Typography>
            {/* Add job search content here */}
        </Box>
    );
};

export default JobSearch;

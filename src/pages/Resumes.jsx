import React from 'react';
import { Typography, Box } from '@mui/material';

const Resumes = () => {
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
                My Resumes
            </Typography>
            <Typography sx={{ color: '#6c757d', fontWeight: 500, mb: 4 }}>
                Manage your resumes and cover letters
            </Typography>
            {/* Add resumes content here */}
        </Box>
    );
};

export default Resumes;

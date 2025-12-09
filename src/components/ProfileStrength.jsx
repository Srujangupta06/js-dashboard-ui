import React from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, Divider, Chip } from '@mui/material';
import { Target } from 'lucide-react';

const ProfileStrength = () => {
    return (
        <Card
            sx={{
                background: '#ffffff',
                border: '1px solid #e9ecef',
                borderRadius: '16px',
                mb: 3,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                    <Target size={24} color="#ea590c" />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a2e' }}>
                        Profile Strength
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center', mb: 2.5 }}>
                    <Typography variant="h2" sx={{ fontWeight: 700, color: '#11998e', mb: 1.5 }}>
                        75%
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        value={75}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            background: '#e9ecef',
                            '& .MuiLinearProgress-bar': {
                                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                                borderRadius: 5,
                            },
                        }}
                    />
                </Box>
                <Divider sx={{ my: 2.5, borderColor: '#e9ecef' }} />
                <Typography variant="body2" sx={{ color: '#6c757d', mb: 1.5, fontWeight: 500 }}>
                    Complete your profile to increase visibility:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                    <Chip
                        label="Add portfolio projects"
                        size="small"
                        sx={{
                            justifyContent: 'flex-start',
                            background: 'rgba(255, 167, 38, 0.1)',
                            color: '#ffa726',
                            border: '1px solid rgba(255, 167, 38, 0.2)',
                            height: '32px',
                            fontWeight: 500,
                        }}
                    />
                    <Chip
                        label="Upload resume"
                        size="small"
                        sx={{
                            justifyContent: 'flex-start',
                            background: 'rgba(66, 165, 245, 0.1)',
                            color: '#42a5f5',
                            border: '1px solid rgba(66, 165, 245, 0.2)',
                            height: '32px',
                            fontWeight: 500,
                        }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProfileStrength;

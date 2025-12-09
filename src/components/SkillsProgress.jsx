import React from 'react';
import { Box, Card, CardContent, Typography, LinearProgress } from '@mui/material';
import { BarChart3 } from 'lucide-react';

const SkillsProgress = ({ skills }) => {
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <BarChart3 size={24} color="#ea590c" />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a2e' }}>
                        Top Skills
                    </Typography>
                </Box>
                {skills.map((skill, index) => (
                    <Box key={index} sx={{ mb: 2.5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" sx={{ color: '#1a1a2e', fontWeight: 600 }}>
                                {skill.skill}
                            </Typography>
                            <Typography variant="body2" sx={{ color: skill.color, fontWeight: 700 }}>
                                {skill.level}%
                            </Typography>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                                height: 8,
                                borderRadius: 4,
                                background: '#e9ecef',
                                '& .MuiLinearProgress-bar': {
                                    background: skill.color,
                                    borderRadius: 4,
                                },
                            }}
                        />
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
};

export default SkillsProgress;

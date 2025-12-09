import React from 'react';
import { Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { Navigation, Calendar, Clock } from 'lucide-react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const JobMap = ({ jobLocations }) => {
    return (
        <Card
            sx={{
                background: '#ffffff',
                border: '1px solid #e9ecef',
                borderRadius: '16px',
                mb: 3,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                overflow: 'hidden',
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Navigation size={24} color="#ea590c" />
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a2e' }}>
                            Jobs Near You
                        </Typography>
                    </Box>
                    <Chip
                        label={`${jobLocations.length} Jobs`}
                        size="small"
                        sx={{
                            background: 'rgba(102, 126, 234, 0.1)',
                            color: '#ea590c',
                            fontWeight: 600,
                            border: '1px solid rgba(102, 126, 234, 0.2)',
                            height: '28px',
                        }}
                    />
                </Box>
                <Box sx={{ height: 400, borderRadius: '12px', overflow: 'hidden', border: '1px solid #e9ecef' }}>
                    <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {jobLocations.map((job) => (
                            <CircleMarker
                                key={job.id}
                                center={job.coordinates}
                                radius={12}
                                fillColor={
                                    job.status === 'Applied' ? '#42a5f5' : job.status === 'Interview' ? '#66bb6a' : '#ffa726'
                                }
                                color="#ffffff"
                                weight={2}
                                opacity={1}
                                fillOpacity={0.8}
                            >
                                <Popup>
                                    <Box sx={{ p: 1 }}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                            {job.title}
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                            {job.company}
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', color: '#6c757d' }}>
                                            📍 {job.location}
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', color: '#6c757d' }}>
                                            💰 {job.salary}
                                        </Typography>
                                        <Chip
                                            label={job.status}
                                            size="small"
                                            sx={{
                                                mt: 1,
                                                height: '20px',
                                                fontSize: '10px',
                                                background:
                                                    job.status === 'Applied'
                                                        ? 'rgba(66, 165, 245, 0.1)'
                                                        : job.status === 'Interview'
                                                            ? 'rgba(102, 187, 106, 0.1)'
                                                            : 'rgba(255, 167, 38, 0.1)',
                                                color:
                                                    job.status === 'Applied'
                                                        ? '#42a5f5'
                                                        : job.status === 'Interview'
                                                            ? '#66bb6a'
                                                            : '#ffa726',
                                            }}
                                        />
                                    </Box>
                                </Popup>
                            </CircleMarker>
                        ))}
                    </MapContainer>
                </Box>
            </CardContent>
        </Card>
    );
};

export default JobMap;

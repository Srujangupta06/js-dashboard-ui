import React, { useState } from 'react';
import {
    Box,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Paper,
    Divider
} from '@mui/material';
import { ArrowLeft, Search, Clock, X } from 'lucide-react';

const SearchOverlay = ({ open, onClose }) => {
    const [searchText, setSearchText] = useState('');

    const recentSearches = [
        'Frontend Developer',
        'React Native Engineer',
        'Product Designer',
        'UX Researcher',
        'Full Stack Developer'
    ];

    if (!open) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: '#ffffff',
                zIndex: 2000,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Search Header */}
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    borderBottom: '1px solid #e9ecef',
                    borderRadius: 0
                }}
            >
                <IconButton onClick={onClose} edge="start" sx={{ color: '#6c757d' }}>
                    <ArrowLeft size={24} />
                </IconButton>
                
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        bgcolor: '#f8f9fa',
                        borderRadius: '12px',
                        px: 2,
                        py: 1
                    }}
                >
                    <Search size={20} color="#6c757d" />
                    <InputBase
                        placeholder="Search jobs, companies..."
                        fullWidth
                        autoFocus
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        sx={{ ml: 1.5, fontSize: '16px' }}
                    />
                    {searchText && (
                        <IconButton size="small" onClick={() => setSearchText('')}>
                            <X size={16} />
                        </IconButton>
                    )}
                </Box>
            </Paper>

            {/* Recent Searches */}
            <Box sx={{ p: 2, flex: 1, overflowY: 'auto' }}>
                <Typography
                    variant="subtitle2"
                    sx={{
                        color: '#6c757d',
                        fontWeight: 600,
                        mb: 2,
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        letterSpacing: '0.5px'
                    }}
                >
                    Recent Searches
                </Typography>
                
                <List disablePadding>
                    {recentSearches.map((text, index) => (
                        <ListItem
                            key={index}
                            button
                            sx={{
                                px: 0,
                                py: 1.5,
                                borderBottom: '1px solid #f8f9fa',
                                '&:hover': { bgcolor: 'transparent' }
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40, color: '#adb5bd' }}>
                                <Clock size={20} />
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                primaryTypographyProps={{
                                    fontSize: '15px',
                                    color: '#1a1a2e',
                                    fontWeight: 500
                                }}
                            />
                            <IconButton size="small" sx={{ color: '#e9ecef' }}>
                                <X size={16} />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default SearchOverlay;

import { useState, useEffect, useRef } from 'react';
import { Box, InputBase, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from '@mui/material';
import { Search, Clock, TrendingUp, X } from 'lucide-react';

const SearchBar = ({ isMobile = false }) => {
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const searchContainerRef = useRef(null);
    const inputRef = useRef(null);

    // Sample search history
    const searchHistory = [
        { text: 'Senior Frontend Developer', type: 'recent' },
        { text: 'React Developer Remote', type: 'recent' },
        { text: 'Full Stack Engineer', type: 'recent' },
    ];

    const trendingSearches = [
        { text: 'Remote Jobs', type: 'trending' },
        { text: 'Software Engineer', type: 'trending' },
        { text: 'Product Manager', type: 'trending' },
    ];

    const allSuggestions = [...searchHistory, ...trendingSearches];

    // Handle click outside to close search history
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setSearchFocused(false);
                setSelectedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (!searchFocused || allSuggestions.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => 
                    prev < allSuggestions.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0) {
                    handleSearchSelect(allSuggestions[selectedIndex].text);
                } else if (searchQuery.trim()) {
                    handleSearch(searchQuery);
                }
                break;
            case 'Escape':
                setSearchFocused(false);
                setSelectedIndex(-1);
                inputRef.current?.blur();
                break;
            default:
                break;
        }
    };

    const handleSearchSelect = (text) => {
        setSearchQuery(text);
        handleSearch(text);
        setSearchFocused(false);
        setSelectedIndex(-1);
    };

    const handleSearch = (query) => {
        console.log('Searching for:', query);
        // TODO: Implement actual search logic
    };

    const handleClear = () => {
        setSearchQuery('');
        inputRef.current?.focus();
    };

    return (
        <Box ref={searchContainerRef} sx={{ position: 'relative', width: '100%', maxWidth: isMobile ? '100%' : '400px' }}>
            {/* Search Input */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#f8f9fa',
                    borderRadius: '24px',
                    height: '44px',
                    px: 2,
                    border: searchFocused ? '2px solid #ea590c' : '2px solid transparent',
                    transition: 'all 0.2s ease',
                }}
            >
                <Search size={20} color={searchFocused ? '#ea590c' : '#6c757d'} />
                <InputBase
                    ref={inputRef}
                    placeholder="Search jobs, companies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onKeyDown={handleKeyDown}
                    sx={{
                        ml: 1.5,
                        flex: 1,
                        fontSize: '14px',
                        '& input::placeholder': {
                            color: '#adb5bd',
                            opacity: 1,
                        },
                    }}
                />
                {searchQuery && (
                    <IconButton
                        size="small"
                        onClick={handleClear}
                        sx={{
                            color: '#adb5bd',
                            '&:hover': {
                                background: 'rgba(234, 89, 12, 0.1)',
                                color: '#ea590c',
                            },
                        }}
                    >
                        <X size={16} />
                    </IconButton>
                )}
            </Box>

            {/* Search History Dropdown */}
            {searchFocused && (
                <Paper
                    sx={{
                        position: 'absolute',
                        top: '52px',
                        left: 0,
                        right: 0,
                        zIndex: 1100,
                        borderRadius: '16px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                        maxHeight: '400px',
                        overflow: 'auto',
                        animation: 'fadeIn 0.2s ease',
                        '@keyframes fadeIn': {
                            from: { opacity: 0, transform: 'translateY(-8px)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                        },
                    }}
                >
                    {/* Recent Searches */}
                    {searchHistory.length > 0 && (
                        <Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    px: 2,
                                    py: 1.5,
                                    display: 'block',
                                    color: '#6c757d',
                                    fontWeight: 600,
                                    fontSize: '11px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                }}
                            >
                                Recent Searches
                            </Typography>
                            <List sx={{ py: 0 }}>
                                {searchHistory.map((item, index) => (
                                    <ListItem
                                        key={`recent-${index}`}
                                        button
                                        selected={selectedIndex === index}
                                        onClick={() => handleSearchSelect(item.text)}
                                        sx={{
                                            py: 1.5,
                                            px: 2,
                                            '&:hover': {
                                                background: 'rgba(234, 89, 12, 0.05)',
                                            },
                                            '&.Mui-selected': {
                                                background: 'rgba(234, 89, 12, 0.1)',
                                                '&:hover': {
                                                    background: 'rgba(234, 89, 12, 0.15)',
                                                },
                                            },
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Clock size={18} color="#6c757d" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.text}
                                            primaryTypographyProps={{
                                                fontSize: '14px',
                                                fontWeight: 500,
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    )}

                    <Divider />

                    {/* Trending Searches */}
                    {trendingSearches.length > 0 && (
                        <Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    px: 2,
                                    py: 1.5,
                                    display: 'block',
                                    color: '#6c757d',
                                    fontWeight: 600,
                                    fontSize: '11px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                }}
                            >
                                Trending
                            </Typography>
                            <List sx={{ py: 0 }}>
                                {trendingSearches.map((item, index) => {
                                    const actualIndex = searchHistory.length + index;
                                    return (
                                        <ListItem
                                            key={`trending-${index}`}
                                            button
                                            selected={selectedIndex === actualIndex}
                                            onClick={() => handleSearchSelect(item.text)}
                                            sx={{
                                                py: 1.5,
                                                px: 2,
                                                '&:hover': {
                                                    background: 'rgba(234, 89, 12, 0.05)',
                                                },
                                                '&.Mui-selected': {
                                                    background: 'rgba(234, 89, 12, 0.1)',
                                                    '&:hover': {
                                                        background: 'rgba(234, 89, 12, 0.15)',
                                                    },
                                                },
                                            }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <TrendingUp size={18} color="#ea590c" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.text}
                                                primaryTypographyProps={{
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                }}
                                            />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Box>
                    )}
                </Paper>
            )}
        </Box>
    );
};

export default SearchBar;

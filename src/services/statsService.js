import { get, post, patch } from '../utils/apiClient';
import { API_ENDPOINTS } from '../config/api.config';
import { stats as mockStats } from '../data/dashboardData';

/**
 * Fetch dashboard statistics
 * @returns {Promise<Array>} - Array of stats
 */
export const fetchStats = async () => {
    try {
        // TODO: Replace with actual API call when backend is ready
        // const data = await get(API_ENDPOINTS.STATS);
        // return data;
        
        // For now, return mock data
        return Promise.resolve(mockStats);
    } catch (error) {
        console.error('Error fetching stats:', error);
        throw error;
    }
};

/**
 * Update a specific stat
 * @param {string} statId - Stat identifier
 * @param {object} updates - Updated values
 * @returns {Promise<object>} - Updated stat
 */
export const updateStat = async (statId, updates) => {
    try {
        // TODO: Replace with actual API call
        // const data = await patch(`${API_ENDPOINTS.STATS}/${statId}`, updates);
        // return data;
        
        return Promise.resolve({ id: statId, ...updates });
    } catch (error) {
        console.error('Error updating stat:', error);
        throw error;
    }
};

export default {
    fetchStats,
    updateStat,
};

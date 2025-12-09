import { get, put, patch } from '../utils/apiClient';
import { API_ENDPOINTS } from '../config/api.config';
import { skillsProgress as mockSkills } from '../data/dashboardData';

/**
 * Fetch user profile
 * @returns {Promise<object>} - User profile data
 */
export const fetchUserProfile = async () => {
    try {
        // TODO: Replace with actual API call
        // const data = await get(API_ENDPOINTS.USER_PROFILE);
        // return data;
        
        const mockProfile = {
            name: 'John Doe',
            title: 'Software Engineer',
            email: 'john.doe@example.com',
            phone: '+1 234 567 8900',
            location: 'San Francisco, CA',
            avatar: null,
        };
        
        return Promise.resolve(mockProfile);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

/**
 * Update user profile
 * @param {object} updates - Profile updates
 * @returns {Promise<object>} - Updated profile
 */
export const updateUserProfile = async (updates) => {
    try {
        // TODO: Replace with actual API call
        // const data = await put(API_ENDPOINTS.USER_PROFILE, updates);
        // return data;
        
        return Promise.resolve({ ...updates, updated: true });
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
};

/**
 * Fetch user skills
 * @returns {Promise<Array>} - Array of skills with progress
 */
export const fetchUserSkills = async () => {
    try {
        // TODO: Replace with actual API call
        // const data = await get(API_ENDPOINTS.USER_SKILLS);
        // return data;
        
        return Promise.resolve(mockSkills);
    } catch (error) {
        console.error('Error fetching user skills:', error);
        throw error;
    }
};

/**
 * Update user skills
 * @param {Array} skills - Updated skills array
 * @returns {Promise<Array>} - Updated skills
 */
export const updateUserSkills = async (skills) => {
    try {
        // TODO: Replace with actual API call
        // const data = await put(API_ENDPOINTS.USER_SKILLS, { skills });
        // return data;
        
        return Promise.resolve(skills);
    } catch (error) {
        console.error('Error updating user skills:', error);
        throw error;
    }
};

export default {
    fetchUserProfile,
    updateUserProfile,
    fetchUserSkills,
    updateUserSkills,
};

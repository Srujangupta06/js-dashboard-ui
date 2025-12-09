import { get, post, patch } from '../utils/apiClient';
import { API_ENDPOINTS } from '../config/api.config';
import { jobLocations as mockJobLocations } from '../data/dashboardData';

/**
 * Fetch all jobs
 * @param {object} filters - Job filters (location, type, salary, etc.)
 * @returns {Promise<Array>} - Array of jobs
 */
export const fetchJobs = async (filters = {}) => {
    try {
        // TODO: Replace with actual API call
        // const queryParams = new URLSearchParams(filters).toString();
        // const data = await get(`${API_ENDPOINTS.JOBS}?${queryParams}`);
        // return data;
        
        return Promise.resolve(mockJobLocations);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        throw error;
    }
};

/**
 * Fetch job locations for map
 * @returns {Promise<Array>} - Array of job locations with coordinates
 */
export const fetchJobLocations = async () => {
    try {
        // TODO: Replace with actual API call
        // const data = await get(API_ENDPOINTS.JOB_LOCATIONS);
        // return data;
        
        return Promise.resolve(mockJobLocations);
    } catch (error) {
        console.error('Error fetching job locations:', error);
        throw error;
    }
};

/**
 * Fetch recommended jobs
 * @returns {Promise<Array>} - Array of recommended jobs
 */
export const fetchRecommendedJobs = async () => {
    try {
        // TODO: Replace with actual API call
        // const data = await get(API_ENDPOINTS.RECOMMENDED_JOBS);
        // return data;
        
        return Promise.resolve(mockJobLocations.slice(0, 3));
    } catch (error) {
        console.error('Error fetching recommended jobs:', error);
        throw error;
    }
};

/**
 * Apply to a job
 * @param {string} jobId - Job identifier
 * @param {object} applicationData - Application details
 * @returns {Promise<object>} - Application response
 */
export const applyToJob = async (jobId, applicationData) => {
    try {
        // TODO: Replace with actual API call
        // const data = await post(`${API_ENDPOINTS.JOBS}/${jobId}/apply`, applicationData);
        // return data;
        
        return Promise.resolve({ jobId, status: 'applied', ...applicationData });
    } catch (error) {
        console.error('Error applying to job:', error);
        throw error;
    }
};

/**
 * Save/bookmark a job
 * @param {string} jobId - Job identifier
 * @returns {Promise<object>} - Save response
 */
export const saveJob = async (jobId) => {
    try {
        // TODO: Replace with actual API call
        // const data = await post(`${API_ENDPOINTS.JOBS}/${jobId}/save`);
        // return data;
        
        return Promise.resolve({ jobId, saved: true });
    } catch (error) {
        console.error('Error saving job:', error);
        throw error;
    }
};

export default {
    fetchJobs,
    fetchJobLocations,
    fetchRecommendedJobs,
    applyToJob,
    saveJob,
};

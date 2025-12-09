import { useState, useEffect } from 'react';
import { fetchJobs, fetchJobLocations, fetchRecommendedJobs } from '../services/jobsService';

/**
 * Custom hook to fetch jobs with filters
 * @param {object} filters - Job filters
 * @returns {object} - { jobs, loading, error, refetch }
 */
export const useJobs = (filters = {}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchJobs(filters);
            setJobs(data);
        } catch (err) {
            setError(err.message || 'Failed to fetch jobs');
            console.error('Error in useJobs:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [JSON.stringify(filters)]);

    return {
        jobs,
        loading,
        error,
        refetch: fetchData,
    };
};

/**
 * Custom hook to fetch job locations for map
 * @returns {object} - { locations, loading, error, refetch }
 */
export const useJobLocations = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchJobLocations();
            setLocations(data);
        } catch (err) {
            setError(err.message || 'Failed to fetch job locations');
            console.error('Error in useJobLocations:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        locations,
        loading,
        error,
        refetch: fetchData,
    };
};

/**
 * Custom hook to fetch recommended jobs
 * @returns {object} - { recommendedJobs, loading, error, refetch }
 */
export const useRecommendedJobs = () => {
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchRecommendedJobs();
            setRecommendedJobs(data);
        } catch (err) {
            setError(err.message || 'Failed to fetch recommended jobs');
            console.error('Error in useRecommendedJobs:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        recommendedJobs,
        loading,
        error,
        refetch: fetchData,
    };
};

export default {
    useJobs,
    useJobLocations,
    useRecommendedJobs,
};

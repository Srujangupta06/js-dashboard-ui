import { useState, useEffect } from 'react';
import { fetchStats } from '../services/statsService';

/**
 * Custom hook to fetch dashboard statistics
 * @returns {object} - { stats, loading, error, refetch }
 */
export const useStats = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchStats();
            setStats(data);
        } catch (err) {
            setError(err.message || 'Failed to fetch stats');
            console.error('Error in useStats:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        stats,
        loading,
        error,
        refetch: fetchData,
    };
};

export default useStats;

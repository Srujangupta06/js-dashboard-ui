import { useState, useEffect } from 'react';
import { fetchNotifications } from '../services/notificationsService';

/**
 * Custom hook to fetch notifications
 * @returns {object} - { notifications, unreadCount, loading, error, refetch }
 */
export const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchNotifications();
            setNotifications(data);
        } catch (err) {
            setError(err.message || 'Failed to fetch notifications');
            console.error('Error in useNotifications:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const unreadCount = notifications.filter(n => n.unread).length;

    return {
        notifications,
        unreadCount,
        loading,
        error,
        refetch: fetchData,
    };
};

export default useNotifications;

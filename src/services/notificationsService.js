import { get, patch } from '../utils/apiClient';
import { API_ENDPOINTS } from '../config/api.config';

/**
 * Fetch all notifications
 * @returns {Promise<Array>} - Array of notifications
 */
export const fetchNotifications = async () => {
    try {
        // TODO: Replace with actual API call
        // const data = await get(API_ENDPOINTS.NOTIFICATIONS);
        // return data;
        
        // Mock data
        const mockNotifications = [
            {
                id: 1,
                type: 'application',
                title: 'Application Viewed',
                message: 'Google viewed your application for Senior Product Manager',
                time: '5 min ago',
                color: '#ea590c',
                unread: true,
            },
            {
                id: 2,
                type: 'interview',
                title: 'Interview Scheduled',
                message: 'Interview with Microsoft scheduled for Dec 10, 2025 at 2:00 PM',
                time: '1 hour ago',
                color: '#42a5f5',
                unread: true,
            },
        ];
        
        return Promise.resolve(mockNotifications);
    } catch (error) {
        console.error('Error fetching notifications:', error);
        throw error;
    }
};

/**
 * Mark notification as read
 * @param {string} notificationId - Notification identifier
 * @returns {Promise<object>} - Updated notification
 */
export const markNotificationAsRead = async (notificationId) => {
    try {
        // TODO: Replace with actual API call
        // const data = await patch(`${API_ENDPOINTS.MARK_NOTIFICATION_READ}/${notificationId}`);
        // return data;
        
        return Promise.resolve({ id: notificationId, unread: false });
    } catch (error) {
        console.error('Error marking notification as read:', error);
        throw error;
    }
};

/**
 * Mark all notifications as read
 * @returns {Promise<object>} - Response
 */
export const markAllNotificationsAsRead = async () => {
    try {
        // TODO: Replace with actual API call
        // const data = await patch(API_ENDPOINTS.MARK_NOTIFICATION_READ);
        // return data;
        
        return Promise.resolve({ success: true });
    } catch (error) {
        console.error('Error marking all notifications as read:', error);
        throw error;
    }
};

export default {
    fetchNotifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
};

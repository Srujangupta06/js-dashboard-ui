// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// API endpoints
export const API_ENDPOINTS = {
    // Stats
    STATS: '/stats',
    
    // Jobs
    JOBS: '/jobs',
    JOB_LOCATIONS: '/jobs/locations',
    RECOMMENDED_JOBS: '/jobs/recommended',
    
    // Applications
    APPLICATIONS: '/applications',
    APPLICATION_STATUS: '/applications/status',
    
    // User
    USER_PROFILE: '/user/profile',
    USER_SKILLS: '/user/skills',
    
    // Interviews
    INTERVIEWS: '/interviews',
    UPCOMING_INTERVIEWS: '/interviews/upcoming',
    
    // Notifications
    NOTIFICATIONS: '/notifications',
    MARK_NOTIFICATION_READ: '/notifications/mark-read',
    
    // Activity
    ACTIVITY: '/activity',
    ACTIVITY_HEATMAP: '/activity/heatmap',
};

// HTTP methods
export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};

export default API_BASE_URL;

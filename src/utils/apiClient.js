import API_BASE_URL from '../config/api.config';

/**
 * Generic API request handler
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise} - API response
 */
const apiRequest = async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
            // Add authentication token if available
            ...(localStorage.getItem('token') && {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }),
        },
    };

    const config = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'API request failed');
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

/**
 * GET request
 */
export const get = (endpoint, options = {}) => {
    return apiRequest(endpoint, {
        ...options,
        method: 'GET',
    });
};

/**
 * POST request
 */
export const post = (endpoint, data, options = {}) => {
    return apiRequest(endpoint, {
        ...options,
        method: 'POST',
        body: JSON.stringify(data),
    });
};

/**
 * PUT request
 */
export const put = (endpoint, data, options = {}) => {
    return apiRequest(endpoint, {
        ...options,
        method: 'PUT',
        body: JSON.stringify(data),
    });
};

/**
 * PATCH request
 */
export const patch = (endpoint, data, options = {}) => {
    return apiRequest(endpoint, {
        ...options,
        method: 'PATCH',
        body: JSON.stringify(data),
    });
};

/**
 * DELETE request
 */
export const del = (endpoint, options = {}) => {
    return apiRequest(endpoint, {
        ...options,
        method: 'DELETE',
    });
};

export default {
    get,
    post,
    put,
    patch,
    delete: del,
};

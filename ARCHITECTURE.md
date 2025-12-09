# Project Structure - Modular Architecture

This project follows a modular architecture to make API integration easy and maintainable.

## 📁 Directory Structure

```
src/
├── config/              # Configuration files
│   └── api.config.js    # API endpoints and base URL configuration
├── services/            # API service layer
│   ├── statsService.js
│   ├── jobsService.js
│   └── notificationsService.js
├── hooks/               # Custom React hooks
│   ├── useStats.js
│   ├── useJobs.js
│   └── useNotifications.js
├── utils/               # Utility functions
│   └── apiClient.js     # Generic API client with HTTP methods
├── components/          # React components
├── data/                # Mock data (temporary)
└── assets/              # Static assets
```

## 🔧 How It Works

### 1. **Configuration Layer** (`config/`)
- `api.config.js`: Contains API base URL and all endpoint definitions
- Easy to update when backend URLs change
- Environment variable support via `VITE_API_BASE_URL`

### 2. **API Client** (`utils/apiClient.js`)
- Generic HTTP client with methods: `get`, `post`, `put`, `patch`, `delete`
- Automatic authentication token handling
- Centralized error handling
- Easy to extend with interceptors

### 3. **Service Layer** (`services/`)
- Business logic and API calls
- Each service handles a specific domain (stats, jobs, notifications)
- Currently returns mock data with TODO comments for API integration
- Clean separation between data fetching and UI

### 4. **Custom Hooks** (`hooks/`)
- React hooks for data fetching with loading and error states
- Automatic refetching capability
- Easy to use in components

## 🚀 How to Integrate Real APIs

### Step 1: Update API Configuration
```javascript
// config/api.config.js
const API_BASE_URL = 'https://your-api.com/api';
```

Or set environment variable:
```bash
VITE_API_BASE_URL=https://your-api.com/api
```

### Step 2: Update Service Methods
Replace mock data with actual API calls:

```javascript
// Before (Mock)
export const fetchStats = async () => {
    return Promise.resolve(mockStats);
};

// After (Real API)
export const fetchStats = async () => {
    const data = await get(API_ENDPOINTS.STATS);
    return data;
};
```

### Step 3: Use Hooks in Components
```javascript
import { useStats } from '../hooks/useStats';

function MyComponent() {
    const { stats, loading, error, refetch } = useStats();
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div>
            {stats.map(stat => (
                <StatCard key={stat.title} {...stat} />
            ))}
        </div>
    );
}
```

## 📝 Available Services

### Stats Service
- `fetchStats()` - Get dashboard statistics
- `updateStat(statId, updates)` - Update a specific stat

### Jobs Service
- `fetchJobs(filters)` - Get jobs with filters
- `fetchJobLocations()` - Get job locations for map
- `fetchRecommendedJobs()` - Get recommended jobs
- `applyToJob(jobId, data)` - Apply to a job
- `saveJob(jobId)` - Save/bookmark a job

### Notifications Service
- `fetchNotifications()` - Get all notifications
- `markNotificationAsRead(id)` - Mark single notification as read
- `markAllNotificationsAsRead()` - Mark all as read

## 🎯 Benefits

1. **Separation of Concerns**: UI components don't handle API logic
2. **Easy Testing**: Services and hooks can be tested independently
3. **Reusability**: Hooks can be used across multiple components
4. **Maintainability**: Changes to API structure only affect service layer
5. **Type Safety**: Easy to add TypeScript later
6. **Error Handling**: Centralized error handling in API client
7. **Loading States**: Built-in loading and error states in hooks

## 🔐 Authentication

The API client automatically includes authentication tokens from localStorage:

```javascript
// Login and store token
localStorage.setItem('token', 'your-jwt-token');

// All subsequent API calls will include:
// Authorization: Bearer your-jwt-token
```

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://your-api.com/api
```

## 📚 Next Steps

1. Set up your backend API
2. Update `VITE_API_BASE_URL` in `.env`
3. Replace mock data in services with actual API calls
4. Add error boundaries for better error handling
5. Consider adding React Query for advanced caching

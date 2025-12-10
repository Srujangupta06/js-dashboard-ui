import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import L from 'leaflet';

// Layout
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import Dashboard from './pages/Dashboard';
import JobSearch from './pages/JobSearch';
import Resumes from './pages/Resumes';
import Network from './pages/Network';
import Saved from './pages/Saved';
import Applied from './pages/Applied';
import Companies from './pages/Companies';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Shortlisted from './pages/Shortlisted';
import FileManager from './pages/FileManager';
import Help from './pages/Help';

// Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard Layout Routes */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="job-search" element={<JobSearch />} />
          <Route path="resumes" element={<Resumes />} />
          <Route path="network" element={<Network />} />
          <Route path="saved" element={<Saved />} />
          <Route path="applied" element={<Applied />} />
          <Route path="shortlisted" element={<Shortlisted />} />
          <Route path="companies" element={<Companies />} />
          <Route path="file-manager" element={<FileManager />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<Help />} />
        </Route>

        {/* Catch all - redirect to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

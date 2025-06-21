import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import CalendarFull from './components/CalendarFull';
import LogoutButton from './components/LogoutButton';
import PrivateRoute from './components/PrivateRoute';
import RoleRoute from './components/RoleRoute';

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <CalendarFull />
      <Router>
        <nav className="flex gap-4 items-center p-4 bg-gray-100 border-b">
          <Link to="/" className="text-blue-600">Dashboard</Link>
          <Link to="/listings" className="text-blue-600">Listings</Link>
          <Link to="/admin-dashboard" className="text-red-600">Admin</Link>
          {!user && (
            <>
              <Link to="/login" className="text-blue-600">Login</Link>
              <Link to="/signup" className="text-blue-600">Signup</Link>
            </>
          )}
          {user && <LogoutButton />}
        </nav>
        <Routes>
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/listings" element={<PrivateRoute><Listings /></PrivateRoute>} />
          <Route path="/admin-dashboard" element={
            <RoleRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </RoleRoute>
          }/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

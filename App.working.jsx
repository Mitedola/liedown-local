import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CalendarFull from './components/CalendarFull';
import LogoutButton from './components/LogoutButton';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <CalendarFull />
      <Router>
        <nav className="flex gap-4 items-center p-4 bg-gray-100 border-b">
          <Link to="/" className="text-blue-600">Dashboard</Link>
          <Link to="/listings" className="text-blue-600">Listings</Link>
          {!user && (
            <>
              <Link to="/login" className="text-blue-600">Login</Link>
              <Link to="/signup" className="text-blue-600">Signup</Link>
            </>
          )}
          {user && <LogoutButton />}
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/listings"
            element={
              <PrivateRoute>
                <Listings />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

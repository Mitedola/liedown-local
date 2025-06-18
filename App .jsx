import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CalendarFull from './components/CalendarFull';
import LogoutButton from './components/LogoutButton';


function App() {
  return (
    <>
      <CalendarFull />
      <Router>
        <nav style={{ margin: '1rem', display: 'flex', alignItems: 'center' }}>
  <Link to="/" style={{ marginRight: '1rem' }}>Dashboard</Link>
  <Link to="/listings" style={{ marginRight: '1rem' }}>Listings</Link>
  <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
  <Link to="/signup" style={{ marginRight: '1rem' }}>Signup</Link>
  <LogoutButton />
</nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

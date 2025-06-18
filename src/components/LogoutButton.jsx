import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <button onClick={handleLogout} className="ml-4 px-4 py-2 bg-red-500 text-white rounded">
      Logout
    </button>
  );
};

export default LogoutButton;


import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useEffect, useState } from 'react';

const RoleRoute = ({ allowedRoles, children }) => {
  const [user, loading] = useAuthState(auth);
  const [role, setRole] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (user) {
      user.getIdTokenResult()
        .then((idTokenResult) => {
          setRole(idTokenResult.claims.role);
        })
        .finally(() => setChecking(false));
    } else {
      setChecking(false);
    }
  }, [user]);

  if (loading || checking) return <p>Loading...</p>;
  if (!user || !allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RoleRoute;

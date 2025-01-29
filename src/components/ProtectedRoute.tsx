import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContextType';

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { accessToken, renewToken } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!accessToken) {
      renewToken();
    }
  }, [accessToken, renewToken]);

  if (!accessToken) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return element;
};

export default ProtectedRoute;
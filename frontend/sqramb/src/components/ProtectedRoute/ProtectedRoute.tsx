import React, { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  useEffect(() => {
    let logoutTimer: NodeJS.Timeout | null = null;

    const startLogoutTimer = () => {
      logoutTimer = setTimeout(() => {
        const userResponse = window.confirm('Do you want to continue to be logged in? Press OK to continue.');

        if (!userResponse) {
          handleSessionExpired();
        } else {
          startLogoutTimer(); 
        }
      }, 3000000); 
    };

    const handleSessionExpired = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenTimestamp');
      window.location.href = '/';
    };

    const resetLogoutTimer = () => {
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
      startLogoutTimer();
    };

   
    startLogoutTimer();


    document.addEventListener('mousedown', resetLogoutTimer);
    document.addEventListener('keydown', resetLogoutTimer);


    return () => {
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
      document.removeEventListener('mousedown', resetLogoutTimer);
      document.removeEventListener('keydown', resetLogoutTimer);
    };
  }, []);

  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

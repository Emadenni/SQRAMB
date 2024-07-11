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
          startLogoutTimer(); // Riavvia il timer se l'utente ha premuto OK
        }
      }, 30000); // 30 secondi
    };

    const handleSessionExpired = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenTimestamp');
      window.location.href = '/'; // Reindirizza l'utente alla pagina di login
    };

    const resetLogoutTimer = () => {
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
      startLogoutTimer();
    };

    // Avvia il timer di logout all'avvio del componente
    startLogoutTimer();

    // Resetta il timer di logout quando l'utente interagisce con il componente
    document.addEventListener('mousedown', resetLogoutTimer);
    document.addEventListener('keydown', resetLogoutTimer);

    // Pulisce gli event listener quando il componente viene smontato
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

import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';

const Dashboard = () => {
  useEffect(() => {
    const checkTokenExpiration = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('http://localhost:your_port/api/protected-route', {
            headers: {
              'Authorization': token,
            },
          });

          if (response.status === 403) {
            alert('Session expired. Please log in again.');
            window.location.href = '/'; // Reindirizza alla pagina di login o alla landing page
          }
        } catch (error) {
          console.error('Error verifying token:', error);
        }
      } else {
        window.location.href = '/'; // Se non c'è un token nel localStorage, reindirizza alla pagina di login o alla landing page
      }
    };

    checkTokenExpiration();
  }, []);

  return (
    <div>
      <Layout />
    </div>
  );
};

export default Dashboard;

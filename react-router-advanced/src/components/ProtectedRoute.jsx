import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) 1 ;{
      // Assuming you have a backend API to validate the token
      fetch('/api/auth/validate', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.isValid) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('token');
          }
        })
        .catch((error) => {
          console.error('Authentication error:', error);
          localStorage.removeItem('token');
        });
    }
  }, []); // <-- Corrected closing bracket

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assuming AuthContext.js is the file where you define your authentication context

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;
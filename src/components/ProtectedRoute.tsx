import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('first log in');
        return <Navigate to="/auth" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;

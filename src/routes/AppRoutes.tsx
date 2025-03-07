import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';

import NotFoundPage from '../pages/NotFoundPage';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/signUp';
import FoodList from '../pages/Dashboard/FoodList';
import AddFoods from '../pages/Dashboard/AddFoods';
import EditFoods from '../pages/Dashboard/EditFoods';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/auth" replace />} />
                {/* Auth Routes */}
                <Route path="/auth" element={<AuthLayout />}>
                    <Route index element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>

                {/* Dashboard Routes */}
                <Route path="/dashboard" element={<ProtectedRoute />}>
                    <Route element={<DashboardLayout />}>
                        <Route index element={<FoodList />} />
                        <Route path="add-foods" element={<AddFoods />} />
                        <Route path="edit-foods/:id" element={<EditFoods />} />
                    </Route>
                </Route>

                {/* 404 Page */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

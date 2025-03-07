import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Bong Thali</h1>
            <Outlet />
        </div>
    );
};

export default AuthLayout;

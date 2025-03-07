import { Outlet, Link } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header */}
            <header className="bg-blue-600 text-white py-4 shadow-md">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
                    <h1 className="text-2xl font-bold">Bong Thali Dashboard</h1>
                    <nav className="space-x-6">
                        <Link to="/dashboard" className="hover:underline">
                            Home
                        </Link>
                        <Link to="add-foods" className="hover:underline">
                            Add Foods
                        </Link>
                        <Link to="/auth" className="hover:underline">
                            Logout
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;

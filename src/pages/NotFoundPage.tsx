import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
            <p className="text-lg text-gray-600 mt-2">
                The page you are looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/auth"
                className="mt-6 px-6 py-3 text-lg text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition"
            >
                Go to Sign In
            </Link>
        </div>
    );
};

export default NotFoundPage;

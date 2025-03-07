import { useRef } from 'react';
import { Link } from 'react-router';
import { useAuth } from '../../hooks/useSignin';

const SignIn = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { login, error, loading } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        if (!email || !password) return;
        await login(email, password);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            ref={emailRef}
                            type="email"
                            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            ref={passwordRef}
                            type="password"
                            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-6 py-3 rounded-lg transition ${
                            loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-red-500 hover:bg-red-600 text-white'
                        }`}
                    >
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                </form>

                <p className="text-red-400 text-center">
                    <Link to={'/auth/signup'}> if you are new usert then first register</Link>{' '}
                </p>
            </div>
        </div>
    );
};

export default SignIn;

import { useRef } from 'react';

import { Link } from 'react-router';
import { useSignUp } from '../../hooks/useSignup';

const SignUp = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { register, error, loading } = useSignUp();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const name = nameRef.current?.value;
        const phone = phoneRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!name || !phone || !email || !password) return;
        await register({ name, phone, email, pass1: password });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input
                            ref={nameRef}
                            type="text"
                            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700">Phone</label>
                        <input
                            ref={phoneRef}
                            type="text"
                            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            ref={emailRef}
                            type="email"
                            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            ref={passwordRef}
                            type="password"
                            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                    >
                        {loading ? 'Loading...' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-blue-400 text-center mt-4">
                    <Link to={'/auth'}>Already have an account? Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;

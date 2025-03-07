import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signIn } from '../services/api';
import { toast } from 'react-hot-toast';

export const useAuth = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const response = await signIn({ email, pass1: password });

            console.log('API Response:', response); // Debugging

            if (response?.status === 'success') {
                toast.success(response.message || 'Login Successful! ✅');
                setError(null);
                navigate('/dashboard');
            } else {
                toast.error(response.message || 'Login failed ❌');
                setError(response.message || 'Invalid email or password.');
            }
        } catch (err) {
            toast.error('Invalid credentials ❌');
            setError('Invalid email or password. Please try again.');
            console.error('Login Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return { login, error, loading };
};

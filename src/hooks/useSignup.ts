import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signUp } from '../services/api';
import { toast } from 'react-hot-toast';

export const useSignUp = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const register = async (user: {
        name: string;
        phone: string;
        email: string;
        pass1: string;
    }) => {
        setLoading(true);
        try {
            const response = await signUp(user);

            console.log('Signup Response:', response); // Debugging

            if (response?.mesaage === 'Sign Up successfully..!') {
                toast.success(response.message || 'Signup Successful! ✅');
                setError(null);
                navigate('/auth');
            } else {
                toast.error(response.message || 'Signup failed ❌');
                setError(response.message || 'Failed to register. Please try again.');
            }
        } catch (err) {
            toast.error('Signup failed ❌');
            setError('Failed to register. Please try again.');
            console.error('Signup Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return { register, error, loading };
};

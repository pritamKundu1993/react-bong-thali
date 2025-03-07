import { useState } from 'react';
import { deleteFood } from '../services/api';
import { toast } from 'react-hot-toast';

const useDeleteFood = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDelete = async (foodId: string, onSuccess: () => void) => {
        if (window.confirm('Are you sure you want to delete this food item?')) {
            setLoading(true);
            try {
                const res = await deleteFood(foodId);
                toast.success(res.message);
                onSuccess(); // Callback to update the list
            } catch (err) {
                setError('Failed to delete food item.');
                console.error('Delete error:', err);
            } finally {
                setLoading(false);
            }
        }
    };

    return { handleDelete, loading, error };
};

export default useDeleteFood;

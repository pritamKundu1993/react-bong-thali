import { useEffect, useState } from 'react';
import { getAllFoods } from '../services/api';

const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const data = await getAllFoods();
                setFoods(data);
            } catch (err) {
                setError('Failed to fetch foods' + err);
            } finally {
                setLoading(false);
            }
        };

        fetchFoods();
    }, []);

    return { foods, loading, error };
};

export default useFoods;

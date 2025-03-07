import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getFoodById, updateFood } from '../services/api';

const useEditFood = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const foodNameRef = useRef<HTMLInputElement>(null);
    const foodDescRef = useRef<HTMLTextAreaElement>(null);
    const foodPriceRef = useRef<HTMLInputElement>(null);
    const foodImageRef = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                if (!id) return;
                const food = await getFoodById(id);
                if (foodNameRef.current) foodNameRef.current.value = food.food_name;
                if (foodDescRef.current) foodDescRef.current.value = food.food_desc;
                if (foodPriceRef.current) foodPriceRef.current.value = food.food_price;
                setPreview(food.food_image);
            } catch (error) {
                console.error('Failed to fetch food:', error);
            }
        };
        fetchFood();
    }, [id]);

    const handleImageChange = () => {
        if (foodImageRef.current?.files?.[0]) {
            const file = foodImageRef.current.files[0];
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpdateFood = async () => {
        if (!id) return alert('Invalid food ID');

        const updatedFood = {
            food_name: foodNameRef.current?.value || '',
            food_desc: foodDescRef.current?.value || '',
            food_price: Number(foodPriceRef.current?.value) || 0,
            food_image: foodImageRef.current?.files?.[0] || undefined,
        };

        setLoading(true);
        try {
            await updateFood(id, updatedFood);
            alert('Food updated successfully!');
            navigate('/dashboard');
        } catch (error) {
            alert('Failed to update food');
            console.error('Update error:', error);
        } finally {
            setLoading(false);
        }
    };

    return {
        foodNameRef,
        foodDescRef,
        foodPriceRef,
        foodImageRef,
        preview,
        loading,
        handleImageChange,
        handleUpdateFood,
    };
};

export default useEditFood;

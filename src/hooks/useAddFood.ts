import { useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { addFood } from '../services/api';
import { useNavigate } from 'react-router';

const useAddFood = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // useRef for form inputs
    const foodNameRef = useRef<HTMLInputElement>(null);
    const foodDescRef = useRef<HTMLTextAreaElement>(null);
    const foodPriceRef = useRef<HTMLInputElement>(null);
    const foodImageRef = useRef<HTMLInputElement>(null);

    // Function to handle food addition
    const handleAddFood = async () => {
        const food_name = foodNameRef.current?.value.trim();
        const food_desc = foodDescRef.current?.value.trim();
        const food_price = foodPriceRef.current?.value.trim();
        const food_image = foodImageRef.current?.files?.[0];

        // Validation
        if (!food_name || !food_desc || !food_price || !food_image) {
            toast.error('All fields are required!');
            return;
        }

        setLoading(true);

        try {
            const newFood = {
                food_name,
                food_desc,
                food_price: Number(food_price),
                food_image,
            };

            const response = await addFood(newFood);
            toast.success(response.message || 'Food added successfully!');

            // Clear the form after submission
            if (foodNameRef.current) foodNameRef.current.value = '';
            if (foodDescRef.current) foodDescRef.current.value = '';
            if (foodPriceRef.current) foodPriceRef.current.value = '';
            if (foodImageRef.current) foodImageRef.current.value = '';
            navigate('/dashboard');
        } catch (error) {
            toast.error('Failed to add food. Try again!');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return { foodNameRef, foodDescRef, foodPriceRef, foodImageRef, handleAddFood, loading };
};

export default useAddFood;

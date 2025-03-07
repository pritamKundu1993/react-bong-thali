import axios from 'axios';

const BASE_URL = 'https://foodordersystem.glitch.me/api';

// Axios instance for default configuration
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 1. Get all food items
export const getAllFoods = async () => {
    const response = await api.get('/foods');
    return response.data;
};

//  2. Get a single food item by ID
export const getFoodById = async (id: string) => {
    const response = await api.get(`/food/${id}`);
    return response.data;
};

// 3. Add a new food item (Supports Image Upload)
export const addFood = async (food: {
    food_name: string;
    food_desc: string;
    food_price: number;
    food_image: File;
}) => {
    const formData = new FormData();
    formData.append('food_name', food.food_name);
    formData.append('food_desc', food.food_desc);
    formData.append('food_price', food.food_price.toString());
    formData.append('food_image', food.food_image);

    const response = await api.post('/food', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

//  4. Update a food item by ID (Supports Image Upload)
export const updateFood = async (
    id: string,
    updatedFood: {
        food_name?: string;
        food_desc?: string;
        food_price?: number;
        food_image?: File;
    }
) => {
    let response;

    if (updatedFood.food_image) {
        // If an image is provided, use FormData
        const formData = new FormData();
        if (updatedFood.food_name) formData.append('food_name', updatedFood.food_name);
        if (updatedFood.food_desc) formData.append('food_desc', updatedFood.food_desc);
        if (updatedFood.food_price)
            formData.append('food_price', updatedFood.food_price.toString());
        formData.append('food_image', updatedFood.food_image);

        response = await api.put(`/food/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    } else {
        // If no image is provided, use JSON
        response = await api.put(`/food/${id}`, updatedFood);
    }

    return response.data;
};

// 🥘 5. Delete a food item by ID
export const deleteFood = async (id: string) => {
    const response = await api.delete(`/food/${id}`);
    return response.data;
};

// 🥘 6. Get foods within a price range
export const getFoodsByPriceRange = async (lim1: number, lim2: number) => {
    const response = await api.get(`/foods/${lim1}/${lim2}`);
    return response.data;
};

// 🧑‍💻 7. User Signup
export const signUp = async (user: {
    name: string;
    phone: string;
    email: string;
    pass1: string;
}) => {
    const response = await api.post('/user/signup', user);
    return response.data;
};

// 🔑 8. User Signin
export const signIn = async (credentials: { email: string; pass1: string }) => {
    const response = await api.post('/user/signin', credentials);
    return response.data;
};

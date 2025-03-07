import { useState } from 'react';
import { useNavigate } from 'react-router';
import Loader from '../../components/Loader';
import useFoods from '../../hooks/useFood';
import useDeleteFood from '../../hooks/useDeleteFood';

interface IFood {
    _id: string;
    food_name: string;
    food_desc: string;
    food_price: number;
    food_image: string;
}

const FoodList = () => {
    const { foods, loading, error } = useFoods();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const { handleDelete } = useDeleteFood();
    const itemsPerPage = 3;
    const navigate = useNavigate();

    if (loading) return <Loader />;

    if (error) return <p className="text-center text-red-500">{error}</p>;

    const filteredFoods = foods.filter((food: IFood) =>
        food.food_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedFoods = filteredFoods.slice(startIndex, startIndex + itemsPerPage);

    const handleEdit = (food: IFood) => {
        navigate(`edit-foods/${food._id}`, { state: food });
    };

    const handleDeleteFood = (foodId: string) => {
        handleDelete(foodId, () => {
            window.location.reload();
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Food Menu</h2>
            <input
                type="text"
                placeholder="Search food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            {selectedFoods.length > 0 ? (
                <>
                    <ul className="grid grid-cols-3 gap-4">
                        {selectedFoods.map((food: IFood) => (
                            <li
                                key={food._id}
                                className="p-4  bg-white rounded-lg shadow-md h-[480px]"
                            >
                                <h3 className="text-lg font-semibold text-orange- my-1.5">
                                    {food.food_name}
                                </h3>
                                <p className="text-gray-600 max-h-[200px] overflow-auto my-1.5">
                                    {food.food_desc}
                                </p>
                                <p className="font-bold text-gray-800">Price: ₹{food.food_price}</p>
                                <img
                                    src={food.food_image}
                                    alt={food.food_name}
                                    className="mt-2 w-full object-cover rounded-md h-32"
                                />
                                <div className="flex justify-between mt-2">
                                    <button
                                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        onClick={() => handleEdit(food)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                        onClick={() => handleDeleteFood(food._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-4 space-x-2">
                        <button
                            className={`px-4 py-2 bg-gray-300 rounded ${
                                currentPage === 1
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'hover:bg-gray-400'
                            }`}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                className={`px-3 py-1 rounded ${
                                    currentPage === index + 1
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className={`px-4 py-2 bg-gray-300 rounded ${
                                currentPage === totalPages
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'hover:bg-gray-400'
                            }`}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            ) : (
                <p className="text-center w-full p-4 border-2 border-gray-500">No items found</p>
            )}
        </div>
    );
};

export default FoodList;

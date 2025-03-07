import useAddFood from '../../hooks/useAddFood';

const AddFood = () => {
    const { foodNameRef, foodDescRef, foodPriceRef, foodImageRef, handleAddFood, loading } =
        useAddFood();

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Add New Food</h2>
            <div className="space-y-4">
                <input
                    ref={foodNameRef}
                    type="text"
                    placeholder="Food Name"
                    className="w-full p-2 border rounded"
                />
                <textarea
                    ref={foodDescRef}
                    placeholder="Food Description"
                    className="w-full p-2 border rounded"
                />
                <input
                    ref={foodPriceRef}
                    type="number"
                    placeholder="Food Price"
                    className="w-full p-2 border rounded"
                />
                <input ref={foodImageRef} type="file" className="w-full p-2 border rounded" />
                <button
                    onClick={handleAddFood}
                    disabled={loading}
                    className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 disabled:bg-gray-400"
                >
                    {loading ? 'Adding...' : 'Add Food'}
                </button>
            </div>
        </div>
    );
};

export default AddFood;

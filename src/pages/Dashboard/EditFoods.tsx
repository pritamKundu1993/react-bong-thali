import useEditFood from '../../hooks/useEditFood';

const EditFood = () => {
    const {
        foodNameRef,
        foodDescRef,
        foodPriceRef,
        foodImageRef,
        preview,
        loading,
        handleImageChange,
        handleUpdateFood,
    } = useEditFood();

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Edit Food</h2>
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

                {preview && (
                    <img
                        src={preview}
                        alt="Food Preview"
                        className="w-full h-40 object-cover rounded-md"
                    />
                )}

                <input
                    ref={foodImageRef}
                    type="file"
                    className="w-full p-2 border rounded"
                    onChange={handleImageChange}
                />

                <button
                    onClick={handleUpdateFood}
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {loading ? 'Updating...' : 'Update Food'}
                </button>
            </div>
        </div>
    );
};

export default EditFood;

const Loader = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Food Menu</h2>
            <ul className="grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <li key={index} className="p-4 bg-white rounded-lg shadow-md animate-pulse">
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                        <div className="h-32 bg-gray-300 rounded-md"></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Loader;

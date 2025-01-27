const MovieModal = ({ isOpen, movie, onClose }) => {
    if (!isOpen || !movie) return null; // Don't render if modal is closed or no movie is selected

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={onClose} // Close modal when clicking on the background
        >
            <div 
                className="bg-gray-800 p-4 w-[90%] md:w-[700px]"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg text-white font-bold">
                        {movie.title}
                    </h2>
                    <button
                        className="text-white bg-red-500 px-3 py-1 rounded-md"
                        onClick={onClose}
                    >
                        Close ✖
                    </button>
                </div>
                <div className="aspect-video bg-black">
                    <iframe
                        src={movie.movie}
                        className="w-full h-full"
                        title={movie.title}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;

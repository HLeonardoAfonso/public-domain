"use client";

const SearchBarToggle = ({ searchTerm, onSearchChange, viewMode, setViewMode }) => {
    return (
        <div className="flex items-center gap-4 mb-5 w-full md:w-auto font-jost">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search movies by title, year, or silent..."
                value={searchTerm}
                onChange={onSearchChange} // Call the passed `onSearchChange` function
                className="bg-transparent border border-white text-white h-7 md:w-[500px] w-[80%] rounded-full p-5 focus:outline-none truncate"
            />

            {/* Toggle Button */}
            <button
                className={`px-4 py-2 rounded-md bg-gray-500 text-white`}
                onClick={() => setViewMode(viewMode === "byYear" ? "normal" : "byYear")}
            >
                {viewMode === "byYear" ? "Switch to Normal" : "Switch to By Year"}
            </button>
        </div>
    );
};

export default SearchBarToggle;

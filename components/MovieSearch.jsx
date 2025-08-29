"use client";

import { useState, useEffect } from "react";
import MovieCard from "./UI/Card";
import MovieModal from "./UI/MovieModal";
import SearchBarToggle from "./UI/SearchBarToggle";
import NewIn from "./NewIn";

const MovieSearch = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State for search input
    const [loading, setLoading] = useState(true); // State for loading
    const [isPlayerOpen, setIsPlayerOpen] = useState(false); // State for the modal
    const [selectedMovie, setSelectedMovie] = useState(null); // The movie to play
    const [viewMode, setViewMode] = useState("normal"); // State for toggling between views
    const [searchResults, setSearchResults] = useState([]); // Results for dropdown

    const fetchMovies = async () => {
        setLoading(true); // Start loading
        try {
            const response = await fetch("/api/movie");
            const data = await response.json();
            setAllMovies(data);
        } catch (error) {
            console.error("Failed to fetch movies:", error);
        } finally {
            setLoading(false); // End loading
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    // Filter movies based on the search term
    const filteredMovies = allMovies.filter((movie) => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const titleMatch = movie.title.toLowerCase().includes(lowerSearchTerm);
        const yearMatch = movie.year.toString().includes(lowerSearchTerm);
        const silentMatch =
            "silent".startsWith(lowerSearchTerm) && movie.silent;

        return titleMatch || yearMatch || silentMatch; // Match any condition
    });

    // Group movies by year
    const groupByYear = (movies) => {
        return movies.reduce((groups, movie) => {
            const year = movie.year; // Get the year
            if (!groups[year]) {
                groups[year] = [];
            }
            groups[year].push(movie);
            return groups;
        }, {});
    };

    const moviesByYear = groupByYear(filteredMovies);

    // Open modal with selected movie
    const handleCardClick = (movie) => {
        setSelectedMovie(movie);
        setIsPlayerOpen(true);
    };

    // Close modal
    const handleClosePlayer = () => {
        setSelectedMovie(null);
        setIsPlayerOpen(false);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term) {
            const results = allMovies.filter((movie) => {
                const lowerTerm = term.toLowerCase();
                return (
                    movie.title.toLowerCase().includes(lowerTerm) ||
                    movie.year.toString().includes(lowerTerm)
                );
            });

            setSearchResults(results);
            setViewMode("normal"); // Automatically switch to normal mode
        } else {
            setSearchResults([]);
        }
    };

    // Handle dropdown item click
    const handleDropdownSelect = (movie) => {
        setSearchTerm(movie.title); // Set the search term to the selected movie's title
        setSearchResults([]); // Clear the dropdown
    };

    return (
        <section className="p-4 flex flex-col items-center font-jost ">
            {/* Search bar and toggle button */}
            <SearchBarToggle
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange} // Pass handleSearchChange function
                viewMode={viewMode}
                setViewMode={setViewMode}
            />

            {/* Conditionally render content */}
            {loading ? (
                <div className="text-center text-gray-500 mt-16">
                    <h2 className="text-lg font-semibold text-white animate-pulse">
                        🎥 Loading movies...
                    </h2>
                    <p className="mt-2 text-sm text-white">
                        Grab some popcorn while we fetch the films! 🍿
                    </p>
                </div>
            ) : viewMode === "byYear" ? (
                <div className="w-full flex flex-col items-start">
                {Object.keys(moviesByYear)
                    .sort((a, b) => a - b)
                    .map((year) => (
                    <div key={year} className="w-full">
                        {/* Year Label */}
                        <div className="text-white font-bold text-xl mt-8 mb-4 border-b border-gray-500 pb-2">
                        {year}
                        </div>

                        {/* Movies for the Year */}
                        <div className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-2 sm:gap-5">
                        {moviesByYear[year].map((movie) => (
                            <div key={movie.id} className="flex-shrink-0">
                            <MovieCard movie={movie} onCardClick={handleCardClick} />
                            </div>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
            ) : (
                <div className='flex flex-wrap justify-center gap-2 sm:gap-5'>
                    {allMovies.map((movie, index) => (
                        <MovieCard key={movie.id} movie={movie} onCardClick={handleCardClick} />
                    ))}
                </div>
            )}

            {/* Modal */}
            <MovieModal
                isOpen={isPlayerOpen}
                movie={selectedMovie}
                onClose={handleClosePlayer}
            />
        </section>
    );
};

export default MovieSearch;

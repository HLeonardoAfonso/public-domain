"use client";

import { useState, useEffect } from "react";
import MovieCard from "./UI/MovieCard";

const MovieSearch = () => {
    const [allMovies, setAllMovies] = useState([]);     // State for fetch data
    const [searchTerm, setSearchTerm] = useState("");   // State for search input
    const [loading, setLoading] = useState(true);       // State for loading

    const fetchMovies = async () => {
        setLoading(true); // Start loading
        try {
            const response = await fetch("http://localhost:3000/api/movie");
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
    const filteredMovies = allMovies.filter(movie => {
        const lowerSearchTerm = searchTerm.toLowerCase();

        const titleMatch = movie.title.toLowerCase().includes(lowerSearchTerm);
        const yearMatch = movie.year.toString().includes(lowerSearchTerm);

        const silentMatch =
            "silent".startsWith(lowerSearchTerm) && movie.silent;

        return titleMatch || yearMatch || silentMatch; // Match any condition
    });

    return (
        <section className="p-4 flex flex-col items-center">
            
            {/* Search bar */}
            <input
                type="text"
                placeholder="Search movies by title, year, or silent..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                className="bg-transparent border border-white text-white h-7 md:w-[500px] w-[80%] rounded-full p-5 mb-5 focus:outline-none "
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
            ) : filteredMovies.length > 0 ? (
                <MovieCard data={filteredMovies} />
            ) : (
                <div className="text-center text-gray-500 mt-16">
                    <h2 className="text-lg font-semibold text-white">🎬 Whoops! No Matches Found</h2>
                </div>
            )}
        </section>
    );
};

export default MovieSearch;

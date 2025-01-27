"use client"
import { useState, useEffect } from "react";
import MovieCard from "./UI/MovieCard";

const MovieList = () => {
    const [allMovies, setAllMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await fetch("/api/movie");
        const data = await response.json();

        setAllMovies(data);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <section className=''>
            <MovieCard data={allMovies} />
        </section>
    );
};

export default MovieList;
"use client"
import { useState, useEffect } from "react";
import MovieCard from "./UI/MovieCard";

const MoveList = () => {
    const [allMovies, setAllMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await fetch("http://localhost:3000/api/movie");
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

export default MoveList;
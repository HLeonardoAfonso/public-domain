"use client";
import { useState, useEffect } from "react";
import MovieCard from "./UI/MovieCard";

const MostWatched = () => {
    const year = 1959;

    const [yearMovies, setYearMovies] = useState([]);

    const fetchYearMovies = async () => {
        const response = await fetch(`http://localhost:3000/api/year/${year}`);
        const data = await response.json();

        setYearMovies(data);
    };

    useEffect(() => {
        fetchYearMovies();
    }, []);

    
    return (
        <section className='px-20'>
            <h2 className="text-[28px] text-white font-jost pb-4 ">|| Most Watched ||</h2>
            <MovieCard data={yearMovies} />
        </section>
    )
}

export default MostWatched
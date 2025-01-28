"use client";
import { useState, useEffect } from "react";
import MovieCard from "./UI/MovieCard";

const NewIn = () => {

    const year = 1925;

    const [yearMovies, setYearMovies] = useState([]);

    const fetchYearMovies = async () => {
        const response = await fetch(`/api/year/${year}`);
        const data = await response.json();

        setYearMovies(data);
    };

    useEffect(() => {
        fetchYearMovies();
    }, []);

    
    return (
        <section className="py-3">
            <h2 className="text-[28px] text-white font-jost pb-4 ">|| New In Public Domain ||</h2>
            <MovieCard data={yearMovies} />
        </section>
    );
}

export default NewIn;
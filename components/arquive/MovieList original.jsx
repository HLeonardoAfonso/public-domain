"use client";

import { useState, useEffect } from "react";

const PromptCardList = ({ data }) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <>
                    <h1>{post._id}</h1>
                    <h1>{post.title}</h1>
                </>
            ))}
        </div>
    );
};

const MoveList = () => {
    const [allMovies, setAllMovies] = useState([]);

    // Search states

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

        {/* All Prompts */}
            <PromptCardList data={allMovies} />
        </section>
    );
};

export default MoveList;
"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Iframe from 'react-iframe'


const MovieCard = ({ data }) => {

    const router = useRouter()

    return (
        <div className='flex flex-col w-full '>
            <div className='flex flex-col'>
                {/* <img
                src={data.poster}
                alt={data.title}
                className=" h-72 aspect-auto"
            /> */}
            <div className="bg-slate-500 cursor-pointer text-xl text-white" onClick={() => router.back()}> «« Go Back</div>
            <h2 className="font-jost text-xl text-white ">
                {data.title}
            </h2>
            </div>
            
            <div className="w-full  flex justify-center ">
                <Iframe url=""
                    src={data.movie}
                    className="w-[90%] max-w-[1250px] aspect-video"
                    display="block"
                    position="relative"
                    
                    />
            </div>
        </div>
    );
};

const Canvas = () => {
    const [movieUrl, setMovieUrl] = useState({ });
    const params = useParams();
    console.log("params: ", params);

    const getUrl = async () => {
        const response = await fetch(`http://localhost:3000/api/movie/${params.id}`);
        const data = await response.json();
        console.log("page id");
        setMovieUrl(data);
    };

    useEffect(() => {
        getUrl();
    }, []);

    console.log("movieUrl: ", movieUrl);

    return (
        <section className=''>
            <MovieCard data={movieUrl} />
        </section>
    );
};

export default Canvas;
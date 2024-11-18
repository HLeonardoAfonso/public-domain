import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ data }) => {
    return (
        <div className='flex flex-wrap justify-center gap-5'>
            {data.map((movie) => (
                <Link href={`/movie/${movie._id}`} className="cursor-pointer" >

                    {/* poster */}
                    <img
                    src={movie.poster}
                    alt={movie.title}
                    className=" h-64 aspect-auto"
                    />
          
                    {/* lable */}
                    <div className="py-2 flex flex-col ">
                        <h2 className="font-jost text-lg text-white max-w-44  truncate">
                            {movie.title}
                        </h2>
                
                        <div className="flex justify-between ">
                            <p className=" font-jost text-base text-gray-400 ">
                                {movie.year} | {movie.minutes} min
                            </p>
                            {movie.silent &&
                                <Image
                                src="/silent.png"
                                width={23}
                                height={2}
                                alt="Silent Icon"
                            />
                            }
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieCard
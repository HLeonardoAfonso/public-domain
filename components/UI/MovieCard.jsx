import Image from "next/image";

const MovieCard = ({ data, onCardClick }) => {
    return (
        <div className='flex flex-wrap justify-center gap-5'>
            {data.map((movie, index) => (
                <div 
                    key={movie.id} // Add a unique key prop here
                    className="cursor-pointer" 
                    onClick={() => onCardClick(movie)} // Trigger modal on click
                >

                    {/* poster */}
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className=" h-64 aspect-auto"
                    />
          
                    {/* lable */}
                    <div className="py-2 flex flex-col ">
                        <h2 className="font-jost text-lg text-white max-w-44 truncate">
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
                </div>
            ))}
        </div>
    );
};

export default MovieCard
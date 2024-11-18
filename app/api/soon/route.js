import Sango from "@/models/soon";
import connectToMango from "@/utils/database";

export const GET = async () => {
    try {
        console.log("movie route")
        await connectToMango();
        const movieData = await Sango.find()
        
        console.log("movieData")
        return new Response(JSON.stringify(movieData), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch movies", { status: 500 })
    }
} 

import Mango from "@/models/movie";
import connectToMango from "@/utils/database";
import { NextResponse } from "next/server";

// export async function POST(request) {
//     const { title, minutes, year } = await request.json();
//     await connectToMango();
//     await Movie.create({ title, minutes, year });
//     return NextResponse.json({ message: "Movie Created" }, { status: 201 } );
// }

export const GET = async () => {
    try {
        console.log("movie route")
        await connectToMango();
        const movieData = await Mango.find()
        
        console.log("movieData")
        return new Response(JSON.stringify(movieData), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch movies", { status: 500 })
    }
} 

// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectToMango();
//     await Movie.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Movie Deleted"}, { status: 200 });
// }
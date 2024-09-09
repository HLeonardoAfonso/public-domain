import Mango from "@/models/movie";
import connectToMango from "@/utils/database";
import { NextResponse } from "next/server";

// export async function PUT(request, {params}) {
//     const { id } = params;
//     const { editTitle: title, editYear: year } = await request.json();
//     await connectToMango();
//     await Movie.findByIdAndUpdate(id, { title, year });
//     return NextResponse.json({ message: "Movie updated" }, { status: 200 });
// }

// export async function GET(request, { params }) {
//     const { id } = params;
//     await connectToMango();
//     const movie = await Mango.findOne({ _id: id });
//     return NextResponse.json({ movie }, { status: 200 });
// }


export const GET = async (request, { params }) => {
    try {
        await connectToMango()
        let id = params
        console.log("id: ", id);
        const url = await Mango.findById(id);
        if (!url) return new Response("Url Not Found", { status: 404 });
        console.log("url: ", url);
        
        return new Response(JSON.stringify(url), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}


// export const GET = async ( { params } ) => {
//     try {
//         await connectToMango();
//         const { id } = params;
//         const movieData = await Mango.find({ _id: id })
//         return new Response(JSON.stringify(movieData), { status: 200 })
//     } catch (error) {
//         return new Response("Failed to fetch movie by Id", { status: 500 })
//     }
// } 



// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectToMango();

//     await Movie.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Movie Deleted"}, { status: 200 });
// }
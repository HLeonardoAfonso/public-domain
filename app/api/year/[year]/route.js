import Mango from "@/models/movie";
import connectToMango from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToMango()
        let lastYear = params.year;

        const url = await Mango.find({ year: lastYear });
        if (!url) return new Response("Year Not Found", { status: 404 });
        
        return new Response(JSON.stringify(url), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

import FilterNav from "@/components/FilterNav";
import Genre from "@/components/Genre";
import MostWatched from "@/components/MostWatched";
import MoveList from "@/components/MovieList";
import NewIn from "@/components/NewIn";

export default function Home() {  
  return (
    <main className="p-16 flex flex-col gap-10">
      <FilterNav />
      <NewIn />
      <Genre />
      <MostWatched />
      <MoveList />
    </main>
  );
}

import { MovieCard, SearchBar } from "@/components";
import { MoviesResponse } from "@/types";
type HomePageProps = {
  searchParams: Promise<{
    term: string;
  }>;
};
export default async function page({ searchParams }: HomePageProps) {
  const searchTerm = await searchParams;
  const term = searchTerm.term ?? "";
  const MoviesRes = await fetch(
    `https://www.freetestapi.com/api/v1/movies?search=${term}`
  );
  const MoviesData: MoviesResponse = await MoviesRes.json();
  const movieCardElement = MoviesData.map((movie) => {
    return <MovieCard movie={movie} key={movie.id} />;
  });
  return (
    <main>
      <header className="mx-4">
        <SearchBar />
      </header>
      <section
        className=" mt-10 px-10 grid justify-items-center gap-9 gap-y-6
lg:grid-cols-[repeat(auto-fill,minmax(140px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] grid-cols-[repeat(auto-fill,minmax(150px,1fr))]"
      >
        {movieCardElement}
      </section>
    </main>
  );
}

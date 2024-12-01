import { MovieCard, RatingFilter, SearchBar } from "@/components";
import { MoviesResponse } from "@/types";

async function fetchMovies(term?: string) {
  try {
    const MoviesRes = await fetch(
      `https://www.freetestapi.com/api/v1/movies?search=${term}`
    );

    if (!MoviesRes.ok) {
      throw new Error("Failed to fetch movies");
    }

    const MoviesData: MoviesResponse = await MoviesRes.json();
    return MoviesData;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }
}

type HomePageProps = {
  searchParams: Promise<{
    term?: string;
    rating?: string;
  }>;
};
export default async function page({ searchParams }: HomePageProps) {
  const searchTerm = await searchParams;
  const term = searchTerm.term ?? "";
  const rating = searchTerm.rating ?? "";
  const MoviesData: MoviesResponse | undefined = await fetchMovies(term);
  const filteredMovies =
    rating && rating !== "all"
      ? MoviesData?.filter(
          (movie) => Math.floor(movie.rating) === Number(rating)
        )
      : MoviesData;
  const movieCardElement = filteredMovies?.map((movie) => {
    return <MovieCard movie={movie} key={movie.id} />;
  });
  return (
    <main>
      <header className="mx-4 mt-5 flex  items-center justify-between gap-4">
        <SearchBar />
        <RatingFilter />
      </header>
      <section
        className="mt-10 px-10 grid justify-items-center gap-9 gap-y-6
lg:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-cols-[repeat(auto-fill,minmax(220px,1fr))]"
      >
        {movieCardElement}
      </section>
    </main>
  );
}

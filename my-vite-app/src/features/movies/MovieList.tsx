import type { Movie } from "../../models/movie.model";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {movies.map((m) => (
        <MovieCard key={m.id} {...m} />
      ))}
    </div>
  ); 
}

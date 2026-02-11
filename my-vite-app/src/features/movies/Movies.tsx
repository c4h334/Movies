import { useEffect, useState } from "react";
import type { Movie } from "../../models/movie.model";
import MovieList from "./MovieList";
import { getMovies } from "../../service/movie.service";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070B16] text-white">
        Cargando...
      </div>
    )
  };

  return (
    <div className="min-h">
      <h1 className="text-3xl font-bold mb-6">🎬 Catálogo de Películas</h1>

      <MovieList movies={movies}/>
    </div>
  );
}

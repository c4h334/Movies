import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Movie } from "../../models/movie.model";
import { getMovieById } from "../../service/movie.service";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    getMovieById(id)
      .then((movie) => setMovie(movie))
      .catch(() => setMovie(null))
      .finally(() => setLoading(false));
  }, [id]);

  
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  
  if (!movie) {
    return <div className="text-center">Página no encontrada</div>;
  }

  
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Movie Details</h1>
      <h2 className="text-3xl font-bold whitespace-pre-line">
        {movie.title}
      </h2>
      <img src={movie.posterurl} alt={movie.title} className="w-64" />
      <p className="max-w-xl text-center">{movie.description}</p>
      <h2 className="text-xl font-bold text-white mb-2">⭐{movie.rating.toFixed(1)}</h2>
    </div>
  );
}

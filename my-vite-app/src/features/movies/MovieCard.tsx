import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";

export default function MovieCard({
  id,
  title,
  description,
  posterurl,
  rating,
}: Movie) {
  return (
    <Link
      to={`/movies/${id}`}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
    >
      <div className="p-5">
        <img
          src={posterurl}
          alt={title}
          className="w-full h-full object-cover rounded-md mb-4"
        />

        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>

        <p className="text-gray-400 text-sm mb-2">{description}</p>

        <h2 className="text-xl font-bold text-white mb-2">⭐{rating.toFixed(1)}</h2>
      </div>
    </Link>
  );
}

import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        🎬 Bienvenido a MovieApp
      </h1>

      <p className="text-gray-400 max-w-2xl text-lg">
        Explora nuestro catálogo de películas y descubre todos los detalles.
      </p>

      <div className="mt-8">
        <Link
          to="/movies"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          Ver Películas
        </Link>
      </div>
    </div>
  );
}

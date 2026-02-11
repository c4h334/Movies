import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="hover:text-blue-400 transition">
          <h1 className="text-xl font-bold">🎬 MovieApp</h1>
        </Link>

        <nav className="flex gap-6">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/movies" className="hover:text-blue-400 transition">
            Movies
          </Link>
        </nav>
      </div>
    </header>
  );
}

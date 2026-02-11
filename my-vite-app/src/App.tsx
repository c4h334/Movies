import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./shared/Footer";
import Header from "./shared/Header";
import { Home } from "./features/home/Home";
import NotFound from "./shared/NotFound";
import Movies from "./features/movies/Movies";
import "./App.css";
import MovieDetails from "./features/movies/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        
        <Header />

        <main className="flex-1 container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;

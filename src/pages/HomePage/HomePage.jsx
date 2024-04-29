import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import getTrendingMovies from "../../movies-api";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoviews() {
      const data = await getTrendingMovies();
      setMovies(data);
    }
    fetchMoviews();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

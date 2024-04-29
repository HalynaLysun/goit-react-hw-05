import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import getTrendingMovies from "../../movies-api";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMoviews() {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviews();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}

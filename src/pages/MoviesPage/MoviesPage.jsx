import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import getSearchMovie from "../../movie-search-api";
import { useEffect, useState } from "react";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  function handleSubmit(evt) {
    evt.preventDefault();

    const form = evt.target;
    const query = form.movie.value.trim();

    setQuery(query);

    form.reset();
  }

  useEffect(() => {
    async function fetchMovies() {
      const data = await getSearchMovie(query);
      setMovies(data.results);
    }
    fetchMovies();
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" />
        <button type="submit">Search</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
}

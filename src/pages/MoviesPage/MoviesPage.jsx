import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import getSearchMovie from "../../movie-search-api";
import { useEffect, useState } from "react";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
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
      console.log(query);
      console.log(data);
    }
    fetchMovies();
  }, [query]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="movie" />
      <button type="submit">Search</button>
    </form>
  );
}

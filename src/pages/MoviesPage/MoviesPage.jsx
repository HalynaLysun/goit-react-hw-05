import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import getSearchMovie from "../../movie-search-api";
import { useEffect, useState } from "react";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ErrorSearch from "../../components/ErrorSearch/ErrorSearch";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    setPage(1);
    setMovies([]);
    const form = evt.target;
    const query = form.movie.value.trim();

    setQuery(query);

    form.reset();
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        if (!query) {
          return;
        }
        setLoading(true);
        const data = await getSearchMovie(query, page);
        const newMovies = data.results;
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="movie" />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <MovieList movies={movies} />
      {loading && <Loader />}
      {movies.length === 0 && !loading && query && <ErrorSearch />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
}

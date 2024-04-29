import css from "./MovieCast.module.css";
import getCastMoviesById from "../../movie-cast-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCastMovie() {
      try {
        setLoading(true);
        const data = await getCastMoviesById(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCastMovie();
  }, [movieId]);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movieCast && (
        <ul className={css.list}>
          {movieCast.map((e) => (
            <li key={e.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${e.profile_path}`}
                alt={e.original_name}
              />
              <p>{e.name}</p>
              <p>Character: {e.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

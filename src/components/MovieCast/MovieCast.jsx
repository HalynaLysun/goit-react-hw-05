import css from "./MovieCast.module.css";
import getCastMoviesById from "../../movie-cast-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function fetchCastMovie() {
      const data = await getCastMoviesById(movieId);
      setMovieCast(data.cast);
      console.log(movieCast);
    }

    fetchCastMovie();
  }, [movieId]);
  return (
    <div>
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

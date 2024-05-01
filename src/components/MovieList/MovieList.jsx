import css from "./MovieList.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.item} key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={location}>
            <div>
              {movie.poster_path ? (
                <img
                  className={css.image}
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt="poster path"
                />
              ) : (
                <img
                  className={css.image}
                  src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                ></img>
              )}

              <p className={css.text}>{movie.original_title}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

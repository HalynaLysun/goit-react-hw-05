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
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt="poster path"
              />
              <p className={css.text}>{movie.original_title}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

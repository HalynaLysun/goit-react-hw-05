import css from "./MovieList.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation()
  
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={location}>{movie.original_title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

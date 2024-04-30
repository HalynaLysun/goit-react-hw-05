import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/movies">
          Movies
        </NavLink>
      </nav>
      <hr className={css.line} />
    </div>
  );
}

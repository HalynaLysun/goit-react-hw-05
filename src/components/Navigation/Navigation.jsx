import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      {/* <NavLink to="/movies/:movieId">Details</NavLink> */}
      {/* <NavLink to="/movies/:movieId/cast">Home</NavLink>
      <NavLink to="/movies/:movieId/reviews">Home</NavLink> */}
    </nav>
  );
}

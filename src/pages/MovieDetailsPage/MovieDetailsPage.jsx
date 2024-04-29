import css from "./MovieDetailsPage.module.css";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import getMoviesById from "../../movie-id-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setmovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieById() {
      const data = await getMoviesById(movieId);
      setmovieDetails(data);
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <div>
          <NavLink to="/movies">Go back</NavLink>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt="main characters"
          />
          <ul className={css.list}>
            <li>
              <h1>
                {movieDetails.original_title} ({movieDetails.release_date})
              </h1>
            </li>
            <li>
              <p>User Score: {movieDetails.vote_average.toFixed(1)}</p>
            </li>
            <li>
              <p>
                <b>Overview: </b>
                {movieDetails.overview}
              </p>
            </li>
            <li>
              <p>
                <b>Genres:</b>
                {movieDetails.genres.map((e) => (
                  <span key={e.id}>{e.name}</span>
                ))}
              </p>
            </li>
          </ul>

          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="review">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}

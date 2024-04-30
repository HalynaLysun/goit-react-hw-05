import css from "./MovieDetailsPage.module.css";
import { NavLink, useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import getMoviesById from "../../movie-id-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setmovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backMovieUrl = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setLoading(true);
        const data = await getMoviesById(movieId);
        setmovieDetails(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movieDetails && (
        <div>
          <NavLink to={backMovieUrl.current}>Go back</NavLink>
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
              <NavLink to="cast" /*state={location}*/>Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews" /*state={location}*/>Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}

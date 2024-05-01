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

      {movieDetails && (
        <div>
          <NavLink className={css.navLink} to={backMovieUrl.current}>
            Go back
          </NavLink>
          <div className={css.wrapper}>
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
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
                  <b>Genres: </b>
                  {movieDetails.genres.map((e) => (
                    <span key={e.id}>{e.name}</span>
                  ))}
                </p>
              </li>
            </ul>
          </div>

          <h2>Additional information</h2>
          <ul className={css.info}>
            <li>
              <NavLink className={css.link} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className={css.link} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
      {error && <ErrorMessage />}
    </div>
  );
}

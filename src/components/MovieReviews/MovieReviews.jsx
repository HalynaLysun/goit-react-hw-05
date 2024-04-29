import css from "./MovieReviews.module.css";
import getReviewsMoviesById from "../../movie-reviews-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviewsMovie() {
      try {
        setLoading(true);
        const data = await getReviewsMoviesById(movieId);
        setMovieReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchReviewsMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {movieReviews && movieReviews.length > 0 ? (
        <ul className={css.list}>
          {movieReviews.map((e) => (
            <li key={e.id}>
              <p>Author: {e.author}</p>
              <p>{e.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry. We don't have any reviews for this movie</p>
      )}
      {error && <ErrorMessage />}
    </div>
  );
}

import css from "./MovieReviews.module.css";
import getReviewsMoviesById from "../../movie-reviews-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  console.log(movieReviews);
  useEffect(() => {
    async function fetchReviewsMovie() {
      const data = await getReviewsMoviesById(movieId);
      setMovieReviews(data.reviews.results);
      console.log(data);
    }

    fetchReviewsMovie();
  }, [movieId]);

  return <div>{movieReviews && <div>Reviews</div>}</div>;
}

import css from "./MovieDetailsPage.module.css";
import { useParams, useEffect, useState } from "react";
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
  return <div>Details</div>;
}

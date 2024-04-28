import css from "./MovieCast.module.css";
import getCastMoviesById from "../../movie-cast-api";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setmovieCast] = useState(null);
  console.log(movieId);

  useEffect(() => {
    async function fetchCastMovie() {
      const data = await getCastMoviesById(movieId);
      setmovieCast(data);

      console.log(data);
    }

    fetchCastMovie();
  }, [movieId]);
  return <div>{movieCast && <div>Cast</div>}</div>;
}

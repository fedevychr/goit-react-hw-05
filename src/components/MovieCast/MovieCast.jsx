import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../service/movies";

import Loader from "../Loader/Loader";
import Heading from "../Heading/Heading";

import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCast = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const { data } = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {error && <Heading title={error} />}
      {cast && (
        <ul className={css.list}>
          {cast.map((cast) => (
            <li className={css.item} key={cast.cast_id}>
              <img
                src={
                  (cast.profile_path = `https://image.tmdb.org/t/p/w500${cast.profile_path}`)
                }
                alt={cast.name}
                width={100}
              />
              <h3>{cast.name}</h3>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;

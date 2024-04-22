import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../service/movies";

import Loader from "../Loader/Loader";
import Heading from "../Heading/Heading";

import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setIsLoading(true);
      try {
        const {
          data: { results },
        } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Heading title={error} />}
      {reviews && !reviews.length && <Heading title="No reviews" />}
      <ul className={css.list}>
        {reviews &&
          reviews.map((reviews, index) => (
            <li className={css.item} key={index}>
              <h3>Author: {reviews.author}</h3>
              <p>{reviews.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieReviews;

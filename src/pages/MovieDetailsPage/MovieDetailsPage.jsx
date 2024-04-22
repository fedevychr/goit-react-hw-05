import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { getMovie } from "../../service/movies";

import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

import css from "./MovieDetailsPage.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovie(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log("error: ", error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h1>Movie details: {movieId}</h1>
      {Array.isArray(movieDetails) && (
        <div>
          <img
            className={css.img}
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : defaultImg
            }
            alt={movieDetails.title}
            width={250}
          />
          <h2 className={css.title}>{movieDetails.title}</h2>
          <p className={css.score}>User Score: {movieDetails.vote_count}</p>
          <h3 className={css.subtitle}>Overview</h3>
          <p className={css.overview}>{movieDetails.overview}</p>
          <h3 className={css.subtitle}>Genres</h3>
          <ul className={css.genres}>
            {movieDetails.genres.map((movieDetails) => (
              <li className={css.genre} key={movieDetails.id}>
                {movieDetails.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Routes>
        <Route path="cast" element={<MovieCast />}></Route>
        <Route path="reviews" element={<MovieReviews />}></Route>
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;

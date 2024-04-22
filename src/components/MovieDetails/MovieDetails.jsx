import css from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={
            (movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`)
          }
          alt={movie.title}
          width={250}
        />
      </div>
      <div className={css.contentWrapper}>
        <h2 className={css.title}>{movie.title}</h2>
        <p className={css.score}>User Score: {movie.vote_count}</p>
        <h3 className={css.subtitle}>Overview</h3>
        <p className={css.overview}>{movie.overview}</p>
        <h3 className={css.subtitle}>Genres</h3>
        <ul className={css.genres}>
          {movie.genres.map(({ id, name }) => (
            <li className={css.genre} key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;

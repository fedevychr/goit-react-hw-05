import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map((movies) => (
        <li className={css.listItem} key={movies.id}>
          <Link
            state={location}
            className={css.listLink}
            to={`/movies/${movies.id}`}
          >
            {movies.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

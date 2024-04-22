import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <h2>Title: {movie.title}</h2>
                <Link to={`/movies/${movie.id}`}>Link</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;

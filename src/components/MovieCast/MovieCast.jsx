import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();

  return <div>MovieCast: {movieId}</div>;
};

export default MovieCast;

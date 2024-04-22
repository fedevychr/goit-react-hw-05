import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();

  return <div>MovieReviews: {movieId}</div>;
};

export default MovieReviews;

import { Link, useLocation } from 'react-router-dom';
import MoviesItem from 'components/MoviesItem/MoviesItem';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.results.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            <MoviesItem url={poster_path} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

import apiTheMovieDB from 'Api/Api';
import Genres from 'components/Genres/Genres';
import React, { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

function MoviesDatailesPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [locationFrom] = useState(location?.state?.from ?? '/');

  useEffect(() => {
    apiTheMovieDB
      .fetchDetailsMovie(movieId)
      .then(setMovie)
      .catch(err => {
        setError(err);
        return console.log(error);
      });
  }, [error, movieId]);

  return (
    <>
      <Link to={locationFrom}>Go back</Link>
      {movie && (
        <section>
          <div>
            <img
              src={`${apiTheMovieDB.BASE_URL_IMAGE()}${movie.poster_path}`}
              alt={`poster for the movie ${movie.title}`}
            />
          </div>

          <>{movie.title}</>
          <div>
            <p>Popularity:</p>
            <p>{movie.popularity}</p>
          </div>

          <div>
            <p>Overview</p>
            <p>{movie.overview}</p>
          </div>
          <p>Genres</p>

          <Genres data={movie.genres} />
          <li>Additional information </li>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="review">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </section>
      )}
    </>
  );
}

export default MoviesDatailesPage;

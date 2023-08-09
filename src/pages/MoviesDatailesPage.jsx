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
  console.log(movie);
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
        <section
          style={{
            display: 'flex',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div style={{ padding_left: '10px' }}>
                <img
                  src={movie.poster_path?`${apiTheMovieDB.BASE_URL_IMAGE()}${movie.poster_path}`:`https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`}
                  alt={`poster for the movie ${movie.title}`}
                />
              </div>
              <div>
                <h2>{movie.title}</h2>
                <div>
                  <p>User score:</p>
                  <p>{movie.popularity}%</p>
                </div>

                <div>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                </div>

                <h3>Genres</h3>
                <Genres data={movie.genres} />
              </div>
            </div>
            <div style={{ border: '1px solid' }}>
              <div>Additional information </div>
              <ul>
                <li>
                  <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                  <NavLink to="review">Reviews</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <Outlet />
        </section>
      )}
    </>
  );
}

export default MoviesDatailesPage;

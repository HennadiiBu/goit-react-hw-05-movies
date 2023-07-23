import apiTheMovieDB from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    apiTheMovieDB
      .fetchCreditsMovie(movieId)
      .then(setMovie)
      .catch(err => {
        setError(err);
        return console.log(error);
      });
  }, [error, movieId]);

  return (
    <>
      {movie && (
        <>
          <h3>Cast:</h3>
          <ul>
            {movie.cast.map(actor => (
              <li key={actor.id}>
                <div>
                  <img
                    src={`${apiTheMovieDB.BASE_URL_IMAGE()}${
                      actor.profile_path
                    }`}
                    alt={`actor ${actor.original_name}`}
                  />
                  <h3>{actor.original_name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default Cast;

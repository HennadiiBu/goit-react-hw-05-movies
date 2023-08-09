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
      {movie ? (
        <>
          <h3>Cast:</h3>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              listStyle: 'none',
            }}
          >
            {movie.cast.map(actor => (
              <li key={actor.id}>
                <div>
                  <img
                    src={
                      actor.profile_path
                        ? `${apiTheMovieDB.BASE_URL_IMAGE()}${
                            actor.profile_path
                          }`
                        : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`
                    }
                    alt={`actor ${actor.original_name}`}
                    style={{
                      width: '200px',
                      height:'300px',
                      objectFit:'contain'
                    }}
                  />
                  <h3>{actor.original_name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Actors list not found</p>
      )}
    </>
  );
}

export default Cast;

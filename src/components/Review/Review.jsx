import apiTheMovieDB from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Review() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiTheMovieDB
      .fetchReviewsMovie(movieId)
      .then(setReviews)
      .catch(err => {
        setError(err);
        return console.log(error);
      });
  }, [error, movieId]);
  return (
    <>
      {reviews[0] ? (
        <>
          <h3>Reviews:</h3>
          <ul>
            {reviews.map((el, i) => (
              <li key={i}>
                <h4>{`Author: ${el.author}`}</h4>
                <p>{el.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h3>Reviews:</h3>
          <p>We don't have any reviews for this movie</p>
        </>
      )}
    </>
  );
}

export default Review;

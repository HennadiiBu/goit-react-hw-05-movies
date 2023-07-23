import { Route, Routes } from 'react-router-dom';
import Layuot from './Layuot';
import Tranding from 'pages/Tranding';
import MoviesPage from 'pages/MoviesPage';
import Review from './Review/Review';
import Cast from './Cast/Cast';
import { useEffect, useState } from 'react';
import apiTheMovieDB from '../Api/Api';

export const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiTheMovieDB
      .fetchTrendingDayMovie()
      .then(data => setData(data.results))
      .catch(setError);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layuot />}>
        <Route index element={<Tranding data={data} />} />
        <Route path="movies" element={<MoviesPage />}>
          <Route path="review" element={<Review />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
    </Routes>
  );
};

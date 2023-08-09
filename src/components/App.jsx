import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layuot = lazy(() => import('./Layuot'));
const Tranding = lazy(() => import('pages/Tranding'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const Review = lazy(() => import('./Review/Review'));
const Cast = lazy(() => import('./Cast/Cast'));
const MoviesDatailesPage = lazy(() => import('../pages/MoviesDatailesPage'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<Tranding />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MoviesDatailesPage />}>
            <Route path="review" element={<Review />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

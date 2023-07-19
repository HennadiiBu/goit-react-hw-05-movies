import { Route, Routes } from 'react-router-dom';
import Layuot from './Layuot';
import Tranding from './Tranding/Tranding';
import MoviesPage from 'pages/MoviesPage';
import Review from './Review/Review';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layuot />}>
        <Route index element={<Tranding />} />
        <Route path="movies" element={<MoviesPage />}>
          <Route path="review" element={<Review />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
    </Routes>
  );
};

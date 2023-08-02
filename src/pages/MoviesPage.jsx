import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import apiTheMovieDB from 'Api/Api';

const MoviesPage = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query1 = searchParams.get('query');

  useEffect(() => {
    setQuery(query1);
  }, [query1]);

  useEffect(() => {
    query &&
      apiTheMovieDB
        .fetchSearchQueryMovie(query)
        .then(setMovies)
        .catch(err => {
          setError(err);
          return console.log(error);
        });
  }, [error, query]);

  const handleFormSubmit = query => {
    setMovies(null);
    console.log(query);
    navigate({
      search: `query=${query}`,
    });
  };

  return (
    <section>
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        {movies && <MoviesList movies={movies} />}
        {movies?.length === 0 && (
          <p>
            Oops! We couldn’t find anything =/. Change your request, please!
          </p>
        )}
      </>
    </section>
  );
};

export default MoviesPage;

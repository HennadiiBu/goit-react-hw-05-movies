import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import apiTheMovieDB from 'Api/Api';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    setQuery(searchQuery);
    query &&
      apiTheMovieDB
        .fetchSearchQueryMovie(query)
        .then(setMovies)
        .catch(err => {
          setError(err);
          return console.log(error);
        });
  }, [searchQuery, error, query]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
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

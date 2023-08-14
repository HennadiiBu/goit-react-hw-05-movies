import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import apiTheMovieDB from 'Api/Api';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;
    apiTheMovieDB
      .fetchSearchQueryMovie(searchQuery)
      .then(setMovies)
      .catch(err => {
        console.log(err);
      });
  }, [searchQuery]);

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

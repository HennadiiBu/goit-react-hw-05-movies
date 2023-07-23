import apiTheMovieDB from 'Api/Api';

const MoviesItem = ({ url, title }) => {
  return (
    <>
      <div>
        <img src={`${apiTheMovieDB.BASE_URL_IMAGE()}${url}`} alt={title} />
      </div>
      <h3>{title}</h3>
    </>
  );
};

export default MoviesItem;

import apiTheMovieDB from 'Api/Api';

const MoviesItem = ({ url, title }) => {
  return (
    <>
      <div>
        <img
          src={
            url
              ? `${apiTheMovieDB.BASE_URL_IMAGE()}${url}`
              : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`
          }
          alt={title}
          style={{
            width: '500px'
          }}
        />
      </div>
      <h3>{title}</h3>
    </>
  );
};

export default MoviesItem;

import React from 'react';

function Genres({ data }) {
  return (
    <>
      {data &&
        data.map(elem => (
          <span key={elem.id} style={{ marginRight: '10px' }}>
            {elem.name}
          </span>
        ))}
    </>
  );
}

export default Genres;

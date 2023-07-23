import React from 'react';

function TrandingList({ data }) {
  return (
    <ul>
      {data.map(elem => (
        <li key={elem.id}>{elem.title}</li>
      ))}
    </ul>
  );
}

export default TrandingList;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function TrandingList({ data }) {
    const location = useLocation();
  return (
    <ul>
      {data.map(elem => (
        <li key={elem.id}>
            <Link to={{ pathname: `/movies/${elem.id}`, state: { from: location } }}>{elem.title}</Link></li>
      ))}
    </ul>
  );
}

export default TrandingList;

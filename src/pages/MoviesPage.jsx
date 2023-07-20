import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function MoviesPage() {
  return (
    <div>
      <ul>
        <li>IMG</li>
        <ul>
          <li>Film Name</li>
          <li>User Score</li>
          <li>Overview</li>
          <li>Genres</li>
        </ul>
        <li>Additional information </li>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="review">Reviews</NavLink>
          </li>
        </ul>
      </ul>
      <Outlet/>
    </div>
  );
}

export default MoviesPage;

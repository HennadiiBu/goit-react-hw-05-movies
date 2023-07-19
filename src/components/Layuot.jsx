import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layuot() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}

export default Layuot;

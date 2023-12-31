import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layuot() {
  return (
    <div style={{}}>
      <ul
        style={{
          display: 'flex',
          gap: '30px',
          listStyle: 'none',
          border: '1px solid',
          height: '50px',
          alignItems: 'center',
          boxShadow: '5px 1px 1px black',
          borderRadius: '2px',
          boxSizing: 'border-box',
        }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layuot;

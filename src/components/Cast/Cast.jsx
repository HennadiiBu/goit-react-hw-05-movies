import React from 'react';
import { Link } from 'react-router-dom';

function Cast() {
  return (
    <div>
      {['hero - 1', 'hero - 2', 'hero - 3', 'hero - 4', 'hero - 5'].map(hero => {
        return (
          <ul>
            <li key={hero}>
                <Link to={`${hero}`}>IMG {hero} Character</Link></li>
          </ul>
        );
      })}
    </div>
  );
}

export default Cast;

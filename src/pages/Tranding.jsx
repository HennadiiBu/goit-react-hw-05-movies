import TrandingList from 'components/TrandingList/TrandingList';
import React, { useEffect, useState } from 'react';
import apiTheMovieDB from '../Api/Api'


function Tranding() {

  const [data, setData] = useState(null);
  const [setError] = useState(null);

  useEffect(() => {
    apiTheMovieDB
      .fetchTrendingDayMovie()
      .then(data => setData(data.results))
      .catch(setError);
  }, [setError]);


  return (
    <div>
      <h1>Tranding today</h1>
      {data && <TrandingList data={data} />}
    </div>
  );
}

export default Tranding;

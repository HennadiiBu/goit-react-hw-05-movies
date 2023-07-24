import TrandingList from 'components/TrandingList/TrandingList';
import React from 'react';

function Tranding({ data }) {
  return (
    <div>
      <h1>Tranding today</h1>
      {data && <TrandingList data={data} />}
    </div>
  );
}

export default Tranding;

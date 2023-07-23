import { useState } from 'react';

import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      toast.error('Please, enter your request!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="queryToSearch"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter the query to find the film"
        onChange={handleQueryChange}
        value={query}
      />
      <button type="submit">Find</button>
    </form>
  );
};

export default Searchbar;

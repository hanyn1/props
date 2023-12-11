import React, { useState } from 'react';


import 'bootstrap/dist/css/bootstrap.css';

export default function Search({ films, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Ensure that films is not undefined before attempting to filter
        if (films) {
          const filteredFilms = films.filter(film =>
            film.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          onSearch(filteredFilms);
        }
      };

  return (
    <div>
      <input
        style={{position:"absolute", top:"20px"}}
        type="text"
        placeholder="Search films by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}  style={{position:"absolute",right:"490px", top:"20px"}}>Search</button>
    </div>
  );
}

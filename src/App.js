// App.jsx
import React, { useState } from 'react';
import Films from './components/Films';
import Add from './components/Add';
import './App.css';
import Data from './DataBase/Data';

const App = () => {
  // Initialize state with dummy data
  const [films, setFilms] = useState(Data);

  // Function to add a new film
  const handleAddFilm = (newFilm) => {
    // Create a new film object by spreading existing properties and adding a unique identifier
    const updatedFilms = [...films, { ...newFilm, id: films.length + 1 }];

    // Update the films state
    setFilms(updatedFilms);
  };

  return (
    <div className="App">
      <Films films={films} />
      <Add onAddFilm={handleAddFilm} />
    </div>
  );
};

export default App;

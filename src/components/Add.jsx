
import React, { useState } from 'react';

const Add = ({ onAddFilm }) => {
  const [newFilm, setNewFilm] = useState({
    name: '',
    description: '',
    type: '', 
  });

  const handleAddFilm = () => {
    
    if (newFilm.name.trim() === '' || newFilm.type.trim() === '' || newFilm.image.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

   
    onAddFilm(newFilm);

   
    setNewFilm({
      name: '',
      type: '',
      image: '',
    });
  };

  return (
    <div>
      <h2>Add Film</h2>
      <form>
        <label>Title:</label>
        <input
          type="text"
          value={newFilm.name}
          onChange={(e) => setNewFilm({ ...newFilm, name: e.target.value })}
        />
        <br />
        <label>Description:</label>
        <textarea
          value={newFilm.type}
          onChange={(e) => setNewFilm({ ...newFilm, type: e.target.value })}
        ></textarea>
        <br />
        <label>Image URL:</label>
        <input
          type="text"
          value={newFilm.image}
          onChange={(e) => setNewFilm({ ...newFilm, image: e.target.value })}
        />
        <br />
        <button type="button" onClick={handleAddFilm}>
          Add Film
        </button>
      </form>
    </div>
  );
};

export default Add;

import React, { useState } from 'react';
import './add.css'
import Swal from 'sweetalert2';

const Add = ({ onAddFilm }) => {
  const [newFilm, setNewFilm] = useState({
    name: '',
    type: '',
    image: '',
    date:''
  });

  const handleAddFilm = () => {
    if (newFilm.name.trim() === '' || newFilm.type.trim() === '' || newFilm.image.trim() === '' || newFilm.date.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
      });
      return;
    }

    onAddFilm(newFilm);

    setNewFilm({
      name: '',
      type: '',
      image: '',
      date:''
    });

    Swal.fire({
      icon: 'success',
      title: 'Film Added!',
      showConfirmButton: false,
      timer: 1500, // Automatically close after 1.5 seconds
    })
  };

  return (
    <div>
      <h2>Add Film</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newFilm.name}
            onChange={(e) => setNewFilm({ ...newFilm, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputType" className="form-label">
            Type
          </label>
          <input
            type="text"
            id="inputType"
            className="form-control"
            aria-describedby="typeHelpBlock"
            value={newFilm.type}
            onChange={(e) => setNewFilm({ ...newFilm, type: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Date
          </label>
          <input
            type="text"
            id="inputDate"
            className="form-control"
            aria-describedby="dateHelpBlock"
            value={newFilm.date}
            onChange={(e) => setNewFilm({ ...newFilm, date: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputImage" className="form-label">
            Image
          </label>
          <input
            type="text"
            id="inputImage"
            className="form-control"
            aria-describedby="imageHelpBlock"
            value={newFilm.image}
            onChange={(e) => setNewFilm({ ...newFilm, image: e.target.value })}
          />
        </div>

        <button className="btn btn-primary" type="button" onClick={handleAddFilm}>
          Add Film
        </button>
      </form>
    </div>
  );
};

export default Add;


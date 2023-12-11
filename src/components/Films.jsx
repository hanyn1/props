
import React from 'react';
import FilmList from './FilmList';
import './films.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Films({ films }) {
  
  return (
    <div>
      <h1 style={{color:'red'}}>THE BEST FILM LIST </h1>
      <div className="row">
        {films.map((film) => (
          <div className="col-sm-6 mb-3 mb-sm-0" key={film.id}>
            <div className="card">
              <div className="card-body">
                <img className="card-image" src={film.image} alt={film.name} />
                <h5 className="card-title">{film.name}</h5>
                <p className="card-text">{film.des}</p>
                <p className="card-text">{film.date}</p>
                <p className="card-text">{film.type}</p>
              </div>
            </div>
            <FilmList filmName={film.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

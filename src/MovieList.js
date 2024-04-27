import React from 'react';

function MovieList({ movies, onMovieClick }) {
  return (
    <>
    <div className="container text-center">
      <div className="movie-list row">
        
        {movies.map(movie => (
          <div key={movie.id} className="movie col-lg-3 col-md-6 col-12" onClick={() => onMovieClick(movie.id)}>
            <div className='movie-item'>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}  className='img-fluid'/>
            <h3>{movie.title}</h3>
          </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default MovieList;
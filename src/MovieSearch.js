import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MovieList from './MovieList';
import './App.css';

function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  const searchMovies = async (keyword) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=702d025318f2c7cec1b8d28ee3cfa127&query=${keyword}`);
    const data = await response.json();
    setMovies(data.results);
  };

  const handleMovieClick = (id) => {
    history.push(`/movie/${id}`);
  };

  return (
    <div className='movie-section'>
      <div className='mov-bg-overly'></div>
    <div className='movie-search'> 
      <h1>Movie Search</h1>
      <input type="text" placeholder="Search for movies" onChange={(e) => searchMovies(e.target.value)} />
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
    </div>
    </div>
  );
}

export default MovieSearch;
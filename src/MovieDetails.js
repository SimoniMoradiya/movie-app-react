import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=702d025318f2c7cec1b8d28ee3cfa127`);
      const data = await response.json();
      setMovie(data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container movie-details-sec'>
      <div>
      <div className='mov-bg-overly'></div>
      <div className='row movie-details'>
        <div className='col-6 movie-details-col-1'>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className='img-fluid'/>
        </div>
        <div className='col-6 movie-details-col-2'>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </div>  
      </div>
      
            
        
    </div>
  );
}

export default MovieDetails;
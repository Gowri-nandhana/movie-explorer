import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './GenreMovie.css'

const GenreMovies = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f34b861ace7ab6ee58464120939399bf&with_genres=${id}`
      )
      .then((result) => {
        setMovies(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="genre-movies">
    {movies.map((movie) => (
      <div key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
        />
        <h1>{movie.original_title}</h1>
      </div>
    ))}
  </div>
  
  );
};

export default GenreMovies;

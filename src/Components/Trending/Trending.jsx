import React, { useEffect, useState } from "react";
import "./Trending.css";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f34b861ace7ab6ee58464120939399bf&page=1`
      )
      .then((result) => {
        setMovies(result.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="trending-container">
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
           
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />

            <h1>{movie.title}</h1>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;

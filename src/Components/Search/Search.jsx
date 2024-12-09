import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

function Search() {
  const [data, setData] = useState([]); 

  function getMovies(event) {
    const query = event.target.value;
    if (!query) {
      setData([]); 
      return;
    }

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          params: {
            language: "en-US",
          },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzRiODYxYWNlN2FiNmVlNTg0NjQxMjA5MzkzOTliZiIsIm5iZiI6MTczMDI3NTQ1OC4zNTA5NTkzLCJzdWIiOiI2NzIxZTc5NDE4MGIwYTVhYjkwYzE3NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HXYGg8axRSCubn5Yn_z4P9E-1wmyqC6sbohLROddzXI",
          },
        }
      )
      .then((result) => {
        setData(result.data.results.slice(0, 5)); 
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleSelection() {
    setData([]); 
  }

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search your favorite shows here..."
        onChange={getMovies}
      />
      
        <div className="search">
          {data.map((obj) => (
            <Link
              to={`/movie/${obj.id}`}
              key={obj.id}
              onClick={handleSelection} 
            >
              <div className="search-img">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                  alt={obj.title}
                />
                <h1>{obj.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      
    </div>
  );
}

export default Search;

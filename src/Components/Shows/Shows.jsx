import axios from "axios";
import React, { useEffect, useState } from "react";
import './Shows.css'

function Shows() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/tv/day", {
        params: {
          language: "en-US",
        },
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzRiODYxYWNlN2FiNmVlNTg0NjQxMjA5MzkzOTliZiIsIm5iZiI6MTczMDI3NTQ1OC4zNTA5NTkzLCJzdWIiOiI2NzIxZTc5NDE4MGIwYTVhYjkwYzE3NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HXYGg8axRSCubn5Yn_z4P9E-1wmyqC6sbohLROddzXI",
        },
      })
      .then((result) => {
        setData(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="show-container">
      {data.map((item) => (
        <div key={item.id} className="show-item">
        <img
        
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.name || item.original_name}
        />
        <h1>{item.original_name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Shows;

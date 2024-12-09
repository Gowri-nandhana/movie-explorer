import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Movies() {
  const [data, setData] = useState([]);
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/all/day", {
        params: {
          language: "en-US",
        },
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzRiODYxYWNlN2FiNmVlNTg0NjQxMjA5MzkzOTliZiIsIm5iZiI6MTczMDI3NTQ1OC4zNTA5NTkzLCJzdWIiOiI2NzIxZTc5NDE4MGIwYTVhYjkwYzE3NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HXYGg8axRSCubn5Yn_z4P9E-1wmyqC6sbohLROddzXI",
        },
      })
      .then((result) => {
        console.log(result);
        setData(result.data.results);

        if (result.data.results.length > 0) {
          setBanner(result.data.results[0]);
        }
      })
      .catch((err) => {
        console.log(err);

        setData("error");
      });
  }, []);

  if (data.length == 0) {
    return <h1>loading</h1>;
  }

  if (data == "error") {
    return <h1>no data avaiblble</h1>;
  }

  return (
    <>
      {/* Banner Section */}
      {banner && (
        <div
          className="banner"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${banner.backdrop_path})`,
          }}
        >
          <div className="banner-content">
            <h1 className="banner-title">
              {banner.title || banner.name || "Featured Movie"}
            </h1>
            <p className="banner-overview">
              {banner.overview || "No description available."}
            </p>
            <Link to={`/movie/${banner.id}`} className="banner-button">
              Learn More
            </Link>
          </div>
        </div>
      )}

      <div className="movie-section">
        <div className="movies-container">
          {data.map((obj) => (
            <div key={obj.id}>
              <Link to={`/movie/${obj.id}`} className="movie-link">
                <div className="movie-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                    alt=""
                  />
                  <h1>{obj.title || obj.name || "No Title"}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;

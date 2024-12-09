import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import axios from "axios";

const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f34b861ace7ab6ee58464120939399bf&language=en-US`
      )
      .then((result) => {
        setGenres(result.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleGenreSelect = (event) => {
    const genreId = event.target.value;
    if (genreId) {
      navigate(`/genre/${genreId}`);
    }
    setMenuOpen(false); // Close menu after selecting a genre
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Moviebliss</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/popular" onClick={() => setMenuOpen(false)}>
              Popular
            </Link>
          </li>
          <li>
            <Link to="/Tvshows" onClick={() => setMenuOpen(false)}>
              TV Shows
            </Link>
          </li>
          <li className="dropdown">
            <select onChange={handleGenreSelect} defaultValue="">
              <option value="" disabled>
                 Genre
              </option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </li>
        </ul>

        <div className="search-container">
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Trending from "./Components/Trending/Trending";
import GenreMovies from "./Components/Genre/GenreMovie";
import Shows from "./Components/Shows/Shows";
import Error from "./Components/Error/Error";
import Trailer from "./Components/Trailer/Trailer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails/>}/>
          <Route path="/popular" element={<Trending/>}/>
          <Route path="/genre/:id" element={<GenreMovies/>}/>
          <Route path="/Tvshows" element={<Shows/>}/>
          <Route path="/movie/:id/trailer" element={<Trailer/>}/>
          
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

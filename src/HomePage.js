import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { trendingMoviesApi } from "./services/movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    trendingMoviesApi().then((result) => setMovies(result));
    return;
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={{ pathname: `/movie/${movie.id}` }}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;

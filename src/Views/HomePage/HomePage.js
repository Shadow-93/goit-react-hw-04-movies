import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { trendingMoviesApi } from "../../services/movies-api";

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

// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

// import { fetchRated } from "../../services/apiService";

// import s from "./HomePage.module.css";
// import MovieCard from "../../components/MovieCard/MovieCard";

// class HomePage extends Component {
//   state = {
//     movies: [],
//   };

//   componentDidMount() {
//     fetchRated().then((result) => {
//       this.setState({ movies: result });
//     });
//   }

//   render() {
//     const { movies } = this.state;
//     const { match, location } = this.props;
//     return (
//       <>
//         {movies.length > 0 && (
//           <div className={s.homepage}>
//             <h2 className={s.heading}>Trending today</h2>
//             <ul className={s.list}>
//               {movies.map((movie) => (
//                 <li key={movie.id} className={s.item}>
//                   <NavLink
//                     className={s.link}
//                     to={{
//                       pathname: `${match.url}movies/${movie.id}`,
//                       state: { from: location },
//                     }}
//                   >
//                     <MovieCard {...movie} />
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </>
//     );
//   }
// }

// export default HomePage;

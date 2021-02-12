import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Searchform from "../../components/Searchform/Searchform";
import { searchMoviesApi } from "../../services/movies-api";

import s from "./MoviesPage.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const MoviesPage = (location, match, history) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(location.search);

  console.log(location);
  console.log(query);

  //   componentDidMount() {
  //     const query = this.props.location.search;
  //     if (query) {
  //       this.fetchMovies(query);
  //     }
  //   }

  //   componentDidUpdate({ location: { search } }, prevState) {
  //     const prevQuery = search;
  //     const nextQuery = this.props.location.search;

  //     if (prevQuery !== nextQuery) {
  //       this.fetchMovies(nextQuery);
  //     }
  //   }

  useEffect(() => {
    if (query) {
      fetchMovies(query);
      return;
    }
  });

  // useEffect(() => {
  //   if (query !== location.search) {
  //     fetchMovies(setQuery(location.search));
  //   }
  // });

  // useEffect(() => {
  //   const prevQuery = search;
  //   const nextQuery = this.props.location.search;

  //   if (prevQuery !== nextQuery) {
  //     fetchMovies(nextQuery);
  //   }
  // });

  const fetchMovies = (query) => {
    if (query) {
      searchMoviesApi(query).then((films) => setMovies({ movies: films }));
    }
  };

  const handleChangeQuery = (query) => {
    if (query.length > 0) {
      history.push({
        ...location,
        search: `query=${query}`,
      });
    }
  };

  return (
    <div className={s.movies}>
      <Searchform onSubmit={handleChangeQuery} />
      {movies.length > 0 && (
        <>
          <p className={s.results}> Results for: {location.search.slice(7)}</p>
          <ul className={s.list}>
            {movies.map((movie) => (
              <li key={movie.id} className={s.item}>
                <NavLink
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: location },
                  }}
                  className={s.link}
                  activeClassName={s.link_active}
                >
                  <MovieCard {...movie} />
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MoviesPage;

// class MoviesPage extends Component {
//   state = {
//     movies: [],
//   };

//   componentDidMount() {
//     const query = this.props.location.search;
//     if (query) {
//       this.fetchMovies(query);
//     }
//   }

//   componentDidUpdate({ location: { search } }, prevState) {
//     const prevQuery = search;
//     const nextQuery = this.props.location.search;

//     if (prevQuery !== nextQuery) {
//       this.fetchMovies(nextQuery);
//     }
//   }

//   fetchMovies = (query) => {
//     if (query) {
//       searchMoviesApi(query).then((films) => this.setState({ movies: films }));
//     }
//   };

//   handleChangeQuery = (query) => {
//     const { history, location } = this.props;
//     if (query.length > 0) {
//       history.push({
//         ...location,
//         search: `query=${query}`,
//       });
//     }
//   };

//   render() {
//     const { movies } = this.state;
//     const { match, location } = this.props;
//     return (
//       <div className={s.movies}>
//         <Searchform onSubmit={this.handleChangeQuery} />
//         {movies.length > 0 && (
//           <>
//             <p className={s.results}>
//               {" "}
//               Results for: {location.search.slice(7)}
//             </p>
//             <ul className={s.list}>
//               {movies.map((movie) => (
//                 <li key={movie.id} className={s.item}>
//                   <NavLink
//                     to={{
//                       pathname: `${match.url}/${movie.id}`,
//                       state: { from: location },
//                     }}
//                     className={s.link}
//                     activeClassName={s.link_active}
//                   >
//                     <MovieCard {...movie} />
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </>
//         )}
//       </div>
//     );
//   }
// }

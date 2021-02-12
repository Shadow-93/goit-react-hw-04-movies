import React, { useState, useEffect } from "react";

import Cast from "./Cast";
import { movieId } from "../../services/movies-api";

const Casts = () => {
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    fetchCasts();
  });

  const fetchCasts = () => {
    movieId("credits").then(({ cast }) => setCasts({ casts: cast }));
  };

  return <>{casts && <Cast casts={casts} />}</>;
};

export default Casts;

// class Casts extends Component {

//   state = { casts: null };

//   componentDidMount() {
//     this.fetchCasts();
//   }

//   fetchCasts = () => {
//     movieId(this.props.movieId, "credits").then(({ cast }) =>
//       this.setState({ casts: cast })
//     );
//   };

//   render() {
//     const { casts } = this.state;
//     return <>{casts && <Cast casts={casts} />}</>;
//   }
// }

import React, { Suspense, lazy, Component } from "react";
import { Switch, Route } from "react-router-dom";

import Pagenav from "./components/Pagenav/Pagenav";
import routes from "./routes";

const HomePage = lazy(() =>
  import("./Views/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import("./Views/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./Views/MovieDetailsPage/MoviesDetailsPage" /* webpackChunkName: "movies-details-page" */
  )
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pagenav />

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;

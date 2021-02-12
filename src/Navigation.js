import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>
    <NavLink
      exact
      to="/movies"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Movies
    </NavLink>
    {/* <NavLink
      exact
      to="/movies/:movieId"
      className={s.link}
      activeClassName={s.activeLink}
    >
      MovieDetailsPage
    </NavLink>
    <NavLink
      to="/movies/:movieId/cast"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Cast
    </NavLink>
    <NavLink
      to="/movies/:movieId/reviews"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Reviews
    </NavLink> */}
  </nav>
);

export default Navigation;

import React from "react";
import Navigation from "../Navigation/Navigation";

import s from "./Pagenav.module.css";

const Pagenav = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};

export default Pagenav;

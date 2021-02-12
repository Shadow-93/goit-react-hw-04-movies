import React from "react";

import { imgUrl } from "../../services/movies-api";

import s from "./Cast.module.css";

const Cast = (casts) => {
  return (
    <div className={s.wrapper}>
      {casts.map(({ id, profile_path, name, character }) => (
        <div className={s.box} key={id}>
          {profile_path ? (
            <img
              className={s.avatar}
              src={`${imgUrl(profile_path)}`}
              alt={name}
            />
          ) : (
            <div className={s.empty}></div>
          )}
          <h3 className={s.name}>{name}</h3>
          <p>as {character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;

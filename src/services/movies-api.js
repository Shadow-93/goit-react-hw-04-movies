const key = "9a6a634d9ed7fceaaf7ddf5a728b2be9";
const URL = "https://api.themoviedb.org/3/";

const trendingMoviesApi = () => {
  return fetch(`${URL}trending/movie/day?api_key=${key}`)
    .then((res) => res.json())
    .then(({ results }) => results);
};

const searchMoviesApi = (query) => {
  if (query) {
    return fetch(`${URL}/search/movie?api_key=${key}`)
      .then((res) => res.json())
      .then(({ results }) => results);
  }
};

const movieId = (movieId, type) => {
  switch (type) {
    case "credits":
      return fetch(
        `${URL}movie/${movieId}/credits?api_key=${key}`
      ).then((res) => res.json());
    case "reviews":
      return fetch(
        `${URL}movie/${movieId}/reviews?api_key=${key}`
      ).then((res) => res.json());
    default:
      return fetch(`${URL}movie/${movieId}?api_key=${key}`).then((res) =>
        res.json()
      );
  }
};

const imgUrl = (url) => {
  return `https://image.tmdb.org/t/p/original${url}`;
};

export { trendingMoviesApi, searchMoviesApi, movieId, imgUrl };
